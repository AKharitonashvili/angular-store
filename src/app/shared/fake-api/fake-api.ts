import {
  BigBannerProductsInterface,
  CategoryInterface,
  ProductInterface,
} from '../interfaces/interfaces';

export const Categories: CategoryInterface[] = [
  { name: 'Phones', icon: 'smartphone' },
  { name: 'Smart Watches', icon: 'watch' },
  { name: 'Cameras', icon: 'local_see' },
  { name: 'Headphones', icon: 'headphones' },
  { name: 'Computers', icon: 'computer' },
  { name: 'Gaming', icon: 'sports_esports' },
];

export const Products: ProductInterface[] = [
  {
    header: 'Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)',
    price: '900',
    isFavorite: false,
    image: '',
    id: '1',
  },
  {
    header: 'Blackmagic Pocket Cinema Camera 6k',
    price: '2535',
    isFavorite: false,
    image: '',
    id: '2',
  },
  {
    header: 'Apple Watch Series 9 GPS 41mm Starlight Aluminium Case',
    price: '399',
    isFavorite: false,
    image: '',
    id: '3',
  },
  {
    header: 'AirPods Max Silver',
    price: '549',
    isFavorite: false,
    image: '',
    id: '4',
  },
  {
    header: 'Samsung Galaxy Watch6 Classic 47mm Black',
    price: '369',
    isFavorite: false,
    image: '',
    id: '5',
  },
  {
    header: 'Galaxy Z Fold5 Unlocked | 256GB | Phantom Black',
    price: '1799',
    isFavorite: false,
    image: '',
    id: '6',
  },
  {
    header: 'Galaxy Buds FE Graphite',
    price: '99.99',
    isFavorite: false,
    image: '',
    id: '7',
  },
  {
    header: 'Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021',
    price: '398',
    isFavorite: false,
    image: '',
    id: '8',
  },
];

export const bigBannerProducts: BigBannerProductsInterface[] = [
  {
    header: 'Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)',
    price: '900',
    isFavorite: false,
    image: '',
    id: '1',
    description:
      "<div class='flex flex-col items-center justify-center gap-4'><div class='text-sm text-optional'>The Apple iPhone 14 Pro Max in Deep Purple features 128GB of storage capacity. Experience powerful performance and stunning visuals with its advanced technology and sleek design.</div><button class='rounded-md border-[.0938rem] border-black px-14 py-4'>Shop Now</button></div>",
  },
  {
    header: 'Blackmagic Pocket Cinema Camera 6k',
    price: '2535',
    isFavorite: false,
    image: '',
    id: '2',
    description:
      "<div class='flex flex-col items-center justify-center gap-4'><div class='text-sm text-optional'>Capture stunning cinematic footage with the Blackmagic Pocket Cinema Camera 6k. Featuring high-resolution recording capabilities and advanced image processing, it's the perfect tool for professional filmmakers.</div><button class='rounded-md border-[.0938rem] border-black px-14 py-4'>Shop Now</button></div>",
  },
  {
    header: 'Apple Watch Series 9 GPS 41mm Starlight Aluminium Case',
    price: '399',
    isFavorite: false,
    image: '',
    id: '3',
    description:
      "<div class='flex flex-col items-center justify-center gap-4'><div class='text-sm text-optional'>Stay connected and track your fitness goals with the Apple Watch Series 9 GPS. Its sleek design and advanced features make it the perfect companion for an active lifestyle.</div><button class='rounded-md border-[.0938rem] border-black px-14 py-4'>Shop Now</button></div>",
  },
  {
    header: 'AirPods Max Silver',
    price: '549',
    isFavorite: false,
    image: '',
    id: '4',
    description:
      "<div class='flex flex-col items-center justify-center gap-4'><div class='text-sm text-optional'>Experience immersive audio quality with the AirPods Max in Silver. Featuring advanced technology and a comfortable design, they're perfect for enjoying your favorite music and podcasts.</div><button class='rounded-md border-[.0938rem] border-black px-14 py-4'>Shop Now</button></div>",
  },
];
