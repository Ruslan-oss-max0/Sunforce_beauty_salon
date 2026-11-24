import test from 'node:test';
import assert from 'node:assert/strict';
import { PERMANENT_PRICES, SERVICE_CATEGORIES } from '../data/salonData';
import {
  buildBookingLabel,
  filterPermanentPricing,
  findServiceById,
  formatUahPrice,
  getWrappedIndex,
} from './salonHelpers';

test('formatUahPrice formats UAH amounts with clean thousands spacing', () => {
  assert.equal(formatUahPrice(3000), '3 000 грн');
  assert.equal(formatUahPrice(1500), '1 500 грн');
  assert.equal(formatUahPrice(2000), '2 000 грн');
  assert.equal(formatUahPrice(1000), '1 000 грн');
  assert.equal(formatUahPrice(-10), 'Уточнюється');
});

test('filterPermanentPricing filters verified permanent makeup zones accurately', () => {
  assert.equal(filterPermanentPricing(PERMANENT_PRICES, 'all').length, 6);
  assert.equal(filterPermanentPricing(PERMANENT_PRICES, 'brows').length, 2);
  assert.equal(filterPermanentPricing(PERMANENT_PRICES, 'lips').length, 2);
  assert.equal(filterPermanentPricing(PERMANENT_PRICES, 'eyes').length, 2);
  assert.equal(filterPermanentPricing(PERMANENT_PRICES, 'brows')[0].priceUah, 3000);
  assert.equal(filterPermanentPricing(PERMANENT_PRICES, 'eyes')[1].priceUah, 1000);
});

test('findServiceById returns matching category or safe fallback', () => {
  const laser = findServiceById(SERVICE_CATEGORIES, 'laser');
  assert.equal(laser.title, 'Лазерні процедури');
  const permanent = findServiceById(SERVICE_CATEGORIES, 'permanent');
  assert.equal(permanent.hasVerifiedPrices, true);
});

test('getWrappedIndex wraps cleanly across bounds in both directions', () => {
  assert.equal(getWrappedIndex(0, -1, 5), 4);
  assert.equal(getWrappedIndex(4, 1, 5), 0);
  assert.equal(getWrappedIndex(2, 1, 5), 3);
  assert.equal(getWrappedIndex(0, 1, 0), 0);
});

test('buildBookingLabel tailors CTA label to selected procedure when present', () => {
  assert.equal(buildBookingLabel(null), 'Записатися через Instagram');
  assert.equal(
    buildBookingLabel(PERMANENT_PRICES[0]),
    'Уточнити «Пудрові брови» в Instagram',
  );
});
