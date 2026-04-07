const MAILTO = 'mailto:enquiries@assetscape.co.uk?subject=Enquiry%20from%20AssetScape%20website'

export function CTABlock({
  heading,
  buttonLabel = 'Get in touch',
  variant = 'light',
}: {
  heading: string
  buttonLabel?: string
  variant?: 'light' | 'dark'
}) {
  const bg =
    variant === 'dark'
      ? 'bg-neutral-900 text-white'
      : 'bg-white border border-neutral-200'

  const btnClasses =
    variant === 'dark'
      ? 'border-white bg-white text-neutral-900 hover:bg-transparent hover:text-white'
      : 'border-neutral-900 bg-neutral-900 text-white hover:bg-white hover:text-neutral-900'

  return (
    <section className={`${bg} py-12`}>
      <div className='mx-auto max-w-6xl px-4 text-center'>
        <p className='text-lg font-semibold md:text-xl'>{heading}</p>
        <div className='mt-5'>
          <a
            href={MAILTO}
            className={`inline-flex items-center rounded-full border px-6 py-3 text-sm font-semibold shadow-sm transition ${btnClasses}`}
          >
            {buttonLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
