$ErrorActionPreference = 'Stop'

$root = Split-Path -Parent $PSScriptRoot
$buildsDir = Join-Path $root 'builds'
$distDir = Join-Path $root 'dist'
$repoVideo = Join-Path $root 'src\assets\AS_SHORT_720_optimized.mp4'
$fullVideo = Join-Path $buildsDir 'AS_SHORT_720_optimized-full-size.mp4'
$backupVideo = Join-Path $buildsDir '.AS_SHORT_720_optimized.repo-backup.mp4'

function New-ZipFromDirectory {
  param(
    [Parameter(Mandatory = $true)]
    [string]$SourceDirectory,
    [Parameter(Mandatory = $true)]
    [string]$DestinationZip
  )

  Add-Type -AssemblyName System.IO.Compression
  Add-Type -AssemblyName System.IO.Compression.FileSystem

  $sourceFullPath = [System.IO.Path]::GetFullPath($SourceDirectory).TrimEnd('\', '/')
  $sourceRoot = $sourceFullPath + [System.IO.Path]::DirectorySeparatorChar
  $zipStream = [System.IO.File]::Open($DestinationZip, [System.IO.FileMode]::CreateNew)

  try {
    $archive = New-Object System.IO.Compression.ZipArchive($zipStream, [System.IO.Compression.ZipArchiveMode]::Create)

    try {
      $files = Get-ChildItem -LiteralPath $sourceFullPath -Recurse -File
      foreach ($file in $files) {
        $entryName = $file.FullName.Substring($sourceRoot.Length).Replace('\', '/')
        [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile(
          $archive,
          $file.FullName,
          $entryName,
          [System.IO.Compression.CompressionLevel]::Optimal
        ) | Out-Null
      }
    }
    finally {
      $archive.Dispose()
    }
  }
  finally {
    $zipStream.Dispose()
  }
}

function Test-OfficialBuildZip {
  param(
    [Parameter(Mandatory = $true)]
    [string]$ZipPath,
    [Parameter(Mandatory = $true)]
    [string]$ExpectedVideoPath
  )

  Add-Type -AssemblyName System.IO.Compression
  Add-Type -AssemblyName System.IO.Compression.FileSystem

  $expectedVideoLength = (Get-Item -LiteralPath $ExpectedVideoPath).Length
  $zip = [System.IO.Compression.ZipFile]::OpenRead($ZipPath)

  try {
    $requiredEntries = @(
      'index.html',
      'brochure/index.html',
      '3d-data-wrapper/index.html',
      '404.html'
    )

    foreach ($entryName in $requiredEntries) {
      if ($null -eq $zip.GetEntry($entryName)) {
        throw "Official build zip is missing required entry: $entryName"
      }
    }

    $badPrefixedEntry = $zip.Entries |
      Where-Object { $_.FullName -like 'dist/*' -or $_.FullName -like 'assetscape-website/*' } |
      Select-Object -First 1

    if ($null -ne $badPrefixedEntry) {
      throw "Official build zip includes an unexpected parent folder entry: $($badPrefixedEntry.FullName)"
    }

    $officialVideo = $zip.Entries |
      Where-Object { $_.FullName -like 'assets/AS_SHORT_720_optimized-*.mp4' -and $_.Length -eq $expectedVideoLength } |
      Select-Object -First 1

    if ($null -eq $officialVideo) {
      throw "Official build zip does not contain the full-size hero video."
    }
  }
  finally {
    $zip.Dispose()
  }
}

New-Item -ItemType Directory -Force -Path $buildsDir | Out-Null

if (-not (Test-Path -LiteralPath $repoVideo)) {
  throw "Expected repo video not found: $repoVideo"
}

if (-not (Test-Path -LiteralPath $fullVideo)) {
  throw "Expected full-size build video not found: $fullVideo"
}

$dateStamp = Get-Date -Format 'yyyyMMdd'
$existingBuilds = Get-ChildItem -LiteralPath $buildsDir -Filter "website-build-$dateStamp.*.zip" -File -ErrorAction SilentlyContinue
$nextBuildNumber = 1

foreach ($build in $existingBuilds) {
  if ($build.BaseName -match "^website-build-$dateStamp\.(\d+)$") {
    $candidate = [int]$Matches[1] + 1
    if ($candidate -gt $nextBuildNumber) {
      $nextBuildNumber = $candidate
    }
  }
}

$zipPath = Join-Path $buildsDir "website-build-$dateStamp.$nextBuildNumber.zip"

Push-Location $root
try {
  Copy-Item -LiteralPath $repoVideo -Destination $backupVideo -Force
  Copy-Item -LiteralPath $fullVideo -Destination $repoVideo -Force

  try {
    & npm run build
    if ($LASTEXITCODE -ne 0) {
      throw "npm run build failed with exit code $LASTEXITCODE"
    }

    New-ZipFromDirectory -SourceDirectory $distDir -DestinationZip $zipPath
    Test-OfficialBuildZip -ZipPath $zipPath -ExpectedVideoPath $fullVideo
  }
  finally {
    Copy-Item -LiteralPath $backupVideo -Destination $repoVideo -Force
    Remove-Item -LiteralPath $backupVideo -Force -ErrorAction SilentlyContinue
  }
}
finally {
  Pop-Location
}

Write-Host "Created official build: $zipPath"
