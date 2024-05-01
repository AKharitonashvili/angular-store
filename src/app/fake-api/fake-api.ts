import {
  BigBannerProductsInterface,
  CategoryInterface,
  ProductInterface,
} from '../shared/interfaces/interfaces';

export const Categories: CategoryInterface[] = [
  { name: 'Phones', icon: 'smartphone' },
  { name: 'Smart Watches', icon: 'watch' },
  { name: 'Cameras', icon: 'local_see' },
  { name: 'Headphones', icon: 'headphones' },
  { name: 'Computers', icon: 'computer' },
  { name: 'Gaming', icon: 'sports_esports' },
  { name: 'TVs', icon: 'tv' },
  { name: 'Tablets', icon: 'tablet' },
  { name: 'Speakers', icon: 'speaker' },
  { name: 'Printers', icon: 'print' },
];

export const Products: ProductInterface[] = [
  {
    header: 'Apple iPhone 14 Pro Max',
    price: 90,
    oldPrice: 100,
    isFavorite: false,
    image: '',
    id: '1',
    type: ['newArrival'],
    categories: [],
    options: ['128GB', '256GB', '512GB', '1TB'],
    details:
      'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
    parameters: [
      { name: 'Screen size', value: '6.7"', icon: 'smartphone' },
      { name: 'CPU', value: 'Apple A14 Bionic', icon: 'memory' },
      { name: 'Number of cores', value: '6', icon: 'memory' },
      { name: 'Main camera', value: '48 - 12 - 12MP', icon: 'photo_camera' },
      { name: 'Front camera', value: '12MP', icon: 'photo_camera' },
      {
        name: 'Battery capacity',
        value: '4332 mAh',
        icon: 'battery_charging_full',
      },
    ],
  },
  {
    header: 'Blackmagic Pocket Cinema Camera 6k',
    price: 253,
    oldPrice: 283,
    isFavorite: false,
    image: '',
    id: '2',
    type: ['newArrival'],
    categories: [],
    options: ['6K'],
    details:
      'The Blackmagic Pocket Cinema Camera 6K features a Super 35mm sensor, 13 stops of dynamic range, and dual native ISO up to 25,600 for stunning low-light performance. It supports recording in Blackmagic RAW and ProRes, providing exceptional image quality and flexibility.',
    parameters: [
      { name: 'Sensor Size', value: 'Super 35mm', icon: 'sensors' },
      { name: 'Dynamic Range', value: '13 stops', icon: 'layers' },
      { name: 'ISO', value: 'Dual native ISO up to 25,600', icon: 'iso' },
      {
        name: 'Recording Format',
        value: 'Blackmagic RAW, ProRes',
        icon: 'graphic_eq',
      },
    ],
  },
  {
    header: 'Apple Watch Series 9',
    price: 39,
    oldPrice: 59,
    isFavorite: false,
    image: '',
    id: '3',
    type: ['newArrival'],
    categories: [],
    options: ['GPS', 'GPS + Cellular'],
    details:
      'The Apple Watch Series 9 features an always-on Retina display, advanced emergency and fitness tracking, and water resistance up to 50 meters. Choose between GPS and GPS + Cellular models to stay connected even without your iPhone nearby.',
    parameters: [
      { name: 'Display', value: 'Always-on Retina display', icon: 'monitor' },
      {
        name: 'Health Tracking',
        value: 'Advanced emergency and fitness tracking',
        icon: 'emergency',
      },
      {
        name: 'Water Resistance',
        value: 'Up to 50 meters',
        icon: 'water_drop',
      },
      {
        name: 'Connectivity',
        value: 'GPS, GPS + Cellular',
        icon: 'gps_fixed',
      },
    ],
  },
  {
    header: 'AirPods Max Silver',
    price: 54,
    oldPrice: 64,
    isFavorite: false,
    image: '',
    id: '4',
    type: ['newArrival'],
    categories: [],
    options: ['Silver', 'Space Gray', 'Sky Blue', 'Green', 'Pink'],
    details:
      'The AirPods Max delivers an immersive listening experience with high-fidelity audio, adaptive EQ, and spatial audio with dynamic head tracking. Choose from five stunning colors to match your style.',
    parameters: [
      {
        name: 'Audio',
        value: 'High-fidelity audio, Adaptive EQ',
        icon: 'volume_up',
      },
      {
        name: 'Spatial Audio',
        value: 'With dynamic head tracking',
        icon: 'volume_up',
      },
      {
        name: 'Color Options',
        value: 'Silver, Space Gray, Sky Blue, Green, Pink',
        icon: 'palette',
      },
    ],
  },
  {
    header: 'Samsung Galaxy Watch6 Classic',
    price: 369,
    isFavorite: false,
    image: '',
    id: '5',
    type: ['newArrival'],
    categories: [],
    options: ['Classic', 'Sport', 'Titanium'],
    details:
      'The Samsung Galaxy Watch6 Classic combines timeless design with advanced emergency and fitness features. With options for Classic, Sport, and Titanium models, there is a Galaxy Watch6 for every lifestyle.',
    parameters: [
      { name: 'Design', value: 'Timeless design', icon: 'color_lens' },
      {
        name: 'Health Features',
        value: 'Advanced emergency and fitness tracking',
        icon: 'emergency',
      },
      {
        name: 'Model Options',
        value: 'Classic, Sport, Titanium',
        icon: 'model_options',
      },
    ],
  },
  {
    header: 'Galaxy Z Fold5 Unlocked',
    price: 1799,
    isFavorite: false,
    image: '',
    id: '6',
    type: ['newArrival'],
    categories: [],
    options: ['Unlocked', 'Carrier Locked'],
    details:
      'The Galaxy Z Fold5 Unlocked features a large foldable display, powerful performance, and versatile camera system. Choose between unlocked and carrier-locked versions to match your mobile network.',
    parameters: [
      { name: 'Display', value: 'Large foldable display', icon: 'monitor' },
      {
        name: 'Performance',
        value: 'Powerful performance',
        icon: 'settings',
      },
      { name: 'Camera', value: 'Versatile camera system', icon: 'camera' },
      {
        name: 'Network Options',
        value: 'Unlocked, Carrier Locked',
        icon: 'wifi',
      },
    ],
  },
  {
    header: 'Galaxy Buds FE',
    price: 99.99,
    isFavorite: false,
    image: '',
    id: '7',
    type: ['featured'],
    categories: [],
    options: ['Graphite', 'Red', 'Lavender', 'White', 'Yellow'],
    details:
      'The Galaxy Buds FE offers premium sound quality, long-lasting battery life, and customizable fit. Choose from five vibrant colors to match your style and enjoy wireless freedom wherever you go.',
    parameters: [
      {
        name: 'Sound Quality',
        value: 'Premium sound quality',
        icon: 'volume_up',
      },
      {
        name: 'Battery Life',
        value: 'Long-lasting battery life',
        icon: 'battery_charging_full',
      },
      {
        name: 'Color Options',
        value: 'Graphite, Red, Lavender, White, Yellow',
        icon: 'palette',
      },
    ],
  },
  {
    header: 'Apple iPad 9 10.2"',
    price: 398,
    isFavorite: false,
    image: '',
    id: '8',
    type: ['featured'],
    categories: [],
    options: ['64GB', '128GB', '256GB'],
    details:
      'The Apple iPad 9 10.2" features a stunning Retina display, powerful A13 Bionic chip, and support for the Smart Keyboard and Apple Pencil. With up to 256GB of storage capacity, it offers ample space for all your apps, games, and media.',
    parameters: [
      { name: 'Screen size', value: '10.2"', icon: 'tablet' },
      { name: 'CPU', value: 'Apple A13 Bionic', icon: 'memory' },
      { name: 'Number of cores', value: '6', icon: 'memory' },
      { name: 'Main camera', value: '8MP', icon: 'photo_camera' },
      { name: 'Front camera', value: '1.2MP', icon: 'photo_camera' },
      {
        name: 'Battery capacity',
        value: '32.4 Wh',
        icon: 'battery_charging_full',
      },
    ],
  },
  {
    header: 'Sony PlayStation 5',
    price: 499.99,
    isFavorite: false,
    image: '',
    id: '9',
    type: ['bestSeller'],
    categories: [],
    options: ['Disc Edition', 'Digital Edition'],
    details:
      'Experience lightning-fast loading, deeper immersion, and better graphics with the Sony PlayStation 5. Choose between the Disc Edition for physical games or the Digital Edition for digital downloads.',
    parameters: [
      { name: 'CPU', value: 'Custom AMD Zen 2', icon: 'memory' },
      { name: 'GPU', value: 'Custom AMD RDNA 2', icon: 'memory' },
      { name: 'RAM', value: '16GB GDDR6', icon: 'memory' },
      { name: 'Storage', value: '825GB SSD', icon: 'storage' },
      { name: 'Resolution', value: 'Up to 8K', icon: 'hd' },
    ],
  },
  {
    header: 'Xbox Series X 1TB',
    price: 499,
    isFavorite: false,
    image: '',
    id: '10',
    type: ['bestSeller'],
    categories: [],
    options: ['Standard Edition', 'All-Digital Edition'],
    details:
      'The Xbox Series X delivers powerful gaming performance and speed, with support for 4K gaming at 120fps and a custom AMD Zen 2 CPU. Choose between the Standard Edition for physical games or the All-Digital Edition for digital-only gaming.',
    parameters: [
      { name: 'CPU', value: 'Custom AMD Zen 2', icon: 'memory' },
      { name: 'GPU', value: 'Custom AMD RDNA 2', icon: 'memory' },
      { name: 'RAM', value: '16GB GDDR6', icon: 'memory' },
      { name: 'Storage', value: '1TB NVMe SSD', icon: 'storage' },
      { name: 'Resolution', value: 'Up to 4K', icon: 'hd' },
    ],
  },
  {
    header: 'Nintendo Switch OLED',
    price: 349.99,
    isFavorite: false,
    image: '',
    id: '11',
    type: ['newArrival'],
    categories: [],
    options: ['Black', 'White'],
    details:
      'The Nintendo Switch OLED features a vibrant OLED screen, enhanced audio, and a wide range of compatible games. With its versatile design, you can play in handheld, tabletop, or TV mode.',
    parameters: [
      { name: 'Screen size', value: '7"', icon: 'tablet' },
      { name: 'Resolution', value: '1280 x 720', icon: 'hd' },
      { name: 'Storage', value: '32GB', icon: 'storage' },
      { name: 'Battery life', value: 'Up to 9 hours', icon: 'battery_full' },
      { name: 'Color', value: 'Black', icon: 'palette' },
    ],
  },
  {
    header: 'DJI Mavic Air 2 Fly',
    price: 999,
    isFavorite: false,
    image: '',
    id: '12',
    type: ['featured'],
    categories: [],
    options: ['Standard Edition', 'Fly More Combo'],
    details:
      "The DJI Mavic Air 2 Fly is a compact and powerful drone capable of capturing stunning aerial footage. With intelligent shooting modes, 4K video recording, and up to 34 minutes of flight time, it's perfect for both beginners and experienced pilots.",
    parameters: [
      { name: 'Camera', value: '4K/60fps, 48MP', icon: 'photo_camera' },
      { name: 'Flight time', value: 'Up to 34 minutes', icon: 'battery_full' },
      {
        name: 'Max transmission distance',
        value: '10km',
        icon: 'signal_wifi_4_bar',
      },
      { name: 'Max speed', value: '68.4 km/h', icon: 'speed' },
      { name: 'fitness_center', value: '570g', icon: 'fitness_center' },
    ],
  },
  {
    header: 'GoPro HERO10',
    price: 499.99,
    isFavorite: false,
    image: '',
    id: '13',
    type: ['featured'],
    categories: [],
    options: ['Standard Edition', 'Bundle with Accessories'],
    details:
      'The GoPro HERO10 is the ultimate action camera, with stunning 5.3K video recording, HyperSmooth 4.0 stabilization, and TimeWarp 4.0 for mesmerizing time-lapse footage. Take your adventures to the next level with this versatile camera.',
    parameters: [
      {
        name: 'Video resolution',
        value: '5.3K/60fps, 4K/120fps',
        icon: 'photo_camera',
      },
      {
        name: 'Stabilization',
        value: 'HyperSmooth 4.0',
        icon: 'sports_handball',
      },
      { name: 'Time-lapse', value: 'TimeWarp 4.0', icon: 'timelapse' },
      { name: 'Waterproof', value: 'Up to 33ft (10m)', icon: 'water_damage' },
      { name: 'Weight', value: '153g', icon: 'fitness_center' },
    ],
  },
  {
    header: 'Canon EOS R5 Mirrorless Camera',
    price: 3899,
    isFavorite: false,
    image: '',
    id: '14',
    type: ['newArrival'],
    categories: [],
    options: ['Body Only', 'Kit with Lens'],
    details:
      'The Canon EOS R5 Mirrorless Camera sets new standards for photography and videography, with 45MP resolution, 8K video recording, and advanced autofocus capabilities. Capture stunning images and cinematic videos with this professional-grade camera.',
    parameters: [
      { name: 'Resolution', value: '45MP', icon: 'photo_camera' },
      {
        name: 'Video resolution',
        value: '8K/30fps, 4K/120fps',
        icon: '8k_plus',
      },
      { name: 'Autofocus', value: 'Dual Pixel CMOS AF II', icon: '8k_plus' },
      {
        name: 'Image stabilization',
        value: '5-axis IBIS',
        icon: '8k_plus',
      },
      {
        name: 'Weight',
        value: '650g (body only)',
        icon: 'fitness_center',
      },
    ],
  },
  {
    header: 'Bose QuietComfort 45 Wireless Noise Cancelling Headphones',
    price: 329.95,
    isFavorite: false,
    image: '',
    id: '15',
    type: ['bestSeller'],
    categories: [],
    options: ['Black', 'Silver'],
    details:
      'The Bose QuietComfort 45 Wireless Headphones deliver industry-leading noise cancellation, immersive sound quality, and up to 24 hours of battery life. Stay focused and relaxed with these premium headphones, perfect for travel, work, or relaxation.',
    parameters: [
      { name: 'Noise cancellation', value: 'Adaptive', icon: 'volume_off' },
      { name: 'Battery life', value: 'Up to 24 hours', icon: 'battery_full' },
      { name: 'Bluetooth range', value: 'Up to 10m', icon: 'bluetooth' },
      { name: 'Weight', value: '223g', icon: 'fitness_center' },
      { name: 'Color', value: 'Black', icon: 'palette' },
    ],
  },
  {
    header: 'Samsung 85" QN90A Neo QLED 4K Smart TV',
    price: 4499.99,
    isFavorite: false,
    image: '',
    id: '16',
    type: ['featured'],
    categories: [],
    options: ['Standard Edition', 'Bundle with Soundbar'],
    details: `The Samsung 85" QN90A Neo QLED 4K Smart TV offers stunning picture quality, immersive sound, and advanced smart features. With Quantum Matrix Technology, Object Tracking Sound, and built-in voice assistants, it's the ultimate entertainment hub for your home.`,
    parameters: [
      { name: 'Screen size', value: '85"', icon: 'tv' },
      { name: 'Resolution', value: '4K UHD', icon: 'hd' },
      { name: 'HDR', value: 'Quantum HDR 32x', icon: 'hdr_off' },
      {
        name: 'Smart features',
        value: 'Tizen OS, Voice Assistants',
        icon: 'settings',
      },
      {
        name: 'Weight',
        value: '52.2kg (with stand)',
        icon: 'fitness_center',
      },
    ],
  },
  {
    header: 'Sony WH-1000XM4 Wireless Noise Cancelling Headphones',
    price: 348,
    isFavorite: false,
    image: '',
    id: '17',
    type: ['bestSeller'],
    categories: [],
    options: ['Black', 'Silver'],
    details:
      'The Sony WH-1000XM4 Wireless Headphones offer industry-leading noise cancellation, exceptional sound quality, and long-lasting comfort. With advanced features like Adaptive Sound Control and Speak-to-Chat, they provide a personalized listening experience.',
    parameters: [
      { name: 'Noise cancellation', value: 'Adaptive', icon: 'volume_off' },
      { name: 'Battery life', value: 'Up to 30 hours', icon: 'battery_full' },
      { name: 'Bluetooth range', value: 'Up to 10m', icon: 'bluetooth' },
      { name: 'Weight', value: '254g', icon: 'fitness_center' },
      { name: 'Color', value: 'Black', icon: 'palette' },
    ],
  },
  {
    header: 'LG CX 55" 4K Smart OLED TV',
    price: 1599.99,
    isFavorite: false,
    image: '',
    id: '18',
    type: ['featured'],
    categories: [],
    options: ['55"', '65"', '77"'],
    details:
      'The LG CX 55" 4K Smart OLED TV delivers stunning picture quality, vibrant colors, and deep blacks. With AI ThinQ technology, Dolby Vision IQ, and built-in voice assistants, it offers a cinematic viewing experience in the comfort of your home.',
    parameters: [
      { name: 'Screen size', value: '55"', icon: 'tv' },
      { name: 'Resolution', value: '4K UHD', icon: 'hd' },
      { name: 'HDR', value: 'Dolby Vision, HDR10, HLG', icon: 'hdr_on' },
      {
        name: 'Smart features',
        value: 'webOS, Voice Assistants',
        icon: 'settings',
      },
      {
        name: 'Weight',
        value: '17.9kg (with stand)',
        icon: 'fitness_center',
      },
    ],
  },
];

