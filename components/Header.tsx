'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Mail } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname(); // Detectăm pagina curentă

  // Lista de link-uri pentru a evita duplicarea codului
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Websites', href: '/websites' },
    { name: 'Apps & Mobile', href: '/mobile' },
  ];

  // 1. Click în afară
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // 2. BLOCARE SCROLL când meniul e deschis
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-md bg-slate-950/40">
        <div ref={menuRef} className="w-full max-w-[1300px] mx-auto px-6 sm:px-12 lg:px-16 py-7 md:py-6 flex items-center justify-between relative">        
          
          {/* --- DESKTOP LOGO --- */}
          <Link 
            href="https://github.com/Bianca-26" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-3 group cursor-pointer"
          >
            <Image 
              src="/github.svg"
              alt="GitHub Profile"
              width={40}
              height={40}
              className="block transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-xl font-normal text-white lato transition-opacity duration-300 group-hover:opacity-80">
              Bianca Sandovici
            </span>
          </Link>

          {/* --- MOBILE: BUTON MENU --- */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center gap-2 text-white transition-colors group cursor-pointer"
          >
            <Image 
              src="/menu.svg"
              alt="Menu"
              width={32}
              height={32}
              className="block transition-all duration-300 group-hover:scale-110 group-hover:opacity-70"
            />
            <span className="text-base font-normal text-white lato transition-all duration-300 group-hover:opacity-70">
              MENU
            </span>
          </button>

          {/* --- MOBILE: MAIL ICON --- */}
          <a 
            href="mailto:biancasandovici17@gmail.com"
            className="md:hidden w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white"
          >
            <Mail className="w-4 h-4" />
          </a>

          {/* --- DESKTOP NAV --- */}
          <nav className="hidden md:flex items-center gap-10 text-lg">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className={`relative font-regular group py-1 transition-colors ${
                    isActive ? 'text-white' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  {/* Linia se desenează complet dacă link-ul e activ, sau doar la hover dacă nu e activ */}
                  <span 
                    className={`absolute left-0 bottom-0 h-[2px] bg-white transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} 
                  />
                </Link>
              );
            })}
          </nav>

          {/* --- MOBILE DROP-DOWN MENU --- */}
          <div 
            className={`absolute top-full left-0 w-full bg-[#040A14] border-b border-white/10 p-6 flex flex-col gap-6 shadow-2xl transition-all duration-300 ease-in-out md:hidden z-50 ${
              isOpen 
                ? 'opacity-100 translate-y-0 pointer-events-auto' 
                : 'opacity-0 -translate-y-4 pointer-events-none'
            }`}
          >
            {/* Logo + Nume interior */}
            <Link 
              href="https://github.com/Bianca-26" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 pb-2 border-b border-white/5"
            >
              <Image 
                src="/github.svg"
                alt="GitHub Profile"
                width={36}
                height={36}
                className="block"
              />
              <span className="text-lg font-semibold text-white lato">
                Bianca Sandovici
              </span>
            </Link>

            {/* Navigație mobil verticală */}
            <nav className="flex flex-col gap-4 text-base">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link 
                    key={link.href}
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className={`font-normal transition-colors lato flex items-center justify-between ${
                      isActive ? 'text-white font-semibold' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-white" />}
                  </Link>
                );
              })}
            </nav>
          </div>

        </div>
      </header>

      {/* OVERLAY NEGRU */}
      <div 
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/75 z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />
    </>
  );
}