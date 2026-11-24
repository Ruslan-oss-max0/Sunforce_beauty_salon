export type ServiceId = 'cosmetology' | 'permanent' | 'hair' | 'lashes' | 'laser';

export interface ServiceCategory {
  id: ServiceId;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  scopeNote: string;
  image: string;
  imageAlt: string;
  hasVerifiedPrices: boolean;
}

export type PermanentZone = 'brows' | 'lips' | 'eyes';

export interface PermanentPriceItem {
  id: string;
  zone: PermanentZone;
  zoneLabel: string;
  title: string;
  stageLabel: string;
  priceUah: number;
}

export interface GalleryFrame {
  id: string;
  title: string;
  category: string;
  caption: string;
  image: string;
  imageAlt: string;
  aspectClass: string;
}

export const SALON_INFO = {
  brandName: 'Sunforce Beauty',
  brandWordmarkTop: 'SUNFORCE',
  brandWordmarkBottom: 'beauty',
  city: 'Київ, Україна',
  address: 'вул. Предславинська, 43/2, Київ, Україна',
  shortAddress: 'вул. Предславинська, 43/2',
  metroNote: '5 хвилин пішки від станції метро «Палац Україна»',
  instagramHandle: '@sunforce_cosmetology',
  instagramUrl: 'https://www.instagram.com/sunforce_cosmetology/',
  coffeeHandle: '@sunforce_coffee',
  coffeeUrl: 'https://www.instagram.com/sunforce_coffee/',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=%D0%B2%D1%83%D0%BB.+%D0%9F%D1%80%D0%B5%D0%B4%D1%81%D0%BB%D0%B0%D0%B2%D0%B8%D0%BD%D1%81%D1%8C%D0%BA%D0%B0+43%2F2+%D0%9A%D0%B8%D1%97%D0%B2+%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0',
  bioTagline: 'Простір з душею поруч із Палацом Україна',
} as const;

export const HERO_MEDIA = {
  image: './src/assets/images/hero_sunforce_atelier_1795468488359.jpg',
  imageAlt:
    'Редакційна композиція інтерʼєру бʼюті-простору з темно-зеленим мармуром, ботанічними флаконами та мʼяким ранковим світлом',
};

export const ABOUT_MEDIA = {
  image: './src/assets/images/about_kyiv_sanctuary_1795468492245.jpg',
  imageAlt:
    'Спокійна лаунж-зона салону у теплих кремових тонах з травертиновим столиком та керамічною чашкою кави',
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'cosmetology',
    index: '01',
    title: 'Косметологія',
    subtitle: 'Естетичний догляд за шкірою',
    description:
      'Індивідуальний підхід до здоровʼя та природного сяйва шкіри обличчя у спокійній, камерній атмосфері.',
    scopeNote: 'Точний перелік процедур і протоколів уточнюється під час консультації в Instagram.',
    image: './src/assets/images/service_cosmetology_ritual_1795468489259.jpg',
    imageAlt: 'Делікатна косметологічна процедура догляду за шкірою обличчя в освітленому кабінеті',
    hasVerifiedPrices: false,
  },
  {
    id: 'permanent',
    index: '02',
    title: 'Перманентний макіяж',
    subtitle: 'Пудрові техніки та міжвійка',
    description:
      'Делікатне підкреслення природних рис обличчя: пудрові брови, пудрові губи та акуратна міжвійка з можливістю корекції.',
    scopeNote: 'Орієнтовні ціни з архіву Instagram наведено нижче у розділі прайсу.',
    image: './src/assets/images/service_permanent_lashes_1795468489846.jpg',
    imageAlt: 'Портрет з акцентом на природну форму брів, вій та мʼякий відтінок губ',
    hasVerifiedPrices: true,
  },
  {
    id: 'hair',
    index: '03',
    title: 'Послуги для волосся',
    subtitle: 'Догляд та естетика локонів',
    description:
      'Делікатні процедури для відновлення структури, гладкості та живого блиску волосся.',
    scopeNote: 'Актуальні послуги та вартість догляду уточнюються перед записом.',
    image: './src/assets/images/service_hair_care_1795468489782.jpg',
    imageAlt: 'Доглянуте темне волосся з природним блиском на фоні теплої студії',
    hasVerifiedPrices: false,
  },
  {
    id: 'lashes',
    index: '04',
    title: 'Вії',
    subtitle: 'Виразність природного погляду',
    description:
      'Естетичний догляд і підкреслення вигину вій для легкого, доглянутого погляду на щодень.',
    scopeNote: 'Доступні формати процедур і вільні віконця уточнюються в Direct.',
    image: './src/assets/images/service_permanent_lashes_1795468489846.jpg',
    imageAlt: 'Крупний план природно підкреслених вій та гармонійного погляду',
    hasVerifiedPrices: false,
  },
  {
    id: 'laser',
    index: '05',
    title: 'Лазерні процедури',
    subtitle: 'Апаратна естетика',
    description:
      'Сучасний напрям апаратного догляду, представлений у категоріях салону для комплексної турботи про тіло та шкіру.',
    scopeNote: 'Перелік зон, показання та чинний прайс потребують підтвердження адміністратора.',
    image: './src/assets/images/service_laser_aesthetic_1795468489849.jpg',
    imageAlt: 'Мінімалістична естетика апаратного догляду зі скляною призмою та теплим світлом',
    hasVerifiedPrices: false,
  },
];

