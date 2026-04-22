"use client";

export function CTASection() {
  return (
    <section className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-secondary p-8 md:p-12 lg:p-16">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
            {/* Left Content */}
            <div className="z-10 max-w-md space-y-6 text-center lg:text-left">
              <h3 className="text-2xl font-medium md:text-3xl lg:text-4xl">
                Let&apos;s make things happen
              </h3>
              <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
                Contact us today to learn more about how our digital marketing
                services can help your business grow and succeed online.
              </p>
              <button className="inline-flex items-center justify-center rounded-xl bg-foreground px-8 py-4 text-base font-medium text-background transition-transform hover:scale-105 active:scale-100">
                Get your free proposal
              </button>
            </div>

            {/* Right Illustration Placeholder */}
            <div className="relative hidden h-64 w-80 lg:block">
              {/* Decorative spiral lines */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-40 w-40 rounded-full border border-dashed border-neutral-400" />
                <div className="absolute h-48 w-48 rounded-full border border-dashed border-neutral-300" />
              </div>

              {/* Spiky circle character placeholder */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  {/* Spiky background */}
                  <div className="absolute -inset-4 flex items-center justify-center">
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute h-3 w-3 bg-foreground"
                        style={{
                          transform: `rotate(${i * 30}deg) translateY(-36px)`,
                          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                        }}
                      />
                    ))}
                  </div>
                  {/* Main circle face */}
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-foreground">
                    <div className="flex gap-3">
                      <div className="h-3 w-2 rounded-full bg-background" />
                      <div className="h-3 w-2 rounded-full bg-background" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Lime green 4-pointed star */}
              <div
                className="absolute bottom-4 left-12 h-16 w-16 bg-accent"
                style={{
                  clipPath:
                    "polygon(50% 0%, 60% 40%, 100% 50%, 60% 60%, 50% 100%, 40% 60%, 0% 50%, 40% 40%)",
                }}
              />

              {/* Gray star */}
              <div
                className="absolute bottom-8 right-8 h-14 w-14 bg-neutral-300"
                style={{
                  clipPath:
                    "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                }}
              />
            </div>

            {/* Mobile illustration placeholder */}
            <div className="relative h-48 w-full max-w-xs lg:hidden">
              <div className="flex h-full items-center justify-center">
                {/* Simplified mobile version */}
                <div className="relative">
                  {/* Main circle face */}
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-foreground">
                    <div className="flex gap-2">
                      <div className="h-2 w-1.5 rounded-full bg-background" />
                      <div className="h-2 w-1.5 rounded-full bg-background" />
                    </div>
                  </div>
                  {/* Lime star */}
                  <div
                    className="absolute -bottom-6 -left-4 h-10 w-10 bg-accent"
                    style={{
                      clipPath:
                        "polygon(50% 0%, 60% 40%, 100% 50%, 60% 60%, 50% 100%, 40% 60%, 0% 50%, 40% 40%)",
                    }}
                  />
                  {/* Gray star */}
                  <div
                    className="absolute -right-8 -bottom-2 h-8 w-8 bg-neutral-300"
                    style={{
                      clipPath:
                        "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
