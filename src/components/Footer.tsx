import { ArrowUpRight } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export function Footer() {
  return (
    <footer className="border-t border-[#D8CB8E]/20 bg-[#132620] py-14 text-[#F4F0E8] sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 border-b border-[#F4F0E8]/12 pb-12 md:grid-cols-12">
          {/* Brand Monogram */}
          <div className="md:col-span-5">
            <div className="inline-flex flex-col">
              <span className="text-lg font-medium tracking-[0.3em] text-[#D8CB8E]">
                {SALON_INFO.brandWordmarkTop}
              </span>
              <span className="mt-0.5 text-xs tracking-[0.22em] text-[#D8CB8E]/80">
                {SALON_INFO.brandWordmarkBottom}
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#F4F0E8]/75">
              {SALON_INFO.bioTagline}. Косметологія, перманентний макіяж, догляд за волоссям, вії та
              лазерна естетика.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <p className="text-xs font-medium tracking-[0.12em] text-[#D8CB8E] uppercase">
              Навігація
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-[#F4F0E8]/80">
              <li>
                <a href="#services" className="transition-colors hover:text-[#D8CB8E]">
                  Послуги
                </a>
              </li>
              <li>
                <a href="#about" className="transition-colors hover:text-[#D8CB8E]">
                  Про простір
                </a>
              </li>
              <li>
                <a href="#pricing" className="transition-colors hover:text-[#D8CB8E]">
                  Прайс на перманент
                </a>
              </li>
              <li>
                <a href="#gallery" className="transition-colors hover:text-[#D8CB8E]">
                  Галерея
                </a>
              </li>
              <li>
                <a href="#location" className="transition-colors hover:text-[#D8CB8E]">
                  Локація
                </a>
              </li>
            </ul>
          </div>

          {/* Contacts & Social */}
          <div className="md:col-span-4">
            <p className="text-xs font-medium tracking-[0.12em] text-[#D8CB8E] uppercase">
              Адреса та Instagram
            </p>
            <div className="mt-4 space-y-3 text-sm text-[#F4F0E8]/80">
              <p>{SALON_INFO.address}</p>
              <div className="flex flex-col gap-2 pt-1">
                <a
                  href={SALON_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex max-w-full flex-wrap items-center gap-1.5 text-[#D8CB8E] transition-opacity hover:opacity-80"
                >
                  <span className="break-all">Instagram: {SALON_INFO.instagramHandle}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                </a>
                <a
                  href={SALON_INFO.coffeeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex max-w-full flex-wrap items-center gap-1.5 text-[#F4F0E8]/70 transition-colors hover:text-[#D8CB8E]"
                >
                  <span className="break-all">Кавʼярня поруч: {SALON_INFO.coffeeHandle}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Discreet Unofficial Concept Disclosure */}
        <div className="mt-8 flex flex-col justify-between gap-3 text-xs leading-relaxed text-[#9A9A8E] sm:flex-row sm:items-center">
          <p>
            Неофіційна демонстраційна концепція сайту для Sunforce Beauty · Не є офіційним
            вебресурсом салону.
          </p>
          <p>Усі ціни та перелік послуг потребують підтвердження перед публічним запуском.</p>
        </div>
      </div>
    </footer>
  );
}
