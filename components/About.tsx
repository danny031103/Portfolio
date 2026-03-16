import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0a0a0a] border-t border-[#1f1f1f]">
      <div className="max-w-6xl mx-auto px-6">
        <span className="text-xs font-mono text-[#3b82f6] tracking-[0.2em] uppercase">
          // about
        </span>
        <h2 className="text-3xl font-bold text-white mt-2 mb-12">About</h2>

        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-12 items-center">
          {/* Photo */}
          <div className="relative">
            {/* Offset accent border */}
            <div className="absolute inset-0 translate-x-3 translate-y-3 border border-[#3b82f6]/20 pointer-events-none" />
            <div className="relative w-full aspect-[3/4] overflow-hidden border border-[#1f1f1f]">
              <Image
                src="/profpic.jpg"
                alt="Daniel Brito"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col gap-5 text-[#d4d4d4] leading-relaxed text-sm">
            <p>
              I&apos;m originally from Miami, FL and currently based in Brooklyn, NY. I studied
              Computer Science at NYU and now work as a Technology Analyst at PepsiCo while building{' '}
              <span className="text-white">Vision Aquatics</span> on the side.
            </p>
            <p>
              In my free time I enjoy SCUBA diving, spearfishing, running — I&apos;ve completed two
              marathons — snowboarding, and keeping reef aquariums. The aquarium hobby is actually
              what inspired Vision Aquatics.
            </p>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-5 pt-6 border-t border-[#1f1f1f]">
              {[
                { label: 'From', value: 'Miami, FL' },
                { label: 'Based in', value: 'Brooklyn, NY' },
                { label: 'Languages', value: 'English, Spanish' },
                { label: 'Interests', value: 'Diving, Spearfishing, Running, Fish-keeping, Snowboarding' },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-xs font-mono text-[#a3a3a3] uppercase tracking-widest mb-1">{label}</p>
                  <p className="text-white text-sm">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
