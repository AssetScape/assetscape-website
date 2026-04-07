import { Link } from 'react-router-dom'
import type { To } from 'react-router-dom'
import { SectionMarker } from './SectionMarker'

type Section = { h?: string; p: string | string[]; image?: string }
type DetailPageProps = {
  title: string
  subtitle?: string
  sections: Section[]
  images?: string[]
  backTo: To
  backLabel: string
  markerLabel?: string
}

export function DetailPage({ title, subtitle, sections, images, backTo, backLabel, markerLabel }: DetailPageProps) {
  const hasSectionImages = sections.some((section) => Boolean(section.image))

  const imageList = hasSectionImages ? [] : images ?? []

  const sectionImageSources: (string | undefined)[] = []
  let imageCursor = 0

  sections.forEach((section) => {
    if (section.image) {
      sectionImageSources.push(section.image)
    } else if (imageCursor < imageList.length) {
      sectionImageSources.push(imageList[imageCursor])
      imageCursor += 1
    } else {
      sectionImageSources.push(undefined)
    }
  })

  const totalSectionImages = sectionImageSources.filter(Boolean).length
  const totalScreens = totalSectionImages

  let sectionImageCount = 0

  return (
    <section className='mx-auto max-w-5xl px-4 py-10'>
      <Link
        to={backTo}
        className='inline-flex items-center gap-2 text-sm font-medium text-neutral-700 transition hover:text-neutral-900'
      >
        {backLabel}
      </Link>

      {markerLabel && (
        <div className='mt-6 sm:mt-8'>
          <SectionMarker label={markerLabel} />
        </div>
      )}

      <div className='mt-4 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8'>
        <h1 className='text-3xl font-semibold tracking-tight'>{title}</h1>
        {subtitle && <p className='mt-3 text-base text-neutral-700'>{subtitle}</p>}
      </div>

      <div className='mt-8 space-y-6 sm:mt-10'>
        {sections.map((s, i) => {
          const sectionImage = sectionImageSources[i]
          const currentImageNumber = sectionImage ? ++sectionImageCount : null

          return (
            <article
              key={i}
              className='flex flex-col gap-6 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8 lg:grid lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-start'
            >
              <div className='space-y-3'>
                {s.h && (
                  <SectionMarker
                    as='h3'
                    label={s.h}
                    className='text-[0.65rem] tracking-[0.32em] sm:text-xs'
                  />
                )}

                {Array.isArray(s.p) ? (
                  <div className='space-y-2 text-sm text-neutral-800 sm:text-base'>
                    {s.p.map((line, idx) => (
                      <p key={idx}>{line}</p>
                    ))}
                  </div>
                ) : (
                  <p className='text-sm text-neutral-800 sm:text-base'>{s.p}</p>
                )}
              </div>

              {sectionImage && (
                <div className='flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border border-neutral-100 bg-white p-4 shadow-inner lg:ml-auto lg:w-full'>
                  <img
                    src={sectionImage}
                    alt={
                      currentImageNumber
                        ? `${title} screenshot ${currentImageNumber} of ${totalScreens}`
                        : title
                    }
                    className='max-h-full max-w-full object-contain'
                  />
                </div>
              )}
            </article>
          )
        })}
      </div>
    </section>
  )
}
