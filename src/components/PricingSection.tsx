import { useState } from 'react';
import { ArrowUpRight, Info } from 'lucide-react';
import { PERMANENT_PRICES, PermanentPriceItem, SALON_INFO } from '../data/salonData';
import {
  ZoneFilter,
  buildBookingLabel,
  filterPermanentPricing,
  formatUahPrice,
} from '../utils/salonHelpers';

const ZONE_TABS: { id: ZoneFilter; label: string }[] = [
  { id: 'all', label: 'Усі зони' },
  { id: 'brows', label: 'Брови' },
  { id: 'lips', label: 'Губи' },
  { id: 'eyes', label: 'Очі' },
];

export function PricingSection() {
  const [activeZone, setActiveZone] = useState<ZoneFilter>('all');
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const visibleRows = filterPermanentPricing(PERMANENT_PRICES, activeZone);
  const selectedItem: PermanentPriceItem | null =
    PERMANENT_PRICES.find((item) => item.id === selectedId) ?? null;

  return (
    <section id="pricing" className="bg-[#F4F0E8] py-20 text-[#132620] sm:py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-6 border-b border-[#193C32]/15 pb-8 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-medium tracking-[0.14em] text-[#315347] uppercase">
              Прайс-лист
            </p>
            <h2 className="font-editorial mt-3 text-3xl leading-[1.12] font-normal text-[#132620] sm:text-4xl lg:text-5xl">
              Перманентний макіяж
            </h2>
          </div>

          {/* Interactive Zone Filter Tabs */}
          <div
            role="group"
            aria-label="Фільтр за зоною перманентного макіяжу"
            className="inline-flex flex-wrap items-center gap-1 border border-[#193C32]/15 bg-[#EAE4D7]/60 p-1 self-start sm:self-auto"
          >
            {ZONE_TABS.map((tab) => {
              const isActive = activeZone === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveZone(tab.id)}
                  aria-pressed={isActive}
                  className={`min-h-[38px] px-3.5 py-1.5 text-xs font-medium whitespace-nowrap shrink-0 transition-colors duration-150 ${
                    isActive
                      ? 'bg-[#193C32] text-[#F4F0E8]'
                      : 'text-[#132620]/75 hover:text-[#132620]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Indicative Disclaimer */}
        <div className="mt-6 flex items-start gap-3 border border-[#193C32]/15 bg-[#EAE4D7]/45 px-4 py-3.5 text-xs leading-relaxed text-[#4E5B55]">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#315347]" aria-hidden="true" />
          <p>
            Наведені позиції взято з архівної публікації прайсу у хайлайтах Instagram (
            {SALON_INFO.instagramHandle}). Вартість має орієнтовний характер і потребує
            підтвердження перед фактичним записом. Для інших напрямів прайс не наведено, оскільки
            актуальні тарифи уточнюються.
          </p>
        </div>

        {/* Price Ledger */}
        <div className="mt-8 divide-y divide-[#193C32]/15 border-y border-[#193C32]/15">
          {visibleRows.map((item) => {
            const isSelected = selectedId === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedId((prev) => (prev === item.id ? null : item.id))}
                aria-pressed={isSelected}
                className={`flex min-h-[72px] w-full items-center justify-between gap-4 px-3 py-5 text-left transition-colors duration-150 sm:px-5 ${
                  isSelected
                    ? 'bg-[#193C32] text-[#F4F0E8]'
                    : 'bg-transparent text-[#132620] hover:bg-[#EAE4D7]/55'
                }`}
              >
                <div className="min-w-0">
                  <div
                    className={`flex items-center gap-2 text-xs ${
                      isSelected ? 'text-[#D8CB8E]' : 'text-[#4E5B55]'
                    }`}
                  >
                    <span>{item.zoneLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.stageLabel}</span>
                  </div>
                  <span className="font-editorial mt-1 block text-2xl font-normal sm:text-[1.7rem]">
                    {item.title}
                  </span>
                </div>

                <div className="shrink-0 text-right">
                  <span
                    className={`font-sans text-base font-medium tabular-nums sm:text-lg ${
                      isSelected ? 'text-[#D8CB8E]' : 'text-[#193C32]'
                    }`}
                  >
                    {formatUahPrice(item.priceUah)}
                  </span>
                  <span
                    className={`mt-0.5 block text-[11px] ${
                      isSelected ? 'text-[#F4F0E8]/75' : 'text-[#4E5B55]'
                    }`}
                  >
                    {isSelected ? 'Обрано для уточнення' : 'Орієнтовно'}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Contextual Action Strip */}
        <div className="mt-8 flex flex-col items-start justify-between gap-4 border border-[#193C32]/15 bg-[#EAE4D7]/40 p-5 sm:flex-row sm:items-center sm:p-6">
          <div>
            <p className="text-sm font-medium text-[#132620]">
              {selectedItem
                ? `Обрана позиція: ${selectedItem.title} (${formatUahPrice(selectedItem.priceUah)})`
                : 'Оберіть процедуру зі списку або уточніть актуальні умови напряму'}
            </p>
            <p className="mt-1 text-xs text-[#4E5B55]">
              Актуальні вільні дати та фінальна вартість підтверджуються у повідомленнях Instagram.
            </p>
          </div>

          <a
            href={SALON_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] max-w-full items-center gap-2 bg-[#193C32] px-4 py-2.5 text-sm font-medium text-[#F4F0E8] transition-colors hover:bg-[#315347] sm:px-5 sm:whitespace-nowrap sm:shrink-0"
          >
            <span className="truncate">{buildBookingLabel(selectedItem)}</span>
            <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
