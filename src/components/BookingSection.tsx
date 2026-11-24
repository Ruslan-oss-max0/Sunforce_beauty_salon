import { ArrowUpRight, Instagram } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { SALON_INFO } from '../data/salonData';

export function BookingSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="booking" className="bg-[#193C32] py-20 text-[#F4F0E8] sm:py-24 lg:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="border border-[#D8CB8E]/30 px-6 py-12 text-center sm:px-12 sm:py-16"
        >
          <p className="text-xs font-medium tracking-[0.16em] text-[#D8CB8E] uppercase">
            Онлайн-запис та консультація
          </p>
          <h2 className="font-editorial mx-auto mt-4 max-w-2xl text-3xl leading-[1.12] font-normal text-[#F4F0E8] sm:text-4xl lg:text-5xl">
            Оберіть зручний час візиту через Instagram
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-[1.7] text-[#F4F0E8]/80">
            У цій демонстраційній версії запис скеровується безпосередньо на офіційну сторінку{' '}
            <span className="text-[#D8CB8E]">{SALON_INFO.instagramHandle}</span>, де адміністратор
            підтверджує вільні віконця, перелік процедур та актуальний прайс.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={SALON_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] max-w-full items-center justify-center gap-2 bg-[#D8CB8E] px-4 py-3 text-center text-sm font-medium text-[#132620] transition-colors hover:bg-[#E4D9A6] sm:px-7 sm:whitespace-nowrap sm:shrink-0"
            >
              <Instagram className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span className="truncate">Instagram {SALON_INFO.instagramHandle}</span>
              <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </a>

            <a
              href="#location"
              className="inline-flex min-h-[48px] max-w-full items-center justify-center border border-[#F4F0E8]/30 px-6 py-3 text-sm font-medium text-[#F4F0E8] whitespace-nowrap shrink-0 transition-colors hover:border-[#D8CB8E] hover:text-[#D8CB8E]"
            >
              <span>Як нас знайти</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