export const bigBannerProducts: BigBannerProductsInterface[] = [
  {
    header: 'Apple iPhone 14 Pro Max',
    price: 900,
    isFavorite: false,
    image: '',
    id: '1',
    categories: [],
    description:
      "<div class='flex flex-col items-center justify-center gap-4'><div class='text-sm '>The Apple iPhone 14 Pro Max in Deep Purple features 128GB of storage capacity. Experience powerful performance and stunning visuals with its advanced technology and sleek design.</div></div>",
  },
  {
    header: 'Blackmagic Pocket Cinema Camera 6k',
    price: 2535,
    isFavorite: false,
    image: '',
    id: '2',
    categories: [],
    description:
      "<div class='flex flex-col items-center justify-center gap-4'><div class='text-sm '>Capture stunning cinematic footage with the Blackmagic Pocket Cinema Camera 6k. Featuring high-resolution recording capabilities and advanced image processing, it's the perfect tool for professional filmmakers.</div></div>",
  },
  {
    header: 'Apple Watch Series 9 GPS',
    price: 399,
    isFavorite: false,
    image: '',
    id: '3',
    categories: [],
    description:
      "<div class='flex flex-col items-center justify-center gap-4'><div class='text-sm '>Stay connected and track your fitness goals with the Apple Watch Series 9 GPS. Its sleek design and advanced features make it the perfect companion for an active lifestyle.</div></div>",
  },
  {
    header: 'AirPods Max',
    price: 549,
    isFavorite: false,
    image: '',
    id: '4',
    categories: [],
    description:
      "<div class='flex flex-col items-center justify-center gap-4'><div class='text-sm '>Experience immersive audio quality with the AirPods Max in Silver. Featuring advanced technology and a comfortable design, they're perfect for enjoying your favorite music and podcasts.</div></div>",
  },
];
