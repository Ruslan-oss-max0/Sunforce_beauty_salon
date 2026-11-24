import { motion, useReducedMotion } from 'motion/react';
import { ABOUT_MEDIA, SALON_INFO } from '../data/salonData';
import { EditorialImage } from './EditorialImage';

export function AboutSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="border-t border-[#193C32]/12 bg-[#EAE4D7]/55 py-20 text-[#132620] sm:py-24 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-10">
        {/* Vertical Architectural Portrait */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5"
        >
          <div className="aspect-[3/4] w-full overflow-hidden border border-[#193C32]/15 p-2.5 bg-[#F4F0E8]">
            <EditorialImage
              src={ABOUT_MEDIA.image}
              alt={ABOUT_MEDIA.imageAlt}
              className="h-full w-full"
              fallbackTitle="Простір Sunforce Beauty"
            />
          </div>
          <p className="mt-3 text-xs text-[#4E5B55]">
            Редакційне фото для передачі настрою простору · Не є реальним інтерʼєром салону
          </p>
        </motion.div>

        {/* Editorial Philosophy */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7"
        >
          <p className="text-xs font-medium tracking-[0.14em] text-[#315347] uppercase">
            Про простір
          </p>
          <h2 className="font-editorial mt-3 text-3xl leading-[1.12] font-normal text-[#132620] sm:text-4xl lg:text-5xl">
            Камерний бʼюті-простір, де час сповільнюється
          </h2>

          <div className="mt-7 space-y-5 text-[15px] leading-[1.75] text-[#132620]/85 sm:text-base">
            <p>
              У власному описі {SALON_INFO.brandName} формулює свою філософію лаконічно: «простір з
              душею». Без зайвого шуму великих мереж — тут зосереджуються на акуратній естетиці,
              увазі до деталей і комфортному ритмі візиту.
            </p>
            <p>
              Салон розташований на вулиці Предславинській, у пʼяти хвилинах пішки від станції
              метро «Палац Україна». А поруч працює кавʼярня{' '}
              <a
                href={SALON_INFO.coffeeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-[#193C32]/35 underline-offset-4 transition-colors hover:text-[#193C32] hover:decoration-[#193C32]"
              >
                {SALON_INFO.coffeeHandle}
              </a>
              , тож візит на процедуру легко поєднати з ранковою або денною кавою.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 border-t border-[#193C32]/15 pt-8 sm:grid-cols-3">
            <div>
              <p className="text-xs font-medium text-[#315347]">Локація</p>
              <p className="font-editorial mt-1.5 text-xl text-[#132620]">Палац Україна</p>
              <p className="mt-1 text-xs text-[#4E5B55]">вул. Предславинська, 43/2</p>
            </div>
            <div>
              <p className="text-xs font-medium text-[#315347]">Напрями</p>
              <p className="font-editorial mt-1.5 text-xl text-[#132620]">5 категорій догляду</p>
              <p className="mt-1 text-xs text-[#4E5B55]">Обличчя, перманент, волосся, вії, лазер</p>
            </div>
            <div>
              <p className="text-xs font-medium text-[#315347]">Звʼязок</p>
              <p className="font-editorial mt-1.5 text-xl text-[#132620]">Instagram Direct</p>
              <p className="mt-1 text-xs text-[#4E5B55]">{SALON_INFO.instagramHandle}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
