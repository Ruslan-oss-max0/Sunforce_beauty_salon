import { PermanentPriceItem, PermanentZone, ServiceCategory, ServiceId } from '../data/salonData';

export type ZoneFilter = 'all' | PermanentZone;

/**
 * Formats integer price in UAH with non-breaking space grouping (e.g. "3 000 грн").
 */
export function formatUahPrice(amount: number): string {
  if (!Number.isFinite(amount) || amount < 0) {
    return 'Уточнюється';
  }
  const rounded = Math.round(amount);
  const formatted = rounded.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return `${formatted} грн`;
}

/**
 * Filters permanent makeup pricing rows by facial zone.
 */
export function filterPermanentPricing(
  items: readonly PermanentPriceItem[],
  zone: ZoneFilter,
): PermanentPriceItem[] {
  if (zone === 'all') {
    return [...items];
  }
  return items.filter((item) => item.zone === zone);
}

/**
 * Finds the active service category safely, falling back to the first item.
 */
export function findServiceById(
  categories: readonly ServiceCategory[],
  id: ServiceId,
): ServiceCategory {
  const match = categories.find((cat) => cat.id === id);
  if (!match) {
    if (categories.length === 0) {
      throw new Error('Service categories list cannot be empty');
    }
    return categories[0];
  }
  return match;
}

/**
 * Computes wrapped carousel/lightbox index for previous/next gallery navigation.
 */
export function getWrappedIndex(currentIndex: number, delta: number, total: number): number {
  if (total <= 0) {
    return 0;
  }
  return ((currentIndex + delta) % total + total) % total;
}

/**
 * Builds a clean Instagram inquiry URL with optional procedure context note.
 */
export function buildBookingLabel(selectedProcedure?: PermanentPriceItem | null): string {
  if (!selectedProcedure) {
    return 'Записатися через Instagram';
  }
  return `Уточнити «${selectedProcedure.title}» в Instagram`;
}