export const PERMANENT_PRICES: PermanentPriceItem[] = [
  {
    id: 'powder-brows',
    zone: 'brows',
    zoneLabel: 'Брови',
    title: 'Пудрові брови',
    stageLabel: 'Основна процедура',
    priceUah: 3000,
  },
  {
    id: 'brows-correction',
    zone: 'brows',
    zoneLabel: 'Брови',
    title: 'Корекція брів',
    stageLabel: 'Повторний візит',
    priceUah: 1500,
  },
  {
    id: 'powder-lips',
    zone: 'lips',
    zoneLabel: 'Губи',
    title: 'Пудрові губи',
    stageLabel: 'Основна процедура',
    priceUah: 3000,
  },
  {
    id: 'lips-correction',
    zone: 'lips',
    zoneLabel: 'Губи',
    title: 'Корекція губ',
    stageLabel: 'Повторний візит',
    priceUah: 1500,
  },
  {
    id: 'lash-line',
    zone: 'eyes',
    zoneLabel: 'Очі',
    title: 'Міжвійка (стрілочка)',
    stageLabel: 'Основна процедура',
    priceUah: 2000,
  },
  {
    id: 'lash-line-correction',
    zone: 'eyes',
    zoneLabel: 'Очі',
    title: 'Корекція міжвійки',
    stageLabel: 'Повторний візит',
    priceUah: 1000,
  },
];

export const GALLERY_FRAMES: GalleryFrame[] = [
  {
    id: 'atelier-counter',
    title: 'Простір спокою',
    category: 'Інтерʼєр · Концепція',
    caption: 'Редакційна візуалізація атмосфери бʼюті-ательє у глибоких зелених і теплих камʼяних тонах.',
    image: './src/assets/images/hero_sunforce_atelier_1795468488359.jpg',
    imageAlt: 'Стіл із зеленого мармуру, ботанічні флакони та тіні ранкового сонця на стіні',
    aspectClass: 'aspect-[4/3] md:aspect-auto md:h-[430px] md:col-span-7',
  },
  {
    id: 'lounge-coffee',
    title: 'Аромат кави поруч',
    category: 'Гостинність · Деталі',
    caption: 'Настрій неспішного ранку: поруч із простором працює кавʼярня @sunforce_coffee.',
    image: './src/assets/images/about_kyiv_sanctuary_1795468492245.jpg',
    imageAlt: 'Світла ніша, травертиновий столик із чашкою кави та льняна штора',
    aspectClass: 'aspect-[4/5] md:aspect-auto md:h-[430px] md:col-span-5',
  },
  {
    id: 'facial-ritual',
    title: 'Дотик і баланс',
    category: 'Косметологія',
    caption: 'Делікатні ритуали догляду за шкірою обличчя без поспіху (демо-фото).',
    image: './src/assets/images/service_cosmetology_ritual_1795468489259.jpg',
    imageAlt: 'Естетичний догляд за шкірою обличчя у світлому кабінеті',
    aspectClass: 'aspect-[4/3] md:aspect-auto md:h-[310px] md:col-span-4',
  },
  {
    id: 'natural-definition',
    title: 'Природна виразність',
    category: 'Перманент · Вії',
    caption: 'Мʼякі лінії брів, делікатні вії та натуральний тон губ (демо-фото).',
    image: './src/assets/images/service_permanent_lashes_1795468489846.jpg',
    imageAlt: 'Жіночий портрет із природним макіяжем брів, вій та губ у золотому світлі',
    aspectClass: 'aspect-[4/3] md:aspect-auto md:h-[310px] md:col-span-4',
  },
  {
    id: 'silk-hair',
    title: 'Здоровий блиск',
    category: 'Волосся · Лазерна естетика',
    caption: 'Гладкість текстур, природне світло та чистота ліній у кожній деталі.',
    image: './src/assets/images/service_hair_care_1795468489782.jpg',
    imageAlt: 'Блискуче здорове темне волосся у мʼякому студійному світлі',
    aspectClass: 'aspect-[4/3] md:aspect-auto md:h-[310px] md:col-span-4',
  },
];
