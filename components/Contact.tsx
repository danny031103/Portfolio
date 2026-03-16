'use client'
import { useState } from 'react'

const socials = [
  {
    label: 'Email',
    value: 'db4471@nyu.edu',
    href: 'mailto:db4471@nyu.edu',
    icon: (
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="text-[#3b82f6]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'daniel-brito-5a4160221',
    href: 'https://www.linkedin.com/in/daniel-brito-5a4160221/',
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" className="text-[#3b82f6]">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'danny031103',
    href: 'https://github.com/danny031103',
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" className="text-[#3b82f6]">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    value: '@dannybrito_',
    href: 'https://www.instagram.com/dannybrito_',
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" className="text-[#3b82f6]">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
]

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      const response = await fetch('https://formspree.io/f/meqyrreq', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (response.ok) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 bg-[#0a0a0a] border-t border-[#1f1f1f]">
      <div className="max-w-6xl mx-auto px-6">
        <span className="text-xs font-mono text-[#3b82f6] tracking-[0.2em] uppercase">
          // contact
        </span>
        <h2 className="text-3xl font-bold text-white mt-2 mb-4">Contact</h2>
        <p className="text-[#d4d4d4] mb-12 max-w-xl leading-relaxed text-sm">
          Whether you have an opportunity, a collaboration, or just want to connect — my inbox is open.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Links */}
          <div className="flex flex-col gap-6">
            {socials.map(({ label, value, href, icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 border border-[#1f1f1f] bg-[#111111] flex items-center justify-center group-hover:border-[#3b82f6]/40 transition-colors duration-200 shrink-0">
                  {icon}
                </div>
                <div>
                  <p className="text-xs text-[#a3a3a3] font-mono mb-1">{label}</p>
                  <p className="text-white text-sm group-hover:text-[#3b82f6] transition-colors duration-200">
                    {value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {[
              { id: 'name', label: 'Name', type: 'text', name: 'sender-name', placeholder: 'Your name' },
              { id: 'email', label: 'Email', type: 'email', name: 'sender-email', placeholder: 'your@email.com' },
            ].map((field) => (
              <div key={field.id}>
                <label htmlFor={field.id} className="block text-xs font-mono text-[#a3a3a3] uppercase tracking-widest mb-2">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  id={field.id}
                  name={field.name}
                  required
                  placeholder={field.placeholder}
                  className="w-full bg-[#111111] border border-[#1f1f1f] text-white px-4 py-3 text-sm focus:outline-none focus:border-[#3b82f6]/50 transition-colors duration-200 placeholder:text-[#2a2a2a]"
                />
              </div>
            ))}
            <div>
              <label htmlFor="message" className="block text-xs font-mono text-[#a3a3a3] uppercase tracking-widest mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="What's on your mind?"
                className="w-full bg-[#111111] border border-[#1f1f1f] text-white px-4 py-3 text-sm focus:outline-none focus:border-[#3b82f6]/50 transition-colors duration-200 resize-none placeholder:text-[#2a2a2a]"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'sending' || status === 'sent'}
              className="px-6 py-3 bg-[#3b82f6] text-white font-semibold text-sm hover:bg-[#2563eb] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'sending'
                ? 'Sending...'
                : status === 'sent'
                ? 'Message Sent ✓'
                : 'Send Message'}
            </button>
            {status === 'error' && (
              <p className="text-red-400 text-xs font-mono">
                Something went wrong. Try emailing me directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
