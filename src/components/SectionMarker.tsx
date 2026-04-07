import type { HTMLAttributes } from 'react'

type SectionMarkerProps = {
  label: string
  as?: 'div' | 'h2' | 'h3' | 'h4' | 'h5'
} & HTMLAttributes<HTMLDivElement>

export function SectionMarker({ label, as: Component = 'div', className = '', ...props }: SectionMarkerProps) {
  const markerClasses = [
    'flex items-center gap-3 text-xs md:text-sm font-semibold uppercase tracking-[0.35em] text-neutral-500',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Component className={markerClasses} {...props}>
      <span aria-hidden className='hidden sm:block h-px flex-1 bg-neutral-200' />
      <span className='inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1.5 shadow-sm'>
        <span aria-hidden className='h-2.5 w-2.5 rounded-full bg-emerald-500' />
        {label}
      </span>
      <span aria-hidden className='hidden sm:block h-px flex-1 bg-neutral-200' />
    </Component>
  )
}
