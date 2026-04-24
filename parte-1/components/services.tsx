'use client'

import Link from 'next/link'

interface ServiceCardProps {
  title: string[]
  bgColor: 'gray' | 'lime' | 'dark'
  titleHighlight: 'lime' | 'white'
  arrowColor: 'dark' | 'white'
  imageSrc: string
}

function ArrowIcon({ color }: { color: 'dark' | 'white' }) {
  const bgClass = color === 'white' ? 'bg-background' : 'bg-foreground'
  const arrowClass = color === 'white' ? 'text-foreground' : 'text-accent'

  return (
    <div className={`${bgClass} w-10 h-10 rounded-full flex items-center justify-center`}>
      <svg
        className={`w-7 h-7 ${arrowClass} rotate-15`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 17L17 7M17 7H7M17 7V17"
        />
      </svg>
    </div>
  )
}

function ServiceCard({ title, bgColor, titleHighlight, arrowColor, imageSrc }: ServiceCardProps) {
  const bgClasses = {
    gray: 'bg-secondary',
    lime: 'bg-accent',
    dark: 'bg-foreground',
  }

  const highlightClasses = {
    lime: 'bg-accent',
    white: 'bg-background',
  }

  const highlightTextClass = 'text-foreground'

  const textClasses = {
    gray: 'text-foreground',
    lime: 'text-foreground',
    dark: 'text-background',
  }

  const borderShadow = 'border-2 border-foreground shadow-[0px_6px_0px_0px_rgb(25,26,35)]'

  return (
    <div
      className={`${bgClasses[bgColor]} ${borderShadow} rounded-[2.5rem] p-8 md:p-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-6 min-h-[280px] md:min-h-[310px] relative overflow-hidden`}
    >
      {/* Content side */}
      <div className="flex flex-col justify-between h-full z-10">
        {/* Title with highlight */}
        <div className="mb-auto">
          {title.map((line, index) => (
            <h3 key={index} className="block">
              <span
                className={`${highlightClasses[titleHighlight]} ${highlightTextClass} text-[30px] leading-10 font-medium px-2 py-0.5 inline rounded-md`}
              >
                {line}
              </span>
            </h3>
          ))}
        </div>

        {/* Learn more link */}
        <Link href="#" className={`flex items-center gap-3 mt-8 group ${textClasses[bgColor]}`}>
          <ArrowIcon color={arrowColor} />
          <span className="text-xl leading-7 font-medium group-hover:underline underline-offset-4">
            Learn more
          </span>
        </Link>
      </div>

      {/* Service illustration */}
      <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 md:translate-x-0 flex items-center justify-center w-40 h-40 md:right-12">
        <img src={imageSrc} alt={title.join(' ')} className="w-full h-full object-contain" />
      </div>
    </div>
  )
}

const services: ServiceCardProps[] = [
  {
    title: ['Search engine', 'optimization'],
    bgColor: 'gray',
    titleHighlight: 'lime',
    arrowColor: 'dark',
    imageSrc: '/images/services/SEO.svg',
  },
  {
    title: ['Pay-per-click', 'advertising'],
    bgColor: 'lime',
    titleHighlight: 'white',
    arrowColor: 'dark',
    imageSrc: '/images/services/PPC-adv.svg',
  },
  {
    title: ['Social Media', 'Marketing'],
    bgColor: 'dark',
    titleHighlight: 'white',
    arrowColor: 'white',
    imageSrc: '/images/services/SMM.svg',
  },
  {
    title: ['Email', 'Marketing'],
    bgColor: 'gray',
    titleHighlight: 'lime',
    arrowColor: 'dark',
    imageSrc: '/images/services/EM.svg',
  },
  {
    title: ['Content', 'Creation'],
    bgColor: 'lime',
    titleHighlight: 'white',
    arrowColor: 'dark',
    imageSrc: '/images/services/CC.svg',
  },
  {
    title: ['Analytics and', 'Tracking'],
    bgColor: 'dark',
    titleHighlight: 'lime',
    arrowColor: 'white',
    imageSrc: '/images/services/AT.svg',
  },
]

export function Services() {
  return (
    <section className="px-4 md:px-8 lg:px-16 pt-[140px] pb-[100px] max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10 mb-[80px]">
        <h2 className="shrink-0">
          <span className="bg-accent text-foreground text-[40px] leading-[50px] font-medium px-2 py-1 rounded-lg">
            Services
          </span>
        </h2>
        <p className="text-foreground text-xl leading-7 max-w-xl">
          At our digital marketing agency, we offer a range of services to help businesses grow and
          succeed online. These services include:
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  )
}
