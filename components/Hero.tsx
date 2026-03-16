export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-[#0a0a0a]">
      {/* Softened grid background */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #1f1f1f 1px, transparent 1px),
            linear-gradient(to bottom, #1f1f1f 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 w-full pt-28 pb-20">
        <p className="text-[#3b82f6] text-xs font-mono tracking-[0.25em] uppercase mb-6">
          Hi, I&apos;m
        </p>
        <h1
          className="font-bold text-white leading-none tracking-tight mb-4"
          style={{ fontSize: 'clamp(3rem, 9vw, 7rem)' }}
        >
          Daniel Brito
        </h1>
        <h2
          className="font-light text-[#d4d4d4] mb-8"
          style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.75rem)' }}
        >
          Software Engineer{' '}
          <span className="text-[#3b82f6]">&amp;</span>{' '}
          Founder
        </h2>
        <p
          className="text-[#d4d4d4] max-w-2xl leading-relaxed mb-12"
          style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)' }}
        >
          NYU CS graduate building intelligent systems — from cloud financial infrastructure at{' '}
          <span className="text-[#f5f5f5]">PepsiCo</span> to AI-powered aquarium monitoring at{' '}
          <span className="text-[#f5f5f5]">Vision Aquatics</span>.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="px-7 py-3.5 bg-[#3b82f6] text-white font-semibold hover:bg-[#2563eb] transition-colors duration-200 text-sm"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-7 py-3.5 border border-[#1f1f1f] text-[#f5f5f5] hover:border-[#404040] transition-colors duration-200 text-sm"
          >
            Get In Touch
          </a>
        </div>

        {/* Status bar */}
        <div className="mt-16 flex flex-wrap items-center gap-6 text-sm text-[#d4d4d4]">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#3b82f6] inline-block animate-pulse" />
            Open to opportunities
          </span>
          <span>Brooklyn, NY</span>
          <span>NYU Computer Science &apos;25</span>
        </div>
      </div>
    </section>
  )
}
