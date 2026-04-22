"use client"

import Link from "next/link"

interface ServiceCardProps {
  title: string[]
  bgColor: "gray" | "lime" | "dark"
  titleHighlight: "lime" | "white"
  arrowColor: "dark" | "lime"
}

function ArrowIcon({ color }: { color: "dark" | "lime" }) {
  const bgClass = color === "lime" ? "bg-accent" : "bg-foreground"
  const arrowClass = color === "lime" ? "text-foreground" : "text-background"
  
  return (
    <div className={`${bgClass} w-10 h-10 rounded-full flex items-center justify-center`}>
      <svg 
        className={`w-5 h-5 ${arrowClass}`} 
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

function ServiceCard({ title, bgColor, titleHighlight, arrowColor }: ServiceCardProps) {
  const bgClasses = {
    gray: "bg-secondary",
    lime: "bg-accent",
    dark: "bg-foreground"
  }
  
  const highlightClasses = {
    lime: "bg-accent",
    white: "bg-background"
  }
  
  const textClasses = {
    gray: "text-foreground",
    lime: "text-foreground",
    dark: "text-background"
  }
  
  const borderShadow = bgColor === "dark" 
    ? "border-2 border-foreground shadow-[6px_6px_0px_0px_rgba(185,255,102,1)]"
    : "border-2 border-foreground shadow-[6px_6px_0px_0px_rgba(25,26,35,1)]"

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
                className={`${highlightClasses[titleHighlight]} ${textClasses[bgColor]} text-2xl md:text-[1.75rem] font-medium px-2 py-0.5 inline rounded-md`}
              >
                {line}
              </span>
            </h3>
          ))}
        </div>
        
        {/* Learn more link */}
        <Link 
          href="#" 
          className={`flex items-center gap-3 mt-8 group ${textClasses[bgColor]}`}
        >
          <ArrowIcon color={arrowColor} />
          <span className="text-lg font-medium group-hover:underline underline-offset-4">
            Learn more
          </span>
        </Link>
      </div>
      
      {/* Illustration placeholder */}
      <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 md:relative md:right-0 md:top-0 md:translate-y-0">
        <div className="w-24 h-24 md:w-40 md:h-40 bg-neutral-300/30 border-2 border-dashed border-neutral-400/50 rounded-2xl flex items-center justify-center">
          <span className="text-neutral-500 text-xs text-center px-2">Illustration</span>
        </div>
      </div>
    </div>
  )
}

const services: ServiceCardProps[] = [
  {
    title: ["Search engine", "optimization"],
    bgColor: "gray",
    titleHighlight: "lime",
    arrowColor: "dark"
  },
  {
    title: ["Pay-per-click", "advertising"],
    bgColor: "lime",
    titleHighlight: "white",
    arrowColor: "dark"
  },
  {
    title: ["Social Media", "Marketing"],
    bgColor: "dark",
    titleHighlight: "white",
    arrowColor: "lime"
  },
  {
    title: ["Email", "Marketing"],
    bgColor: "gray",
    titleHighlight: "lime",
    arrowColor: "dark"
  },
  {
    title: ["Content", "Creation"],
    bgColor: "lime",
    titleHighlight: "white",
    arrowColor: "dark"
  },
  {
    title: ["Analytics and", "Tracking"],
    bgColor: "dark",
    titleHighlight: "lime",
    arrowColor: "dark"
  }
]

export function Services() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10 mb-12 md:mb-16">
        <h2 className="shrink-0">
          <span className="bg-accent text-foreground text-3xl md:text-4xl font-medium px-2 py-1 rounded-lg">
            Services
          </span>
        </h2>
        <p className="text-foreground text-base md:text-lg max-w-xl">
          At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
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
