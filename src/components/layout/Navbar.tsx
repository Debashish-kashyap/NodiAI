'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { mainNavItems, navActions } from '@/data/navigation';
import { Menu, X, ShieldCheck, ChevronRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#fcfbf9]/90 backdrop-blur-md border-b border-[#e9e6e0] shadow-xs py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-700 to-blue-500 flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <span className="font-semibold text-xl tracking-tight text-neutral-900">
              Nodi<span className="text-blue-600">AI</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-neutral-600 hover:text-neutral-950 px-3 py-1.5 rounded-full hover:bg-neutral-100/70 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            {navActions.map((action) =>
              action.variant === 'primary' ? (
                <Link
                  key={action.href}
                  href={action.href}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.98] px-5 py-2 rounded-full shadow-xs hover:shadow-sm transition-all"
                >
                  {action.label}
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              ) : (
                <Link
                  key={action.href}
                  href={action.href}
                  className="text-sm font-medium text-neutral-700 hover:text-neutral-950 px-3.5 py-2 rounded-full hover:bg-neutral-100 transition-colors"
                >
                  {action.label}
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 focus:outline-hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl bg-white/95 backdrop-blur-lg border border-neutral-200/80 shadow-lg space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-1">
              {mainNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-100 rounded-lg"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="pt-3 border-t border-neutral-100 flex flex-col gap-2">
              <Link
                href="#pilot"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center text-sm font-medium text-neutral-700 py-2.5 rounded-full border border-neutral-200 hover:bg-neutral-50"
              >
                Pilot Program
              </Link>
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 py-2.5 rounded-full shadow-xs"
              >
                Request Demo
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
