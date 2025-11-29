// src/components/Infra.jsx

import Video1 from "./Videos/Video1.mp4";
import Video2 from "./Videos/Video2.mp4";
import Video3 from "./Videos/Video3.mp4";
import Video4 from "./Videos/Video4.mp4";
import Video5 from "./Videos/Video5.mp4";
import Video6 from "./Videos/Video6.mp4";
import Video7 from "./Videos/Video7.mp4";
import Video8 from "./Videos/Video8.mp4";
import Video9 from "./Videos/Video9.mp4";
import Video10 from "./Videos/Video10.mp4";
import Video11 from "./Videos/Video11.mp4";
import Video12 from "./Videos/Video12.mp4";

const Infra = () => {
  return (
    <section className="border-t border-red-900/60 bg-gradient-to-r from-zinc-950 via-zinc-900 to-red-950/70">
      <div className="max-w-6xl mx-auto px-4 py-14 lg:py-20 text-center">

        {/* Section Heading */}
        <span className="inline-flex items-center rounded-full border border-red-500/50 bg-red-600/15 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-red-200">
          Our Work Experience
        </span>

        <h2 className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight text-zinc-50">
          Real Printing. Real Projects. Real <span className="text-red-400">Experience.</span>
        </h2>

        <p className="mt-3 text-sm text-zinc-400 max-w-2xl mx-auto">
          Watch behind the scenes of how PrintExpress Pune brings your ideas to life —
          from prepress to packaging — with precision and care.
        </p>

        {/* Video Grid */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Video 1 */}
          <div className="group relative rounded-2xl overflow-hidden border border-red-800/50 bg-zinc-900/80 shadow-lg shadow-black/40">
            <video
              src={Video1}
              muted
              loop
              autoPlay
              playsInline
              className="w-full h-56 object-cover object-center transition-all duration-300"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/60 to-transparent px-3 pb-3 pt-8 text-left">
              <p className="text-sm font-semibold text-red-100">Offset Printing Process</p>
              <p className="text-[11px] text-zinc-300">High-volume brochure production</p>
            </div>
          </div>

          {/* Video 2 */}
          <div className="group relative rounded-2xl overflow-hidden border border-red-800/50 bg-zinc-900/80 shadow-lg shadow-black/40">
            <video src={Video2} muted loop autoPlay playsInline className="w-full h-56 object-cover object-center" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/60 to-transparent px-3 pb-3 pt-8 text-left">
              <p className="text-sm font-semibold text-red-100">Packaging & Finishing</p>
              <p className="text-[11px] text-zinc-300">Custom box printing & lamination</p>
            </div>
          </div>

          {/* Video 3 */}
          <div className="group relative rounded-2xl overflow-hidden border border-red-800/50 bg-zinc-900/80 shadow-lg shadow-black/40">
            <video src={Video3} muted loop autoPlay playsInline className="w-full h-56 object-cover object-center" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/60 to-transparent px-3 pb-3 pt-8 text-left">
              <p className="text-sm font-semibold text-red-100">Digital Printing Highlights</p>
              <p className="text-[11px] text-zinc-300">Short-run, on-demand prints</p>
            </div>
          </div>

          {/* Video 4 */}
          <div className="group relative rounded-2xl overflow-hidden border border-red-800/50 bg-zinc-900/80 shadow-lg shadow-black/40">
            <video src={Video4} muted loop autoPlay playsInline className="w-full h-56 object-cover object-center" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/60 to-transparent px-3 pb-3 pt-8 text-left">
              <p className="text-sm font-semibold text-red-100">Business Card Printing</p>
              <p className="text-[11px] text-zinc-300">Premium matte & texture finishes</p>
            </div>
          </div>

          {/* Video 5 */}
          <div className="group relative rounded-2xl overflow-hidden border border-red-800/50 bg-zinc-900/80 shadow-lg shadow-black/40">
            <video src={Video5} muted loop autoPlay playsInline className="w-full h-56 object-cover object-center" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/60 to-transparent px-3 pb-3 pt-8 text-left">
              <p className="text-sm font-semibold text-red-100">Catalogue Production</p>
              <p className="text-[11px] text-zinc-300">Multi-page color-accurate printing</p>
            </div>
          </div>

          {/* Video 6 */}
          <div className="group relative rounded-2xl overflow-hidden border border-red-800/50 bg-zinc-900/80 shadow-lg shadow-black/40">
            <video src={Video6} muted loop autoPlay playsInline className="w-full h-56 object-cover object-center" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/60 to-transparent px-3 pb-3 pt-8 text-left">
              <p className="text-sm font-semibold text-red-100">Poster & Banner Jobs</p>
              <p className="text-[11px] text-zinc-300">Vibrant large format printing</p>
            </div>
          </div>

          {/* Video 7 */}
          <div className="group relative rounded-2xl overflow-hidden border border-red-800/50 bg-zinc-900/80 shadow-lg shadow-black/40">
            <video src={Video7} muted loop autoPlay playsInline className="w-full h-56 object-cover object-center" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/60 to-transparent px-3 pb-3 pt-8 text-left">
              <p className="text-sm font-semibold text-red-100">Brochure Folding</p>
              <p className="text-[11px] text-zinc-300">Precise folds and alignment checks</p>
            </div>
          </div>

          {/* Video 8 */}
          <div className="group relative rounded-2xl overflow-hidden border border-red-800/50 bg-zinc-900/80 shadow-lg shadow-black/40">
            <video src={Video8} muted loop autoPlay playsInline className="w-full h-56 object-cover object-center" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/60 to-transparent px-3 pb-3 pt-8 text-left">
              <p className="text-sm font-semibold text-red-100">Lamination Work</p>
              <p className="text-[11px] text-zinc-300">Gloss, matte, and velvet lamination</p>
            </div>
          </div>

          {/* Video 9 */}
          <div className="group relative rounded-2xl overflow-hidden border border-red-800/50 bg-zinc-900/80 shadow-lg shadow-black/40">
            <video src={Video9} muted loop autoPlay playsInline className="w-full h-56 object-cover object-center" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/60 to-transparent px-3 pb-3 pt-8 text-left">
              <p className="text-sm font-semibold text-red-100">Sheet Cutting & Finishing</p>
              <p className="text-[11px] text-zinc-300">Sharp edges, consistent sizing</p>
            </div>
          </div>

          {/* Video 10 */}
          <div className="group relative rounded-2xl overflow-hidden border border-red-800/50 bg-zinc-900/80 shadow-lg shadow-black/40">
            <video src={Video10} muted loop autoPlay playsInline className="w-full h-56 object-cover object-center" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/60 to-transparent px-3 pb-3 pt-8 text-left">
              <p className="text-sm font-semibold text-red-100">Spot UV & Embossing</p>
              <p className="text-[11px] text-zinc-300">Luxury branding finishes for business cards</p>
            </div>
          </div>

          {/* Video 11 */}
          <div className="group relative rounded-2xl overflow-hidden border border-red-800/50 bg-zinc-900/80 shadow-lg shadow-black/40">
            <video src={Video11} muted loop autoPlay playsInline className="w-full h-56 object-cover object-center" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/60 to-transparent px-3 pb-3 pt-8 text-left">
              <p className="text-sm font-semibold text-red-100">Label & Sticker Printing</p>
              <p className="text-[11px] text-zinc-300">Durable adhesive label runs</p>
            </div>
          </div>

          {/* Video 12 */}
          <div className="group relative rounded-2xl overflow-hidden border border-red-800/50 bg-zinc-900/80 shadow-lg shadow-black/40">
            <video src={Video12} muted loop autoPlay playsInline className="w-full h-56 object-cover object-center" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/60 to-transparent px-3 pb-3 pt-8 text-left">
              <p className="text-sm font-semibold text-red-100">Packing & Dispatch</p>
              <p className="text-[11px] text-zinc-300">Safe packaging and on-time delivery</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14">
          <p className="text-sm text-zinc-300 mb-3">
            Want to see your brand’s project featured here?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center rounded-full px-6 py-2.5 text-xs font-semibold bg-red-600 hover:bg-red-500 text-zinc-50 shadow-md shadow-red-900/60 transition"
          >
            Start Your Print Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Infra;
