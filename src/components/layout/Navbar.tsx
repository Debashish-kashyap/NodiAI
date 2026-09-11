'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { mainNavItems, navActions } from '@/data/navigation';
import { Menu, X, ShieldCheck, ChevronRight, ArrowRight } from 'lucide-react';

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

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'bg-white/85 backdrop-blur-xl border-b border-neutral-200/80 shadow-xs py-3 text-neutral-900'
          : 'bg-transparent py-4 sm:py-6 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 group z-50"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <span
              className={`font-semibold text-xl tracking-tight transition-colors ${
                isScrolled || mobileMenuOpen ? 'text-neutral-900' : 'text-white drop-shadow-sm'
              }`}
            >
              Nodi
              <span className={isScrolled || mobileMenuOpen ? 'text-blue-600' : 'text-blue-300'}>
                AI
              </span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium px-3.5 py-1.5 rounded-full transition-all ${
                  isScrolled
                    ? 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100/80'
                    : 'text-white/90 hover:text-white hover:bg-white/15 drop-shadow-xs'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Action CTAs (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            {navActions.map((action) =>
              action.variant === 'primary' ? (
                <Link
                  key={action.href}
                  href={action.href}
                  className={`inline-flex items-center gap-1.5 text-sm font-medium px-5 py-2 rounded-full transition-all active:scale-[0.98] ${
                    isScrolled
                      ? 'text-white bg-blue-600 hover:bg-blue-700 shadow-xs'
                      : 'text-neutral-900 bg-white hover:bg-neutral-50 shadow-md hover:shadow-lg'
                  }`}
                >
                  {action.label}
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              ) : (
                <Link
                  key={action.href}
                  href={action.href}
                  className={`text-sm font-medium px-3.5 py-2 rounded-full transition-colors ${
                    isScrolled
                      ? 'text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100'
                      : 'text-white/90 hover:text-white hover:bg-white/15 drop-shadow-xs'
                  }`}
                >
                  {action.label}
                </Link>
              )
            )}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden flex items-center justify-center w-10 h-10 rounded-xl border transition-all focus:outline-hidden z-50 cursor-pointer ${
              isScrolled || mobileMenuOpen
                ? 'bg-white/90 border-neutral-200/90 shadow-2xs text-neutral-800'
                : 'bg-white/15 border-white/30 backdrop-blur-md text-white shadow-sm'
            }`}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-neutral-900 transition-transform duration-200" />
            ) : (
              <Menu className={`w-5 h-5 transition-transform duration-200 ${isScrolled ? 'text-neutral-800' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Slide-down Overlay Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-x-0 top-[60px] bottom-0 bg-neutral-950/20 backdrop-blur-xs md:hidden z-40 animate-in fade-in duration-200">
            <div className="bg-white border-b border-neutral-200/80 shadow-2xl p-6 space-y-6 max-h-[calc(100vh-65px)] overflow-y-auto">
              <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500 pb-2 border-b border-neutral-100">
                Navigation
              </div>

              <div className="flex flex-col space-y-1">
                {mainNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3.5 py-3 text-base font-medium text-neutral-800 hover:text-blue-600 hover:bg-neutral-50 rounded-xl transition-colors"
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-4 h-4 text-neutral-400" />
                  </Link>
                ))}
              </div>

              <div className="pt-4 border-t border-neutral-100 flex flex-col gap-3">
                <Link
                  href="#pilot"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center text-sm font-semibold text-neutral-800 py-3 rounded-xl border border-neutral-200 bg-neutral-50 hover:bg-neutral-100 transition-colors"
                >
                  Join Pilot Program
                </Link>
                <Link
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 text-center text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 py-3.5 rounded-xl shadow-sm transition-all"
                >
                  <span>Request Demonstration</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="pt-2 text-center">
                <p className="text-[11px] text-neutral-500">
                  Private Document Intelligence · Built in Assam
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
