export interface IImage {
  url: string;
  source: string;
}

export interface IProduct {
  _id: string;
  name: string;
  price: number;
  rating: number;
  status: number;
  images: IImage[];
  feedbacksCount?: number;
  subCategory?: string;
}

export const PRODUCTS: IProduct[] = [
  {
    _id: 'analogovaa-kamera-hikvision-ds-2ce78u8t-it3-28-mm',
    feedbacksCount: 3,
    subCategory: 'professionalnoe-setevoe-oborudovanie',
    images: [
      {
        url: 'https://c.dns-shop.ru/thumb/st1/fit/0/0/071a806a576767470333a1a9412cde2c/3de61cdcb9ce7b02d23a5df59740797cb93d4c6bf9017b673ee8d23cf04cc557.jpg',
        source: '3de61cdcb9ce7b02d23a5df59740797cb93d4c6bf9017b673ee8d23cf04cc557.jpg',
      },
    ],
    name: 'Аналоговая камера HIKVISION DS-2CE78U8T-IT3 2.8 mm',
    price: 173,
    rating: 4.666666666666667,
    status: 0,
  },
  {
    _id: 'disk-pilnyj-praktika-032-249',
    feedbacksCount: 2,
    subCategory: 'ruchnoj-instrument-i-osnastka',
    images: [
      {
        url: 'https://c.dns-shop.ru/thumb/st4/fit/wm/2000/2000/1c5b5168efaefd9e5687698251025cf0/cf2d4373e7b5f4c8fb024f615087625a1191e3dacabc8e7578c748999779ef15.jpg',
        source: 'cf2d4373e7b5f4c8fb024f615087625a1191e3dacabc8e7578c748999779ef15.jpg',
      },
      {
        url: 'https://c.dns-shop.ru/thumb/st1/fit/wm/2000/2000/6788ede01f8fac1f0add6453312907b3/cfdfb21a14b015ff7e5d01f6fe55c2f6f95f3f1678ac7b6a204ebb4dad544651.jpg',
        source: 'cfdfb21a14b015ff7e5d01f6fe55c2f6f95f3f1678ac7b6a204ebb4dad544651.jpg',
      },
    ],
    name: 'Диск пильный Практика 032-249',
    price: 8,
    rating: 2,
    status: 1,
  },
  {
    _id: 'trimmer-elektriceskij-ryobi-rlt4125',
    feedbacksCount: 2,
    subCategory: 'elektroinstrumenty-i-texnika-dlya-sada',
    images: [
      {
        url: 'https://c.dns-shop.ru/thumb/st1/fit/wm/2000/2000/9bc6e293575957dd2baae0e72b49c1af/aa2804aa67c7d6fd91fbecbbf5257065e5143b4a0680fe0d88164461d465a18d.jpg',
        source: 'aa2804aa67c7d6fd91fbecbbf5257065e5143b4a0680fe0d88164461d465a18d.jpg',
      },
      {
        url: 'https://c.dns-shop.ru/thumb/st4/fit/wm/2000/2000/9a8f6d8403d0b6f04552ce4b624e28fe/196f72fb3b42689452485ab85961af6aeba3989b703c4587d700b70941f88005.jpg',
        source: '196f72fb3b42689452485ab85961af6aeba3989b703c4587d700b70941f88005.jpg',
      },
      {
        url: 'https://c.dns-shop.ru/thumb/st1/fit/wm/2106/2106/4eb5bfee880e531f8b89592876024bac/d773adb25fcb0baf3c9304cfa719e83bf7e474fd6d51cc4c8249667dc055ed58.jpg',
        source: 'd773adb25fcb0baf3c9304cfa719e83bf7e474fd6d51cc4c8249667dc055ed58.jpg',
      },
      {
        url: 'https://c.dns-shop.ru/thumb/st1/fit/wm/2000/2000/09a6c1e517ce1bea4fffba8c907c2186/7521ad563989a3fb4a23c9201f3b4d44a91c9b71730a74e30c49113a3ae12842.jpg',
        source: '7521ad563989a3fb4a23c9201f3b4d44a91c9b71730a74e30c49113a3ae12842.jpg',
      },
      {
        url: 'https://c.dns-shop.ru/thumb/st4/fit/wm/2000/2000/128fb9946fbef1ba84a77bab15302320/45e868b5f026ac4232c5b2097baa37a3bede2e01555de5d3a6108fa6d3b29f39.jpg',
        source: '45e868b5f026ac4232c5b2097baa37a3bede2e01555de5d3a6108fa6d3b29f39.jpg',
      },
      {
        url: 'https://c.dns-shop.ru/thumb/st1/fit/wm/2000/2000/e859603108d859f576038bf3678589cd/c9dfc4f128e3909dbcefb0d07cc9f565526a80c8b56e79103283706a99d3c383.jpg',
        source: 'c9dfc4f128e3909dbcefb0d07cc9f565526a80c8b56e79103283706a99d3c383.jpg',
      },
      {
        url: 'https://c.dns-shop.ru/thumb/st1/fit/wm/2000/2000/e72da37410e3b80f598a5c9a5e125184/8aaf4f76df153ea059e1c36e33c85c55282e929c8f301aed6d005ba3458eabed.jpg',
        source: '8aaf4f76df153ea059e1c36e33c85c55282e929c8f301aed6d005ba3458eabed.jpg',
      },
      {
        url: 'https://c.dns-shop.ru/thumb/st1/fit/wm/2000/2000/3eb4011a0cbb04587aaa694cc3fb8353/3e1b04ad90a5e310eac5f767b851a404682427d20dda7166434455c479ae0253.jpg',
        source: '3e1b04ad90a5e310eac5f767b851a404682427d20dda7166434455c479ae0253.jpg',
      },
      {
        url: 'https://c.dns-shop.ru/thumb/st4/fit/wm/2000/2000/d2cb173bb3ead6cd5a9d4d58b7558aba/d55f627df8ad86ab98f76d7ca43a52a79731737db6dcedc5c8bb9ea32329938b.jpg',
        source: 'd55f627df8ad86ab98f76d7ca43a52a79731737db6dcedc5c8bb9ea32329938b.jpg',
      },
    ],
    name: 'Триммер электрический Ryobi RLT4125',
    price: 54,
    rating: 3,
    status: 1,
  },
  {
    _id: 'sabvufernyj-dinamik-ural-bulava-10-v2',
    feedbacksCount: 1,
    subCategory: 'avtozvuk',
    images: [
      {
        url: 'https://c.dns-shop.ru/thumb/st4/fit/0/0/3f5085477a1d18bcfda379045a85c810/b9ff61c6f2590c455a6b0804e757d60084a7b022bd8bd949ad82059fab4c73ee.jpg',
        source: 'b9ff61c6f2590c455a6b0804e757d60084a7b022bd8bd949ad82059fab4c73ee.jpg',
      },
      {
        url: 'https://c.dns-shop.ru/thumb/st4/fit/0/0/3cbc0e59178b2d6b6479cdcbfa127026/0eddd76ee550d817674c7da661948f2ea21a3d41b331a2fa4ae9f1dd81f03d2c.jpg',
        source: '0eddd76ee550d817674c7da661948f2ea21a3d41b331a2fa4ae9f1dd81f03d2c.jpg',
      },
      {
        url: 'https://c.dns-shop.ru/thumb/st4/fit/0/0/3d137fb45e2623455d6777395db06788/c9ddd9d334f8166539aa768e0827282d34e7f3f91b1b5528296441e27a52c561.jpg',
        source: 'c9ddd9d334f8166539aa768e0827282d34e7f3f91b1b5528296441e27a52c561.jpg',
      },
      {
        url: 'https://c.dns-shop.ru/thumb/st1/fit/0/0/514e52103a7a140c06a3638a0bfe34a2/68b20372e50454b96231cd762ba325dd4088e67c43e5270fee28f174ae03c7a5.jpg',
        source: '68b20372e50454b96231cd762ba325dd4088e67c43e5270fee28f174ae03c7a5.jpg',
      },
      {
        url: 'https://c.dns-shop.ru/thumb/st4/fit/0/0/ef44b95f96951ca7655e01c3b62dcff8/ed8c3b447696f5a86db84746828a880718bf9f74e652b230a7e979fce3466edd.jpg',
        source: 'ed8c3b447696f5a86db84746828a880718bf9f74e652b230a7e979fce3466edd.jpg',
      },
      {
        url: 'https://c.dns-shop.ru/thumb/st4/fit/0/0/70fdcd8a61ec3adae7c14e53d0afe829/9ee929c5311fed71cef698d9715d75a5b651180e367070ceb1de01a88c9563bc.jpg',
        source: '9ee929c5311fed71cef698d9715d75a5b651180e367070ceb1de01a88c9563bc.jpg',
      },
    ],
    name: 'Сабвуферный динамик Ural BULAVA 10 V.2',
    price: 86,
    rating: 3,
    status: 1,
  },
  {
    _id: 'iso-konnektor-intro-iso-fo-11',
    feedbacksCount: 4,
    subCategory: 'avtozvuk',
    images: [
      {
        url: 'https://c.dns-shop.ru/thumb/st1/fit/wm/2000/1500/c8b5bfd292741cd90ee1b1ae047110ff/31140103c0dbfed6b35de87b8592f587f96edb3110e7d37b1f9818d3a1dd9250.jpg',
        source: '31140103c0dbfed6b35de87b8592f587f96edb3110e7d37b1f9818d3a1dd9250.jpg',
      },
      {
        url: 'https://c.dns-shop.ru/thumb/st1/fit/wm/2000/1500/8b1017ac431ccb74419bc0c64c559bb5/6dbc75acf10405f7f74776c6c11fed6fc576af75fd98726f0f1f437e71072763.jpg',
        source: '6dbc75acf10405f7f74776c6c11fed6fc576af75fd98726f0f1f437e71072763.jpg',
      },
    ],
    name: 'ISO-коннектор Intro ISO FO-11',
    price: 7,
    rating: 3.75,
    status: 1,
  },
  {
    _id: 'kartridz-strujnyj-epson-t5436',
    feedbacksCount: 2,
    subCategory: 'orgtexnika-i-ofisnoe-oborudovanie',
    images: [
      {
        url: 'https://c.dns-shop.ru/thumb/st1/fit/wm/2000/2000/ba84d628ab5ffe1d253f18ee21432948/d087fa26f2b098a9868c2414eb24a75c956573a40c72220ede8adfb6a93a062b.jpg',
        source: 'd087fa26f2b098a9868c2414eb24a75c956573a40c72220ede8adfb6a93a062b.jpg',
      },
      {
        url: 'https://c.dns-shop.ru/thumb/st1/fit/wm/2000/2000/2fbd10f04dc78d4df8afb9fa70906c60/d91f3a51171b71b5842105a985ab37486d4f7baa705661b0b109d776e06456c9.jpg',
        source: 'd91f3a51171b71b5842105a985ab37486d4f7baa705661b0b109d776e06456c9.jpg',
      },
      {
        url: 'https://c.dns-shop.ru/thumb/st4/fit/0/0/6ce3953cfe3dacfe91dd7b208e3d6239/a9a0e54840a042ec1dbf150d0964c61797dda2c9254c7824e9747290d0297c09.jpg',
        source: 'a9a0e54840a042ec1dbf150d0964c61797dda2c9254c7824e9747290d0297c09.jpg',
      },
    ],
    name: 'Картридж струйный Epson T5436',
    price: 84,
    rating: 3.5,
    status: 0,
  },
  {
    _id: 'vodonagrevatel-ariston-vls-evo-qh-100-d',
    feedbacksCount: 2,
    subCategory: 'tovary-dlya-doma',
    images: [
      {
        url: 'https://c.dns-shop.ru/thumb/st1/fit/0/0/6a2dfaa7c23914db842230e03c478f9e/9705d8d8f7dacb1a588b7a7df409902d6680c5b310d828dfbd8108194a2904fb.jpg',
        source: '9705d8d8f7dacb1a588b7a7df409902d6680c5b310d828dfbd8108194a2904fb.jpg',
      },
      {
        url: 'https://c.dns-shop.ru/thumb/st4/fit/0/0/80b0d3a0ab97ea654ce56b9642ea576f/33d11c49b2c06d829cb4a2ce4e20acfaf63637aa5ec4af5052d776d6cd6e9f90.jpg',
        source: '33d11c49b2c06d829cb4a2ce4e20acfaf63637aa5ec4af5052d776d6cd6e9f90.jpg',
      },
      {
        url: 'https://c.dns-shop.ru/thumb/st4/fit/0/0/c6f268ace698116eff17946421bd2591/a7f7cc3c4ef4517f6a7deb0814b563c968c608a6e9955a9d2d8e27d339296f2e.jpg',
        source: 'a7f7cc3c4ef4517f6a7deb0814b563c968c608a6e9955a9d2d8e27d339296f2e.jpg',
      },
    ],
    name: 'Водонагреватель ARISTON VLS EVO QH 100 D',
    price: 406,
    rating: 4.5,
    status: 0,
  },
  {
    _id: 'operativnaa-pamat-a-data-xpg-gammix-d10-ax4u3200316g16a-sr10-16-gb',
    feedbacksCount: 3,
    subCategory: 'komplektuyushhie-dlya-pk',
    images: [
      {
        url: 'https://c.dns-shop.ru/thumb/st1/fit/0/0/0ffc8061c405be514f1508a0b8fdfbb0/ee713068793abe91364e9572fe084b52508750dcae941aa3b52875f3b071eb4d.jpg',
        source: 'ee713068793abe91364e9572fe084b52508750dcae941aa3b52875f3b071eb4d.jpg',
      },
      {
        url: 'https://c.dns-shop.ru/thumb/st4/fit/0/0/1373629b21c1af22b2b28959b8bcd1d8/ab0a0c802eb70a8a06328d5e0c78610f5cc2b60187e70574be5066a3d63f2527.jpg',
        source: 'ab0a0c802eb70a8a06328d5e0c78610f5cc2b60187e70574be5066a3d63f2527.jpg',
      },
    ],
    name: 'Оперативная память A-Data XPG Gammix D10 [AX4U3200316G16A-SR10] 16 ГБ',
    price: 96,
    rating: 3.6666666666666665,
    status: 0,
  },
  {
    _id: 'modul-rassirenia-huawei-cloudlink-7960kem',
    feedbacksCount: 1,
    subCategory: 'professionalnoe-setevoe-oborudovanie',
    images: [
      {
        url: 'https://c.dns-shop.ru/thumb/st1/fit/0/0/dfacd05dc1faa84082e3a946e42c26e7/cefb546c391037870eb64522880803f69c31e0d3591622ecbd18f021b37fc312.jpg',
        source: 'cefb546c391037870eb64522880803f69c31e0d3591622ecbd18f021b37fc312.jpg',
      },
    ],
    name: 'Модуль расширения HUAWEI CloudLink 7960KEM',
    price: 210,
    rating: 3,
    status: 1,
  },
];
