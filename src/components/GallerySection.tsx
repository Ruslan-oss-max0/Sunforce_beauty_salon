import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { GALLERY_FRAMES } from '../data/salonData';
import { getWrappedIndex } from '../utils/salonHelpers';
import { EditorialImage } from './EditorialImage';

export function GallerySection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveIndex(null);
      } else if (event.key === 'ArrowRight') {
        setActiveIndex((prev) =>
          prev === null ? null : getWrappedIndex(prev, 1, GALLERY_FRAMES.length),
        );
      } else if (event.key === 'ArrowLeft') {
        setActiveIndex((prev) =>
          prev === null ? null : getWrappedIndex(prev, -1, GALLERY_FRAMES.length),
        );
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeIndex]);

  const activeFrame = activeIndex !== null ? GALLERY_FRAMES[activeIndex] : null;

  return (
    <section
      id="gallery"
      className="border-t border-[#193C32]/12 bg-[#EAE4D7]/50 py-20 text-[#132620] sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mb-12 flex flex-col justify-between gap-6 lg:mb-16 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-medium tracking-[0.14em] text-[#315347] uppercase">
              Візуальний настрій
            </p>
            <h2 className="font-editorial mt-3 text-3xl leading-[1.12] font-normal text-[#132620] sm:text-4xl lg:text-5xl">
              Кураторська галерея концепції
            </h2>
          </div>
          <p className="max-w-md text-xs leading-relaxed text-[#4E5B55] sm:text-sm">
            Представлені світлини є спеціально підібраними редакційними плейсхолдерами, що задають
            атмосферу бренду до завантаження авторських фотографій салону.
          </p>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-7">
          {GALLERY_FRAMES.map((frame, index) => (
            <button
              key={frame.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Відкрити у перегляді: ${frame.title}`}
              className={`group relative flex flex-col text-left focus-visible:outline-offset-4 ${frame.aspectClass}`}
            >
              <div className="relative h-full w-full overflow-hidden border border-[#193C32]/15 bg-[#F4F0E8] p-2">
                <div className="relative h-full w-full overflow-hidden">
                  <EditorialImage
                    src={frame.image}
                    alt={frame.imageAlt}
                    className="h-full w-full"
                    imgClassName="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                    fallbackTitle={frame.title}
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#193C32]/65 via-transparent to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-95"
                  />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 text-[#F4F0E8] sm:p-5">
                    <div>
                      <span className="block text-[11px] tracking-[0.06em] text-[#D8CB8E]">
                        {frame.category}
                      </span>
                      <span className="font-editorial mt-0.5 block text-xl font-normal sm:text-2xl">
                        {frame.title}
                      </span>
                    </div>
                    <span
                      aria-hidden="true"
                      className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#F4F0E8]/30 bg-[#193C32]/60 text-[#F4F0E8] transition-colors group-hover:border-[#D8CB8E] group-hover:text-[#D8CB8E]"
                    >
                      <Expand className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Accessible Lightbox Modal */}
      <AnimatePresence>
        {activeFrame && activeIndex !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={activeFrame.title}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#132620]/92 p-4 backdrop-blur-sm sm:p-8"
            onClick={() => setActiveIndex(null)}
          >
            <div
              className="relative w-full max-w-4xl border border-[#D8CB8E]/30 bg-[#193C32] p-4 text-[#F4F0E8] sm:p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-4 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs text-[#D8CB8E]">{activeFrame.category}</p>
                  <h3 className="font-editorial text-2xl font-normal sm:text-3xl">
                    {activeFrame.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveIndex(null)}
                  aria-label="Закрити перегляд галереї"
                  className="inline-flex h-11 w-11 items-center justify-center border border-[#F4F0E8]/25 text-[#F4F0E8] transition-colors hover:border-[#D8CB8E] hover:text-[#D8CB8E]"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>

              <div className="aspect-[16/10] w-full overflow-hidden bg-[#132620]">
                <EditorialImage
                  src={activeFrame.image}
                  alt={activeFrame.imageAlt}
                  className="h-full w-full"
                  fallbackTitle={activeFrame.title}
                />
              </div>

              <div className="mt-4 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <p className="max-w-xl text-xs leading-relaxed text-[#F4F0E8]/80 sm:text-sm">
                  {activeFrame.caption}
                </p>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveIndex((prev) =>
                        prev === null ? 0 : getWrappedIndex(prev, -1, GALLERY_FRAMES.length),
                      )
                    }
                    aria-label="Попереднє зображення"
                    className="inline-flex h-11 w-11 items-center justify-center border border-[#F4F0E8]/25 text-[#F4F0E8] transition-colors hover:border-[#D8CB8E] hover:text-[#D8CB8E]"
                  >
                    <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                  </button>
                  <span className="px-2 text-xs text-[#D8CB8E] tabular-nums">
                    {activeIndex + 1} / {GALLERY_FRAMES.length}
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveIndex((prev) =>
                        prev === null ? 0 : getWrappedIndex(prev, 1, GALLERY_FRAMES.length),
                      )
                    }
                    aria-label="Наступне зображення"
                    className="inline-flex h-11 w-11 items-center justify-center border border-[#F4F0E8]/25 text-[#F4F0E8] transition-colors hover:border-[#D8CB8E] hover:text-[#D8CB8E]"
                  >
                    <ChevronRight className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
