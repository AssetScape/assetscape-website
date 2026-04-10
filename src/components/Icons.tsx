type IconProps = { className?: string }

export function IconCube({ className = 'h-10 w-10 text-emerald-600' }: IconProps) {
  return (
    <svg
      viewBox='0 0 24 24'
      aria-hidden='true'
      className={className}
      fill='none'
      stroke='currentColor'
      strokeWidth={1.6}
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M12 3 20 7.5v9L12 21l-8-4.5v-9L12 3Z' />
      <path d='m4 7.5 8 4.5 8-4.5' />
      <path d='M12 12v9' />
    </svg>
  )
}

export function IconNetwork({ className = 'h-10 w-10 text-emerald-600' }: IconProps) {
  return (
    <svg
      viewBox='0 0 24 24'
      aria-hidden='true'
      className={className}
      fill='none'
      stroke='currentColor'
      strokeWidth={1.6}
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <circle cx='5' cy='12' r='2.2' />
      <circle cx='12' cy='5' r='2.2' />
      <circle cx='19' cy='12' r='2.2' />
      <circle cx='12' cy='19' r='2.2' />
      <path d='M7.1 11.2 10.4 6.7' />
      <path d='m13.6 6.7 3.3 4.5' />
      <path d='m7.1 12.8 3.3 4.5' />
      <path d='m13.6 17.3 3.3-4.5' />
    </svg>
  )
}

export function IconSliders({ className = 'h-10 w-10 text-emerald-600' }: IconProps) {
  return (
    <svg
      viewBox='0 0 24 24'
      aria-hidden='true'
      className={className}
      fill='none'
      stroke='currentColor'
      strokeWidth={1.6}
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M7 4v8' />
      <path d='M7 16v4' />
      <path d='M12 4v4' />
      <path d='M12 12v8' />
      <path d='M17 4v12' />
      <path d='M17 18v2' />
      <circle cx='7' cy='13' r='2.4' />
      <circle cx='12' cy='9' r='2.4' />
      <circle cx='17' cy='16' r='2.4' />
    </svg>
  )
}

export function IconShield({ className = 'h-10 w-10 text-emerald-600' }: IconProps) {
  return (
    <svg
      viewBox='0 0 24 24'
      aria-hidden='true'
      className={className}
      fill='none'
      stroke='currentColor'
      strokeWidth={1.6}
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M12 3 5 6v5.8c0 4.7 3 7.9 7 9.2 4-1.3 7-4.5 7-9.2V6Z' />
      <path d='M9.5 12.5 11.3 14.3 14.7 10.9' />
    </svg>
  )
}

export function IconTarget({ className = 'h-10 w-10 text-emerald-600' }: IconProps) {
  return (
    <svg
      viewBox='0 0 24 24'
      aria-hidden='true'
      className={className}
      fill='none'
      stroke='currentColor'
      strokeWidth={1.6}
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <circle cx='12' cy='12' r='8.5' />
      <circle cx='12' cy='12' r='5.5' />
      <circle cx='12' cy='12' r='2.5' />
      <path d='M12 3v3' />
      <path d='M21 12h-3' />
      <path d='M12 21v-3' />
      <path d='M3 12h3' />
    </svg>
  )
}

export function IconCompass({ className = 'h-10 w-10 text-emerald-600' }: IconProps) {
  return (
    <svg
      viewBox='0 0 24 24'
      aria-hidden='true'
      className={className}
      fill='none'
      stroke='currentColor'
      strokeWidth={1.6}
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <circle cx='12' cy='12' r='9' />
      <path d='m14.8 9.2-2.1 5.6-5.5 2.2 2.1-5.6Z' />
      <path d='M12 12 9.4 9.4' />
    </svg>
  )
}

export function IconLink({ className = 'h-10 w-10 text-emerald-600' }: IconProps) {
  return (
    <svg
      viewBox='0 0 24 24'
      aria-hidden='true'
      className={className}
      fill='none'
      stroke='currentColor'
      strokeWidth={1.6}
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71' />
      <path d='M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71' />
    </svg>
  )
}

export function IconLayers({ className = 'h-10 w-10 text-emerald-600' }: IconProps) {
  return (
    <svg
      viewBox='0 0 24 24'
      aria-hidden='true'
      className={className}
      fill='none'
      stroke='currentColor'
      strokeWidth={1.6}
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='m12 2 10 6.5v7L12 22 2 15.5v-7L12 2Z' />
      <path d='M12 22v-7' />
      <path d='m22 8.5-10 7-10-7' />
      <path d='m2 15.5 10-7 10 7' />
    </svg>
  )
}

export function IconWrench({ className = 'h-10 w-10 text-emerald-600' }: IconProps) {
  return (
    <svg
      viewBox='0 0 24 24'
      aria-hidden='true'
      className={className}
      fill='none'
      stroke='currentColor'
      strokeWidth={1.6}
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76Z' />
    </svg>
  )
}

export function IconEye({ className = 'h-10 w-10 text-emerald-600' }: IconProps) {
  return (
    <svg
      viewBox='0 0 24 24'
      aria-hidden='true'
      className={className}
      fill='none'
      stroke='currentColor'
      strokeWidth={1.6}
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z' />
      <circle cx='12' cy='12' r='3' />
    </svg>
  )
}

export function IconBarChart({ className = 'h-10 w-10 text-emerald-600' }: IconProps) {
  return (
    <svg
      viewBox='0 0 24 24'
      aria-hidden='true'
      className={className}
      fill='none'
      stroke='currentColor'
      strokeWidth={1.6}
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M12 20V10' />
      <path d='M18 20V4' />
      <path d='M6 20v-4' />
    </svg>
  )
}

export function IconCheck({ className = 'h-10 w-10 text-emerald-600' }: IconProps) {
  return (
    <svg
      viewBox='0 0 24 24'
      aria-hidden='true'
      className={className}
      fill='none'
      stroke='currentColor'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M20 6 9 17l-5-5' />
    </svg>
  )
}
