import { useRef } from 'react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { HERO_MEDIA, SALON_INFO } from '../data/salonData';
import { EditorialImage } from './EditorialImage';

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '8%']);

  return (
    <section
      id="top"
      ref={heroRef}
      className="relative overflow-hidden bg-[#193C32] pt-24 pb-16 text-[#F4F0E8] sm:pt-28 sm:pb-20 lg:min-h-[92vh] lg:pt-32 lg:pb-24"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-10">
        {/* Editorial Typography & Brand Monogram */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5"
        >
          {/* Logo Mark Reference: Two-line minimalist SUNFORCE / beauty seal */}
          <div className="mb-8 inline-flex flex-col border border-[#D8CB8E]/35 px-5 py-3.5">
            <span className="text-[15px] font-medium tracking-[0.34em] text-[#D8CB8E] sm:text-base">
              {SALON_INFO.brandWordmarkTop}
            </span>
            <span className="mt-0.5 text-center text-xs font-normal tracking-[0.22em] text-[#D8CB8E]/85">
              {SALON_INFO.brandWordmarkBottom}
            </span>
          </div>

          <div className="mb-5 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs tracking-[0.04em] text-[#D8CB8E]/90">
            <span>Київ</span>
            <span aria-hidden="true">·</span>
            <span>Палац Україна</span>
            <span aria-hidden="true">·</span>
            <span>{SALON_INFO.shortAddress}</span>
          </div>

          <h1 className="font-editorial text-4xl leading-[1.06] font-normal tracking-[-0.01em] text-[#F4F0E8] sm:text-5xl lg:text-[3.75rem]">
            Тиха естетика догляду в серці Києва
          </h1>

          <p className="mt-6 max-w-md text-[15px] leading-[1.7] text-[#F4F0E8]/80 sm:text-base">
            Косметологія, перманентний макіяж, догляд за волоссям, вії та лазерні процедури — простір
            із душею за пʼять хвилин від метро «Палац Україна».
          </p>

          <div className="mt-9 grid grid-cols-1 gap-4 sm:inline-grid sm:grid-cols-2">
            <a
              href={SALON_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 border border-[#D8CB8E] bg-[#D8CB8E] px-5 py-3 text-sm font-medium tracking-[0.02em] text-[#132620] whitespace-nowrap transition-colors duration-200 hover:border-[#E4D9A6] hover:bg-[#E4D9A6]"
            >
              <span>Записатися в Instagram</span>
              <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </a>

            <a
              href="#pricing"
              className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 border border-[#F4F0E8]/30 px-5 py-3 text-sm font-medium tracking-[0.02em] text-[#F4F0E8] whitespace-nowrap transition-colors duration-200 hover:border-[#D8CB8E] hover:text-[#D8CB8E]"
            >
              <span>Прайс на перманент</span>
              <ArrowDownRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </a>
          </div>

          <p className="mt-8 border-t border-[#F4F0E8]/15 pt-5 text-xs leading-relaxed text-[#9A9A8E]">
            Неофіційна презентаційна концепція вебсайту · Всі зображення є редакційними плейсхолдерами
          </p>
        </motion.div>

        {/* Asymmetric Framed Editorial Imagery */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.985 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative lg:col-span-7"
        >
          <div className="relative border border-[#D8CB8E]/25 p-2.5 sm:p-3.5">
            <div className="relative aspect-[4/3] w-full overflow-hidden lg:aspect-[16/11]">
              <motion.div
                style={shouldReduceMotion ? undefined : { y: imageY }}
                className="h-[108%] w-full -translate-y-[4%]"
              >
                <EditorialImage
                  src={HERO_MEDIA.image}
                  alt={HERO_MEDIA.imageAlt}
                  priority
                  className="h-full w-full"
                  fallbackTitle="Sunforce Beauty · Ательє"
                />
              </motion.div>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#193C32]/35 via-transparent to-transparent"
              />
            </div>

            <div className="mt-3 flex flex-wrap items-center justify-between gap-2 px-1 text-xs text-[#D8CB8E]/85">
              <span>Естетичний простір · {SALON_INFO.instagramHandle}</span>
              <span>Концептуальна візуалізація інтерʼєру</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
