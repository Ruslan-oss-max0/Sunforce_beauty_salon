import { useState } from 'react';
import { ArrowUpRight, Check, Copy, MapPin } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export function LocationSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(SALON_INFO.address);
      }
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="location" className="bg-[#F4F0E8] py-20 text-[#132620] sm:py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-10">
        {/* Address & Transit Info */}
        <div className="lg:col-span-5">
          <p className="text-xs font-medium tracking-[0.14em] text-[#315347] uppercase">
            Локація
          </p>
          <h2 className="font-editorial mt-3 text-3xl leading-[1.12] font-normal text-[#132620] sm:text-4xl lg:text-5xl">
            У кількох кроках від Палацу Україна
          </h2>

          <div className="mt-8 space-y-6 border-t border-[#193C32]/15 pt-7">
            <div>
              <span className="text-xs font-medium text-[#4E5B55]">Адреса салону</span>
              <p className="font-editorial mt-1 text-2xl text-[#132620]">{SALON_INFO.address}</p>
            </div>

            <div>
              <span className="text-xs font-medium text-[#4E5B55]">Орієнтир</span>
              <p className="mt-1 text-[15px] leading-relaxed text-[#132620]/85">
                {SALON_INFO.metroNote}. Поруч розташована кавʼярня{' '}
                <a
                  href={SALON_INFO.coffeeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-[#193C32]/35 underline-offset-4 hover:text-[#193C32]"
                >
                  {SALON_INFO.coffeeHandle}
                </a>
                .
              </p>
            </div>

            <div>
              <span className="text-xs font-medium text-[#4E5B55]">Графік та контакти</span>
              <p className="mt-1 text-sm leading-relaxed text-[#4E5B55]">
                Точний графік роботи та контактний телефон уточнюються безпосередньо перед запуском
                офіційної версії сайту через{' '}
                <a
                  href={SALON_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#193C32] underline decoration-[#193C32]/40 underline-offset-4"
                >
                  {SALON_INFO.instagramHandle}
                </a>
                .
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={SALON_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[46px] items-center gap-2 bg-[#193C32] px-5 py-2.5 text-sm font-medium text-[#F4F0E8] whitespace-nowrap shrink-0 transition-colors hover:bg-[#315347]"
            >
              <MapPin className="h-4 w-4 text-[#D8CB8E]" aria-hidden="true" />
              <span>Відкрити на карті</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={handleCopyAddress}
              className="inline-flex min-h-[46px] items-center gap-2 border border-[#193C32]/25 px-5 py-2.5 text-sm font-medium text-[#132620] whitespace-nowrap shrink-0 transition-colors hover:border-[#193C32] hover:bg-[#EAE4D7]/60"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-[#193C32]" aria-hidden="true" />
                  <span>Адресу скопійовано</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 text-[#315347]" aria-hidden="true" />
                  <span>Скопіювати адресу</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Architectural Route Schematic (Clean SVG inspired by Location highlight without screenshot reuse) */}
        <div className="lg:col-span-7">
          <div className="border border-[#193C32]/15 bg-[#193C32] p-6 text-[#F4F0E8] sm:p-10">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-2 text-xs text-[#D8CB8E]">
              <span>Схема маршруту · Київ</span>
              <span>Пішки ~ 5 хвилин</span>
            </div>

            <div className="relative overflow-hidden border border-[#D8CB8E]/25 bg-[#143129] p-4 sm:p-6">
              <svg
                viewBox="0 0 640 360"
                className="h-auto w-full"
                role="img"
                aria-label="Схематична карта маршруту від станції метро Палац Україна до вулиці Предславинська, 43/2"
              >
                {/* Architectural street grid lines */}
                <g stroke="#315347" strokeWidth="1.5" fill="none" opacity="0.75">
                  <line x1="60" y1="60" x2="580" y2="30" />
                  <line x1="120" y1="20" x2="210" y2="340" />
                  <line x1="290" y1="20" x2="380" y2="340" />
                  <line x1="430" y1="15" x2="530" y2="345" />
                  <line x1="40" y1="185" x2="590" y2="145" />
                  <line x1="60" y1="295" x2="600" y2="235" />
                </g>

                {/* Highlighted walking path */}
                <path
                  d="M 178 158 L 222 282 L 478 212"
                  fill="none"
                  stroke="#D8CB8E"
                  strokeWidth="3"
                  strokeDasharray="6 6"
                />

                {/* Metro station node */}
                <circle cx="178" cy="158" r="9" fill="#315347" stroke="#F4F0E8" strokeWidth="2" />
                <text
                  x="178"
                  y="134"
                  textAnchor="middle"
                  fill="#F4F0E8"
                  fontSize="13"
                  fontFamily="Manrope, sans-serif"
                >
                  М «Палац Україна»
                </text>

                {/* Walking duration pill-free label */}
                <rect
                  x="275"
                  y="246"
                  width="76"
                  height="26"
                  fill="#193C32"
                  stroke="#D8CB8E"
                  strokeWidth="1"
                />
                <text
                  x="313"
                  y="263"
                  textAnchor="middle"
                  fill="#D8CB8E"
                  fontSize="12"
                  fontFamily="Manrope, sans-serif"
                >
                  5 хв пішки
                </text>

                {/* Sunforce Beauty pin */}
                <circle cx="478" cy="212" r="11" fill="#D8CB8E" />
                <circle cx="478" cy="212" r="4" fill="#193C32" />
                <text
                  x="478"
                  y="186"
                  textAnchor="middle"
                  fill="#D8CB8E"
                  fontSize="14"
                  fontWeight="600"
                  letterSpacing="1.5"
                  fontFamily="Manrope, sans-serif"
                >
                  SUNFORCE BEAUTY
                </text>
                <text
                  x="478"
                  y="244"
                  textAnchor="middle"
                  fill="#F4F0E8"
                  fontSize="12"
                  fontFamily="Manrope, sans-serif"
                >
                  вул. Предславинська, 43/2
                </text>
              </svg>
            </div>

            <p className="mt-4 text-xs text-[#9A9A8E]">
              Для побудови точного маршруту скористайтеся кнопкою «Відкрити на карті».
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
