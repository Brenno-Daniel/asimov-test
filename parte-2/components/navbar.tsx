'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600">
              <span className="text-sm font-bold text-white">A</span>
            </div>
            <span className="text-lg font-semibold text-white">Asimov</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="#cursos"
              className="text-sm text-white/70 transition-colors hover:text-white"
            >
              Cursos
            </Link>
            <Link href="#blog" className="text-sm text-white/70 transition-colors hover:text-white">
              Blog
            </Link>
            <Link
              href="#sobre"
              className="text-sm text-white/70 transition-colors hover:text-white"
            >
              Sobre
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href="#"
              className="rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-white/20"
            >
              Entrar
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-white/70 transition-colors hover:bg-white/10 hover:text-white md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t border-white/5 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              <Link
                href="#cursos"
                className="text-sm text-white/70 transition-colors hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Cursos
              </Link>
              <Link
                href="#blog"
                className="text-sm text-white/70 transition-colors hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="#sobre"
                className="text-sm text-white/70 transition-colors hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Sobre
              </Link>
              <Link
                href="#"
                className="mt-2 rounded-lg bg-white/10 px-4 py-2 text-center text-sm font-medium text-white transition-all hover:bg-white/20"
                onClick={() => setIsOpen(false)}
              >
                Entrar
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
