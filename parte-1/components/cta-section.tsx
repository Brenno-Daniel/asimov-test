"use client";

export function CTASection() {
  return (
    <section className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="relative rounded-[2.5rem] bg-secondary p-8 md:p-12 lg:p-16">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
            {/* Left Content */}
            <div className="z-10 max-w-md space-y-6 text-center lg:text-left">
              <h3 className="text-[30px] leading-7 font-medium">
                Let&apos;s make things happen
              </h3>
              <p className="text-xl leading-7 text-foreground/80">
                Contact us today to learn more about how our digital marketing
                services can help your business grow and succeed online.
              </p>
              <button className="inline-flex items-center justify-center rounded-xl bg-foreground px-8 py-4 text-xl leading-7 font-medium text-background transition-transform hover:scale-105 active:scale-100">
                Get your free proposal
              </button>
            </div>

            {/* Right Illustration - with overflow effect */}
            <div className="hidden lg:block">
              <div className="w-[494px] h-[394px] -mt-20 -mb-20">
                <img 
                  src="/images/CTA-illustration.svg" 
                  alt="CTA illustration" 
                  className="w-[494px] h-[394px] max-w-none"
                />
              </div>
            </div>

            {/* Mobile illustration */}
            <div className="relative w-full max-w-xs lg:hidden">
              <img 
                src="/images/CTA-illustration.svg" 
                alt="CTA illustration" 
                className="w-48 h-48" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}