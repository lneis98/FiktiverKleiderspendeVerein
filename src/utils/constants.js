export const CONFIG = {
  // Validation
  MIN_NAME_LENGTH: 2,
  MAX_NAME_LENGTH: 50,
  MIN_PHONE_DIGITS: 8,
  MAX_PHONE_LENGTH: 20,
  MIN_STREET_LENGTH: 3,
  MIN_CITY_LENGTH: 2,
  MIN_ZIP_LENGTH: 4,
  MAX_ZIP_LENGTH: 10,
  
  // UI
  ANIMATION_DURATION: 150,
  DEBOUNCE_DELAY: 300,
  NOTIFICATION_DURATION: 5000,
  ERROR_NOTIFICATION_DURATION: 7000,
  
  // Reference Numbers
  REF_PREFIX: 'KS',
  REF_LENGTH: 10,
  
  // Storage Keys
  STORAGE_KEYS: {
    DONATION_TYPE: 'donationType',
    PICKUP_DATA: 'pickupData',
    DROPOFF_DATA: 'dropoffData',
    REFERENCE_NUMBER: 'referenceNumber',
    TRACKING_DATA: 'trackingData'
  },
  
  // Form Options — single source of truth for clothing types
  CLOTHING_TYPES: [
    { value: 'shirts',      icon: '👔', label: 'Hemden & T-Shirts' },
    { value: 'pants',       icon: '👖', label: 'Hosen & Jeans'    },
    { value: 'dresses',     icon: '👗', label: 'Kleider & Röcke'  },
    { value: 'jackets',     icon: '🧥', label: 'Jacken & Mäntel'  },
    { value: 'sweaters',    icon: '🧶', label: 'Pullover'          },
    { value: 'children',    icon: '🍼', label: 'Kinderkleidung'    },
    { value: 'shoes',       icon: '👟', label: 'Schuhe'            },
    { value: 'accessories', icon: '🧣', label: 'Accessoires'       }
  ],
  
  SIZES: [
    { id: 'xs', label: 'XS' },
    { id: 's', label: 'S' },
    { id: 'm', label: 'M' },
    { id: 'l', label: 'L' },
    { id: 'xl', label: 'XL' },
    { id: 'xxl', label: 'XXL' },
    { id: 'xxxl', label: 'XXXL' }
  ],
  
  GENDERS: [
    { id: 'male', label: 'Männlich', icon: '♂' },
    { id: 'female', label: 'Weiblich', icon: '♀' },
    { id: 'unisex', label: 'Unisex', icon: '⚲' }
  ],
  
  QUALITY_LEVELS: [
    { id: 'new', label: 'Neu', description: 'Ungetragen mit Etikett' },
    { id: 'excellent', label: 'Sehr gut', description: 'Kaum getragen, wie neu' },
    { id: 'good', label: 'Gut', description: 'Normale Gebrauchsspuren' },
    { id: 'acceptable', label: 'Akzeptabel', description: 'Deutliche Gebrauchsspuren' }
  ],
  
  PICKUP_TIME_SLOTS: [
    { id: 'morning', label: 'Vormittags', time: '9:00 - 12:00' },
    { id: 'afternoon', label: 'Nachmittags', time: '14:00 - 17:00' },
    { id: 'evening', label: 'Abends', time: '17:00 - 19:00' }
  ],
  
  DROPOFF_LOCATIONS: [
    { 
      id: 'location-1', 
      name: 'Hauptstelle Birkenau',
      address: 'Hauptstraße 123, 69488 Birkenau',
      hours: 'Mo-Fr: 9:00-17:00, Sa: 9:00-13:00'
    },
    { 
      id: 'location-2', 
      name: 'Sammelstelle Weinheim',
      address: 'Bahnhofstraße 45, 69469 Weinheim',
      hours: 'Mo-Fr: 10:00-18:00'
    }
  ],

  // Business Location (for pickup proximity validation)
  BUSINESS_LOCATION: {
    name: 'Hauptstelle Birkenau',
    address: 'Hauptstraße 123, 69488 Birkenau',
    plz: '69488',
    plzPrefix: '69'
  },
  
  // Donation Status
  DONATION_STATUSES: {
    REGISTERED: 'registered',
    PICKED_UP: 'picked_up',
    RECEIVED: 'received',
    SORTED: 'sorted',
    SHIPPED: 'shipped',
    DELIVERED: 'delivered'
  },
  
  STATUS_LABELS: {
    registered: 'Registriert',
    picked_up: 'Abgeholt',
    received: 'Angekommen',
    sorted: 'Sortiert',
    shipped: 'Unterwegs',
    delivered: 'Angekommen'
  },
  
  // Regex Patterns
  PATTERNS: {
    EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    PHONE: /^[\d\s\-\+\(\)]+$/,
    ZIP_CODE: /^\d{4,10}$/,
    REFERENCE_NUMBER: /^KSB-\d{4}-\d{4}$/
  },

  QUANTITY_OPTIONS: [
    { value: 'small',  icon: '📦',       label: 'Klein (1–2 Taschen/Kartons)', desc: 'bis 20 kg'   },
    { value: 'medium', icon: '📦📦',     label: 'Mittel (3–5 Taschen/Kartons)', desc: '20–50 kg'  },
    { value: 'large',  icon: '📦📦📦',   label: 'Groß (6+ Taschen/Kartons)',   desc: 'über 50 kg' }
  ],

  // Crisis areas — single source of truth for all crisis-related data
  CRISIS_AREAS: [
    {
      value: 'ukraine',
      code: 'ua',
      label: 'Ukraine',
      flag: '🇺🇦',
      flagAsset: '/assets/flag-ua.svg',
      description: 'Millionen Menschen benötigen warme Winterkleidung, Schuhe und Unterwäsche. Besonders in den Frontgebieten besteht großer Bedarf.',
      donated: 1580
    },
    {
      value: 'syria',
      code: 'sy',
      label: 'Syrien',
      flag: '🇸🇾',
      flagAsset: '/assets/flag-sy.svg',
      description: 'Besonders Kinderkleidung und Babysachen werden dringend benötigt. Nach dem Erdbeben ist die humanitäre Lage weiterhin kritisch.',
      donated: 1200
    },
    {
      value: 'yemen',
      code: 'ye',
      label: 'Jemen',
      flag: '🇾🇪',
      flagAsset: '/assets/flag-ye.svg',
      description: 'Eine der größten humanitären Krisen weltweit. Grundlegende Kleidung für Familien wird dringend benötigt.',
      donated: 730
    },
    {
      value: 'afghanistan',
      code: 'af',
      label: 'Afghanistan',
      flag: '🇦🇫',
      flagAsset: '/assets/flag-af.svg',
      description: 'Großer Bedarf an warmer Kleidung für Familien in abgelegenen Regionen. Besonders Frauen und Kinder benötigen Schutz vor der Kälte.',
      donated: 980
    },
    {
      value: 'somalia',
      code: 'so',
      label: 'Somalia',
      flag: '🇸🇴',
      flagAsset: '/assets/flag-so.svg',
      description: 'Nach Jahren der Dürre benötigen Familien grundlegende Kleidung und Schuhe. Kinder sind besonders auf schützende Kleidung angewiesen.',
      donated: 450
    },
    {
      value: 'haiti',
      code: 'ht',
      label: 'Haiti',
      flag: '🇭🇹',
      flagAsset: '/assets/flag-ht.svg',
      description: 'Nach Naturkatastrophen brauchen Menschen Kleidung für einen Neuanfang. Viele Familien haben nur das Nötigste.',
      donated: 320
    }
  ]
};

export default CONFIG;
