// import React from 'react'

const Offsetprinting = () => {
  return (
    <div className="mt-10 min-h-screen bg-gradient-to-r from-pink-500 to-red-600 text-white">
      {/* NAVBAR */}
      {/* <header className="border-b border-white/20 bg-white/10 backdrop-blur sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-white text-red-600 flex items-center justify-center font-black text-sm tracking-tight">
              OP
            </div>
            <div>
              <p className="text-sm font-semibold leading-tight">
                PrintExpress Studio
              </p>
              <p className="text-[11px] text-red-100 leading-tight">
                Precision • Color • Quality
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-red-50">
            <a href="#services" className="hover:text-yellow-200 transition">Services</a>
            <a href="#products" className="hover:text-yellow-200 transition">Products</a>
            <a href="#process" className="hover:text-yellow-200 transition">Process</a>
            <a href="#contact" className="hover:text-yellow-200 transition">Contact</a>
          </nav>

          <a
            href="#contact"
            className="text-xs font-semibold rounded-full px-4 py-2 bg-white text-red-600 hover:bg-red-50 transition shadow-md shadow-red-900/40"
          >
            Get a Quote
          </a>
        </div>
      </header> */}

      {/* HERO */}
      <section className="border-b border-white/20">
        <div className="max-w-6xl mx-auto px-4 py-10 lg:py-16 grid lg:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/20 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-white"></span>
              <span className="text-[11px] tracking-wide font-medium text-white uppercase">
                High-Volume Offset Printing • Same Day Support
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
              Premium{" "}
              <span className="text-yellow-200">
                Offset Printing
              </span>{" "}
              for Brands that Stand Out.
            </h1>

            <p className="text-sm sm:text-base text-red-50/90 max-w-xl">
              From business cards to catalogues, we deliver sharp details, rich
              colors, and consistent quality across every print run – tailored
              for agencies, corporates, and growing businesses.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold bg-white text-red-600 hover:bg-red-50 transition shadow-md shadow-red-900/50"
              >
                Request Custom Quote
              </a>
              <a
                href="#services"
                className="inline-flex items-center rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold border border-white/70 text-white hover:bg-white/15 transition"
              >
                View Printing Services
              </a>
            </div>

            <div className="flex flex-wrap gap-6 text-[11px] sm:text-xs text-red-50/90">
              <div>
                <p className="font-semibold text-white">10,000+</p>
                <p>Business cards printed daily</p>
              </div>
              <div>
                <p className="font-semibold text-white">24–48 hrs</p>
                <p>Standard production time</p>
              </div>
              <div>
                <p className="font-semibold text-white">ISO-grade</p>
                <p>Color calibration & proofing</p>
              </div>
            </div>
          </div>

          {/* Right – Mockup / Cards */}
          <div className="relative">
            <div className="absolute -top-8 -right-4 h-40 w-40 rounded-full bg-white/40 blur-3xl" />
            <div className="absolute -bottom-10 -left-4 h-40 w-40 rounded-full bg-red-900/50 blur-3xl" />

            <div className="relative rounded-3xl border border-white/30 bg-white/15 p-5 shadow-2xl shadow-red-900/60">
              {/* Top bar */}
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs font-medium text-white">
                  Offset Job Overview
                </p>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-50 border border-emerald-200/60">
                  Machines Running
                </span>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 text-[11px]">
                <div className="rounded-xl border border-white/30 bg-white/10 p-3">
                  <p className="text-red-50 mb-1">Today’s Sheets</p>
                  <p className="text-lg font-semibold text-white">18,450</p>
                  <p className="text-[10px] text-emerald-200 mt-1">+12% vs avg</p>
                </div>
                <div className="rounded-xl border border-white/30 bg-white/10 p-3">
                  <p className="text-red-50 mb-1">Color Accuracy</p>
                  <p className="text-lg font-semibold text-white">99.2%</p>
                  <p className="text-[10px] text-red-100 mt-1">CMYK matched</p>
                </div>
                <div className="rounded-xl border border-white/30 bg-white/10 p-3">
                  <p className="text-red-50 mb-1">Turnaround</p>
                  <p className="text-lg font-semibold text-white">24–72h</p>
                  <p className="text-[10px] text-red-100 mt-1">Job dependent</p>
                </div>
              </div>

              {/* Product preview */}
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/30 bg-white/10 p-3 flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-semibold mb-1 text-white">
                      Corporate Brochure
                    </p>
                    <p className="text-[11px] text-red-50/90">
                      A4 • 170 GSM Art Paper • 4 Color
                    </p>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-[11px]">
                    <span className="px-2 py-0.5 rounded-full bg-pink-500/30 text-pink-50 border border-pink-100/70">
                      Offset
                    </span>
                    <span className="text-red-50/90">5,000 qty</span>
                  </div>
                </div>

                <div className="rounded-2xl border border-dashed border-white/40 bg-white/10 p-4 flex flex-col justify-between">
                  <p className="text-xs font-semibold mb-2 text-white">
                    Sample Print Pack
                  </p>
                  <p className="text-[11px] text-red-50/90 mb-2">
                    Feel the paper, finish & color depth before bulk printing.
                  </p>
                  <button className="mt-auto inline-flex justify-center rounded-full px-3 py-1.5 text-[11px] font-semibold bg-white text-red-600 hover:bg-red-50 transition">
                    Request Samples
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-b border-white/20 bg-white/10/">
        <div className="max-w-6xl mx-auto px-4 py-10 lg:py-14">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                Offset Printing Services
              </h2>
              <p className="text-sm text-red-50/90 mt-1 max-w-lg">
                End-to-end solutions from design support to final dispatch – optimized for
                bulk, consistent, and cost-effective printing.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Commercial Offset Printing",
                desc: "Brochures, catalogues, flyers, leaflets, and magazines for high-volume campaigns.",
                badge: "High Volume",
              },
              {
                title: "Business Stationery",
                desc: "Letterheads, envelopes, visiting cards, invoice books with brand-perfect colors.",
                badge: "Branding",
              },
              {
                title: "Packaging & Labels",
                desc: "Mono cartons, sleeves, inserts, and stickers with sharp registration & finishing.",
                badge: "Retail Ready",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/30 bg-white/15 p-5 hover:border-yellow-200 hover:-translate-y-0.5 transition"
              >
                <div className="mb-3 flex items-center justify-between gap-2">
                  <h3 className="text-sm font-semibold text-white">
                    {item.title}
                  </h3>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 border border-white/40 text-red-50">
                    {item.badge}
                  </span>
                </div>
                <p className="text-xs text-red-50/90 mb-3">
                  {item.desc}
                </p>
                <ul className="space-y-1.5 text-[11px] text-red-50">
                  <li>• CMYK & special colors</li>
                  <li>• Multiple paper GSM options</li>
                  <li>• Spot UV, lamination, folding, binding</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section id="products" className="border-b border-white/20 bg-white/5">
        <div className="max-w-6xl mx-auto px-4 py-10 lg:py-14">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                Products We Print Everyday
              </h2>
              <p className="text-sm text-red-50/90 mt-1 max-w-lg">
                Popular offset products to keep your brand visible – in offices, stores,
                events, and hands of your customers.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 text-[11px]">
            {[
              "Business Cards",
              "Brochures & Flyers",
              "Books & Catalogues",
              "Letterheads & Envelopes",
              "Posters & Danglers",
              "Calendars",
              "Packaging Inserts",
              "Stickers & Labels",
            ].map((p) => (
              <div
                key={p}
                className="rounded-xl border border-white/30 bg-white/15 px-3.5 py-3 hover:border-yellow-200 hover:bg-white/25 transition flex items-center justify-between gap-2"
              >
                <span className="font-medium text-white">{p}</span>
                <span className="text-[10px] text-red-50">
                  Offset • Bulk
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="border-b border-white/20 bg-white/10">
        <div className="max-w-6xl mx-auto px-4 py-10 lg:py-14">
          <h2 className="text-2xl font-semibold tracking-tight mb-6">
            Our Printing Process
          </h2>
          <div className="grid lg:grid-cols-[1.4fr,1fr] gap-8 items-start">
            <div className="space-y-4 text-sm">
              {[
                {
                  step: "01",
                  title: "Artwork Check & Pre-Press",
                  text: "We verify file resolution, colors, bleed, and margins. Imposition and plate making are done for accurate registration.",
                },
                {
                  step: "02",
                  title: "Press Setup & Printing",
                  text: "Plates are mounted, ink levels calibrated, and test sheets run to match color proofs before full production.",
                },
                {
                  step: "03",
                  title: "Finishing & Quality Check",
                  text: "Cutting, folding, binding, lamination, and final QC ensure every piece matches approved standards.",
                },
                {
                  step: "04",
                  title: "Packing & Dispatch",
                  text: "Prints are boxed securely, labelled by job, and delivered to your office, warehouse, or multiple branches.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-3 rounded-2xl border border-white/30 bg-white/15 p-4"
                >
                  <div className="mt-0.5">
                    <div className="h-8 w-8 rounded-full border border-yellow-200 flex items-center justify-center text-[11px] font-semibold text-yellow-100">
                      {item.step}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white mb-1">
                      {item.title}
                    </p>
                    <p className="text-xs text-red-50/90">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Small “why choose us” card */}
            <div className="rounded-3xl border border-white/35 bg-white/15 p-5 shadow-lg shadow-red-900/60">
              <p className="text-xs font-semibold text-white mb-2">
                Why businesses trust us
              </p>
              <ul className="space-y-2 text-[11px] text-red-50">
                <li>• Color-calibrated machines for consistent brand colors.</li>
                <li>• Detailed proofing before bulk print runs.</li>
                <li>• Support for repeated jobs with same quality every time.</li>
                <li>• Guidance on paper, finish, and size to optimize cost.</li>
              </ul>

              <div className="mt-4 grid grid-cols-3 gap-3 text-[11px]">
                <div className="rounded-xl border border-white/35 bg-white/15 p-3">
                  <p className="text-xs font-semibold text-white">500+</p>
                  <p className="text-[11px] text-red-50">
                    Active business clients
                  </p>
                </div>
                <div className="rounded-xl border border-white/35 bg-white/15 p-3">
                  <p className="text-xs font-semibold text-white">15+ yrs</p>
                  <p className="text-[11px] text-red-50">
                    Printing experience
                  </p>
                </div>
                <div className="rounded-xl border border-white/35 bg-white/15 p-3">
                  <p className="text-xs font-semibold text-white">99%</p>
                  <p className="text-[11px] text-red-50">
                    On-time deliveries
                  </p>
                </div>
              </div>

              <a
                href="#contact"
                className="mt-5 inline-flex w-full items-center justify-center rounded-full px-4 py-2 text-xs font-semibold bg-white text-red-600 hover:bg-red-50 transition"
              >
                Talk to Printing Expert
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT / QUOTE FORM */}
      <section id="contact" className="bg-white/10">
        <div className="max-w-6xl mx-auto px-4 py-10 lg:py-14">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                Get a Custom Offset Printing Quote
              </h2>
              <p className="text-sm text-red-50/90 mt-1 mb-4 max-w-md">
                Share your job details – product type, quantity, size, and paper preferences.
                We’ll respond with pricing and timelines.
              </p>

              <ul className="space-y-2 text-[12px] text-red-50">
                <li>• WhatsApp / email proofs before printing</li>
                <li>• Bulk pricing for repeat orders</li>
                <li>• Dispatch support across multiple locations</li>
              </ul>
            </div>

            <form className="rounded-2xl border border-white/30 bg-white/15 p-5 space-y-4">
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-medium text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 w-full rounded-lg border border-white/40 bg-white/10 px-3 py-2 text-xs text-white placeholder:text-red-100/80 outline-none focus:ring-2 focus:ring-yellow-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-medium text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    className="mt-1 w-full rounded-lg border border-white/40 bg-white/10 px-3 py-2 text-xs text-white placeholder:text-red-100/80 outline-none focus:ring-2 focus:ring-yellow-200"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-medium text-white">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    className="mt-1 w-full rounded-lg border border-white/40 bg-white/10 px-3 py-2 text-xs text-white placeholder:text-red-100/80 outline-none focus:ring-2 focus:ring-yellow-200"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-medium text-white">
                    Product
                  </label>
                  <select className="mt-1 w-full rounded-lg border border-white/40 bg-white/10 px-3 py-2 text-xs text-white outline-none focus:ring-2 focus:ring-yellow-200">
                    <option className="bg-red-600 text-white">Business Cards</option>
                    <option className="bg-red-600 text-white">Brochures</option>
                    <option className="bg-red-600 text-white">Catalogues / Books</option>
                    <option className="bg-red-600 text-white">Packaging</option>
                    <option className="bg-red-600 text-white">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-medium text-white">
                    Quantity
                  </label>
                  <input
                    type="text"
                    className="mt-1 w-full rounded-lg border border-white/40 bg-white/10 px-3 py-2 text-xs text-white placeholder:text-red-100/80 outline-none focus:ring-2 focus:ring-yellow-200"
                    placeholder="e.g. 5,000"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-medium text-white">
                    City
                  </label>
                  <input
                    type="text"
                    className="mt-1 w-full rounded-lg border border-white/40 bg-white/10 px-3 py-2 text-xs text-white placeholder:text-red-100/80 outline-none focus:ring-2 focus:ring-yellow-200"
                    placeholder="Your city"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-medium text-white">
                  Job Details / Paper / Finish
                </label>
                <textarea
                  rows={3}
                  className="mt-1 w-full rounded-lg border border-white/40 bg-white/10 px-3 py-2 text-xs text-white placeholder:text-red-100/80 outline-none focus:ring-2 focus:ring-yellow-200 resize-none"
                  placeholder="Share size (A4/A5/custom), paper GSM, sides (single/double), lamination, special requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-white hover:bg-red-50 text-xs font-semibold text-red-600 py-2.5 mt-2 shadow-md shadow-red-900/40 transition"
              >
                Submit Quote Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/20 bg-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-red-50">
          <p>© {new Date().getFullYear()} Offset Print Studio. All rights reserved.</p>
          <p>
            Need a job?{" "}
            <a href="/career" className="text-yellow-200 hover:text-white">
              View Careers
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Offsetprinting
