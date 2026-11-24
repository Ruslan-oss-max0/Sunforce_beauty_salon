import { useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { SALON_INFO, SERVICE_CATEGORIES, ServiceId } from '../data/salonData';
import { findServiceById } from '../utils/salonHelpers';
import { EditorialImage } from './EditorialImage';

export function ServicesSection() {
  const [activeId, setActiveId] = useState<ServiceId>('cosmetology');
  const shouldReduceMotion = useReducedMotion();
  const activeService = findServiceById(SERVICE_CATEGORIES, activeId);

  return (
    <section id="services" className="bg-[#F4F0E8] py-20 text-[#132620] sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mb-12 flex flex-col justify-between gap-6 border-b border-[#193C32]/15 pb-8 lg:mb-16 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-medium tracking-[0.14em] text-[#315347] uppercase">
              Напрями салону
            </p>
            <h2 className="font-editorial mt-3 text-3xl leading-[1.12] font-normal text-[#132620] sm:text-4xl lg:text-5xl">
              Пʼять ключових напрямів турботи
            </h2>
          </div>
          <p className="max-w-md text-sm leading-[1.7] text-[#4E5B55]">
            Категорії сформовано на основі актуальних розділів профілю {SALON_INFO.instagramHandle}.
            Детальний перелік процедур поза перманентним макіяжем уточнюється перед запуском.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Interactive Category List */}
          <div
            role="tablist"
            aria-label="Категорії послуг"
            className="divide-y divide-[#193C32]/15 border-y border-[#193C32]/15 lg:col-span-5"
          >
            {SERVICE_CATEGORIES.map((service) => {
              const isSelected = service.id === activeId;
              return (
                <button
                  key={service.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls={`service-panel-${service.id}`}
                  onClick={() => setActiveId(service.id)}
                  className={`group flex min-h-[68px] w-full items-center justify-between gap-4 px-3 py-5 text-left transition-colors duration-200 sm:px-4 ${
                    isSelected
                      ? 'bg-[#193C32] text-[#F4F0E8]'
                      : 'bg-transparent text-[#132620] hover:bg-[#EAE4D7]/70'
                  }`}
                >
                  <div className="flex items-baseline gap-4">
                    <span
                      className={`text-xs font-medium tabular-nums ${
                        isSelected ? 'text-[#D8CB8E]' : 'text-[#315347]'
                      }`}
                    >
                      {service.index}.
                    </span>
                    <div>
                      <span className="font-editorial block text-2xl font-normal sm:text-[1.65rem]">
                        {service.title}
                      </span>
                      <span
                        className={`mt-0.5 block text-xs ${
                          isSelected ? 'text-[#F4F0E8]/75' : 'text-[#4E5B55]'
                        }`}
                      >
                        {service.subtitle}
                      </span>
                    </div>
                  </div>
                  <ArrowRight
                    className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
                      isSelected
                        ? 'translate-x-0 text-[#D8CB8E]'
                        : '-translate-x-1 text-[#315347]/60 group-hover:translate-x-0 group-hover:text-[#193C32]'
                    }`}
                    aria-hidden="true"
                  />
                </button>
              );
            })}
          </div>

          {/* Active Category Showcase Panel */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                id={`service-panel-${activeService.id}`}
                role="tabpanel"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="border border-[#193C32]/15 bg-[#EAE4D7]/45 p-4 sm:p-6"
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <EditorialImage
                    src={activeService.image}
                    alt={activeService.imageAlt}
                    className="h-full w-full"
                    fallbackTitle={activeService.title}
                  />
                </div>

                <div className="mt-6 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
                  <div className="max-w-lg">
                    <div className="flex items-center gap-2 text-xs text-[#315347]">
                      <span className="tabular-nums">{activeService.index}</span>
                      <span aria-hidden="true">·</span>
                      <span>{activeService.subtitle}</span>
                    </div>
                    <h3 className="font-editorial mt-2 text-3xl font-normal text-[#132620]">
                      {activeService.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-[1.7] text-[#132620]/85">
                      {activeService.description}
                    </p>
                    <p className="mt-3 text-xs leading-relaxed text-[#4E5B55]">
                      {activeService.scopeNote}
                    </p>
                  </div>

                  <div className="shrink-0">
                    {activeService.hasVerifiedPrices ? (
                      <a
                        href="#pricing"
                        className="inline-flex min-h-[44px] items-center gap-2 bg-[#193C32] px-5 py-2.5 text-sm font-medium text-[#F4F0E8] whitespace-nowrap shrink-0 transition-colors hover:bg-[#315347]"
                      >
                        <span>Дивитися прайс</span>
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    ) : (
                      <a
                        href={SALON_INFO.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[44px] items-center gap-2 border border-[#193C32] px-5 py-2.5 text-sm font-medium text-[#193C32] whitespace-nowrap shrink-0 transition-colors hover:bg-[#193C32] hover:text-[#F4F0E8]"
                      >
                        <span>Уточнити в Instagram</span>
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
