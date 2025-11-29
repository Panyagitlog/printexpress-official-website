import Printexpress from "./Images/GeminiHomo1.png"

export const Aboutus = () => {
  return (
    <>
      <div className="bg-zinc-950 text-zinc-50">
        {/* ABOUT + IMAGE SECTION */}
        <div className="max-w-6xl mx-auto px-4 lg:px-6 pt-24 pb-16">
          <div className="flex flex-col md:flex-row items-center gap-10 bg-gradient-to-r from-zinc-900 via-zinc-950 to-red-900/70 p-8 md:p-10 rounded-3xl shadow-2xl shadow-black/50 border border-red-800/40">
            {/* Text Section */}
            <div className="relative md:w-1/2 space-y-5">
              <span className="inline-flex items-center rounded-full border border-red-500/60 bg-red-600/15 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-red-200">
                About PrintExpress Pune
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">
                High-quality{" "}
                <span className="text-red-400">
                  offset & digital printing
                </span>{" "}
                crafted in Pune.
              </h2>

              <p className="text-sm sm:text-base text-zinc-300">
                PrintExpress Pune is a full-service print studio specialising in
                offset, digital, and packaging solutions for businesses, agencies,
                and brands across Maharashtra. From visiting cards to catalogues,
                we focus on color accuracy, paper quality, and on-time delivery.
              </p>

              <p className="text-sm text-zinc-400">
                We work closely with startups, corporates, events, schools, and
                NGOs to deliver print that not only looks premium, but also feels
                aligned with their brand story.
              </p>

              <div className="mt-4 flex flex-wrap gap-6 text-[11px] sm:text-xs text-zinc-300">
                <div>
                  <p className="font-semibold text-red-200">10+ years</p>
                  <p>Experience in commercial printing</p>
                </div>
                <div>
                  <p className="font-semibold text-red-200">500+ brands</p>
                  <p>Trusted us with their print work</p>
                </div>
                <div>
                  <p className="font-semibold text-red-200">24–72 hrs</p>
                  <p>Standard turnaround for most jobs</p>
                </div>
              </div>

              <div className="pt-3 border-t border-red-900/60 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-red-500/80 flex items-center justify-center text-xs font-bold">
                  PE
                </div>
                <div className="text-xs">
                  <p className="font-semibold text-zinc-100">
                    PrintExpress Pune Team
                  </p>
                  <p className="text-zinc-400">
                    “Every print job is treated like a portfolio piece.”
                  </p>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-4 rounded-[2.2rem] bg-red-500/30 blur-3xl opacity-60" />
                <div className="relative rounded-[2rem] overflow-hidden border border-red-800/60 bg-zinc-900/80 shadow-2xl">
                  <img
                    className="h-72 w-full object-cover"
                    src={Printexpress} alt="Print studio workspace"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-zinc-950/95 via-zinc-950/60 to-transparent px-4 pb-4 pt-10">
                    <p className="text-xs font-semibold text-red-100">
                      Inside PrintExpress Pune
                    </p>
                    <p className="text-[11px] text-zinc-300">
                      Modern offset machines • Color-calibrated workflow •
                      Quality check at every stage.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* JOURNEY / TIMELINE SECTION */}
        <section className="border-t border-red-900/60 bg-zinc-950">
          <div className="mx-auto w-full max-w-6xl px-4 py-12 md:px-6 md:py-16 lg:py-20">
            <div className="flex flex-col items-center mb-10 text-center">
              <span className="inline-flex items-center rounded-full border border-red-500/50 bg-red-600/15 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-red-200">
                Our Journey
              </span>
              <h3 className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight text-zinc-50">
                How PrintExpress Pune grew with our customers
              </h3>
              <p className="mt-3 max-w-2xl text-sm text-zinc-400">
                From a small local print shop to a dedicated print partner for
                brands across Pune and beyond – here’s our story in milestones.
              </p>
            </div>

            <div className="relative">
              {/* Center vertical line */}
              <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-red-500 via-red-600 to-red-900" />

              {/* Timeline block 1 */}
              <div className="mb-16 flex items-center w-full">
                <div className="w-1/2 pr-5 md:pr-10 text-right">
                  <h5 className="text-lg md:text-2xl font-semibold text-red-100">
                    2019
                  </h5>
                  <p className="text-xs text-zinc-400">
                    The beginning
                  </p>
                </div>
                <div className="relative">
                  <div className="h-4 w-4 md:h-5 md:w-5 rounded-full bg-zinc-950 border-2 border-red-400 shadow-[0_0_0_4px_rgba(248,113,113,0.35)]" />
                </div>
                <div className="w-1/2 pl-5 md:pl-10">
                  <div className="rounded-2xl bg-zinc-900/90 border border-red-900/60 p-4">
                    <h6 className="text-md md:text-lg font-semibold text-zinc-50 mb-1">
                      PrintExpress Pune was born
                    </h6>
                    <p className="text-sm text-zinc-400">
                      Started as a compact print studio in Pune focusing on
                      visiting cards, letterheads, and basic commercial printing
                      for local businesses.
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline block 2 */}
              <div className="mb-16 flex items-center w-full">
                <div className="w-1/2 pr-5 md:pr-10 text-right">
                  <h5 className="text-lg md:text-2xl font-semibold text-red-100">
                    2021
                  </h5>
                  <p className="text-xs text-zinc-400">
                    Scaling up
                  </p>
                </div>
                <div className="relative">
                  <div className="h-4 w-4 md:h-5 md:w-5 rounded-full bg-zinc-950 border-2 border-red-400 shadow-[0_0_0_4px_rgba(248,113,113,0.35)]" />
                </div>
                <div className="w-1/2 pl-5 md:pl-10">
                  <div className="rounded-2xl bg-zinc-900/90 border border-red-900/60 p-4">
                    <h6 className="text-md md:text-lg font-semibold text-zinc-50 mb-1">
                      First four-color offset machine
                    </h6>
                    <p className="text-sm text-zinc-400">
                      Upgraded to handle brochures, catalogues, and marketing
                      collateral with higher volumes and better color accuracy.
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline block 3 */}
              <div className="mb-16 flex items-center w-full">
                <div className="w-1/2 pr-5 md:pr-10 text-right">
                  <h5 className="text-lg md:text-2xl font-semibold text-red-100">
                    2023
                  </h5>
                  <p className="text-xs text-zinc-400">
                    Expanding services
                  </p>
                </div>
                <div className="relative">
                  <div className="h-4 w-4 md:h-5 md:w-5 rounded-full bg-zinc-950 border-2 border-red-400 shadow-[0_0_0_4px_rgba(248,113,113,0.35)]" />
                </div>
                <div className="w-1/2 pl-5 md:pl-10">
                  <div className="rounded-2xl bg-zinc-900/90 border border-red-900/60 p-4">
                    <h6 className="text-md md:text-lg font-semibold text-zinc-50 mb-1">
                      Packaging & custom branding
                    </h6>
                    <p className="text-sm text-zinc-400">
                      Started offering mono cartons, inserts, danglers, and
                      event branding materials for exhibitions and corporate
                      events in Pune.
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline block 4 */}
              <div className="mb-4 flex items-center w-full">
                <div className="w-1/2 pr-5 md:pr-10 text-right">
                  <h5 className="text-lg md:text-2xl font-semibold text-red-100">
                    2025 – Today
                  </h5>
                  <p className="text-xs text-zinc-400">
                    Sustainable & tech-enabled
                  </p>
                </div>
                <div className="relative">
                  <div className="h-4 w-4 md:h-5 md:w-5 rounded-full bg-zinc-950 border-2 border-emerald-400 shadow-[0_0_0_4px_rgba(52,211,153,0.35)]" />
                </div>
                <div className="w-1/2 pl-5 md:pl-10">
                  <div className="rounded-2xl bg-zinc-900/90 border border-emerald-500/50 p-4">
                    <h6 className="text-md md:text-lg font-semibold text-zinc-50 mb-1">
                      Eco-friendly and customer-first
                    </h6>
                    <p className="text-sm text-zinc-300">
                      Introducing recycled paper options, optimized ink usage,
                      and digital proofing – while serving businesses across
                      Pune with faster turnaround and consistent quality.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-10 flex flex-col items-center text-center gap-3">
              <p className="text-sm text-zinc-300 max-w-xl">
                Looking for a long-term print partner in Pune? We’d love to
                understand your brand and suggest the right print solutions.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center rounded-full px-6 py-2.5 text-xs font-semibold bg-red-600 hover:bg-red-500 text-zinc-50 shadow-md shadow-red-900/60 transition"
              >
                Talk to the PrintExpress team
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
