"use client";

import { ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    description:
      "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  },
  {
    description:
      "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
  },
  {
    description:
      "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
  },
];

export function CaseStudies() {
  return (
    <section className="px-4 py-16 md:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 flex flex-col items-start gap-6 md:flex-row md:items-center">
          <h2 className="shrink-0 rounded-md bg-accent px-2 py-1 text-[40px] leading-[50px] font-medium text-foreground">
            Case Studies
          </h2>
          <p className="max-w-xl text-xl leading-7 text-foreground">
            Explore Real-Life Examples of Our Proven Digital Marketing Success
            through Our Case Studies
          </p>
        </div>

        {/* Case Studies Container */}
        <div className="rounded-[2.5rem] bg-foreground p-8 md:p-12 lg:p-16">
          <div className="flex flex-col gap-8 md:flex-row md:gap-0">
            {caseStudies.map((study, index) => (
              <div key={index} className="flex flex-1 flex-col md:flex-row">
                {/* Case Study Content */}
                <div className="flex flex-1 flex-col justify-between gap-6">
                  <p className="text-xl leading-7 text-white">
                    {study.description}
                  </p>
                  <a
                    href="#"
                    className="group inline-flex items-center gap-2 text-accent transition-opacity hover:opacity-80"
                  >
                    <span className="text-xl leading-7 font-medium">
                      Learn more
                    </span>
                    <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>

                {/* Vertical Divider - Hidden on mobile and after last item */}
                {index < caseStudies.length - 1 && (
                  <div className="hidden md:mx-8 md:block lg:mx-12">
                    <div className="h-full w-px bg-white" />
                  </div>
                )}

                {/* Horizontal Divider for mobile */}
                {index < caseStudies.length - 1 && (
                  <div className="my-8 h-px w-full bg-white/30 md:hidden" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
