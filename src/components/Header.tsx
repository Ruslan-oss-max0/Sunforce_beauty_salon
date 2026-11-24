import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { SALON_INFO } from '../data/salonData';

const NAV_LINKS = [
  { href: '#services', label: 'Послуги' },
  { href: '#about', label: 'Про простір' },
  { href: '#pricing', label: 'Прайс' },
  { href: '#gallery', label: 'Галерея' },
  { href: '#location', label: 'Локація' },
] as const;

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 36);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
          scrolled
            ? 'border-b border-[#193C32]/10 bg-[#F4F0E8]/95 text-[#132620] backdrop-blur-md'
            : 'border-b border-[#F4F0E8]/12 bg-[#193C32]/90 text-[#F4F0E8] backdrop-blur-sm'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:gap-8 lg:px-10">
          {/* Zone 1: Single-line brand wordmark */}
          <a
            href="#top"
            className="font-editorial text-xl font-medium tracking-[0.04em] whitespace-nowrap shrink-0 transition-opacity hover:opacity-80 sm:text-2xl"
          >
            {SALON_INFO.brandName}
          </a>

          {/* Zone 2: 5 concise single-line navigation links */}
          <nav
            aria-label="Основна навігація"
            className="hidden items-center gap-7 lg:flex"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative py-1 text-sm font-medium tracking-[0.01em] whitespace-nowrap shrink-0 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100 ${
                  scrolled
                    ? 'text-[#132620]/80 hover:text-[#193C32] after:bg-[#193C32]'
                    : 'text-[#F4F0E8]/85 hover:text-[#D8CB8E] after:bg-[#D8CB8E]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action + mobile menu toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={SALON_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden items-center gap-1.5 px-4 py-2 text-xs font-medium tracking-[0.04em] whitespace-nowrap shrink-0 transition-colors duration-200 sm:inline-flex ${
                scrolled
                  ? 'bg-[#193C32] text-[#F4F0E8] hover:bg-[#315347]'
                  : 'bg-[#D8CB8E] text-[#132620] hover:bg-[#E4D9A6]'
              }`}
            >
              <span>Записатися</span>
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={mobileOpen ? 'Закрити меню' : 'Відкрити меню'}
              className={`inline-flex h-11 w-11 items-center justify-center border transition-colors lg:hidden ${
                scrolled
                  ? 'border-[#193C32]/20 text-[#132620] hover:bg-[#193C32]/5'
                  : 'border-[#F4F0E8]/25 text-[#F4F0E8] hover:bg-[#F4F0E8]/10'
              }`}
            >
              {mobileOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Мобільна навігація"
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 top-16 z-30 flex flex-col justify-between bg-[#193C32] px-6 py-8 text-[#F4F0E8] lg:hidden"
          >
            <nav aria-label="Мобільне меню" className="flex flex-col divide-y divide-[#F4F0E8]/12">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-editorial flex min-h-[52px] items-center justify-between text-2xl tracking-wide text-[#F4F0E8] transition-colors hover:text-[#D8CB8E]"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="h-4 w-4 text-[#D8CB8E]" aria-hidden="true" />
                </a>
              ))}
            </nav>

            <div className="space-y-4 border-t border-[#F4F0E8]/15 pt-6">
              <p className="text-xs leading-relaxed text-[#9A9A8E]">
                {SALON_INFO.address}
                <br />
                {SALON_INFO.metroNote}
              </p>
              <a
                href={SALON_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex min-h-[48px] w-full items-center justify-center gap-2 bg-[#D8CB8E] px-5 py-3 text-sm font-medium text-[#132620] transition-colors hover:bg-[#E4D9A6]"
              >
                <span>Запис через Instagram</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
