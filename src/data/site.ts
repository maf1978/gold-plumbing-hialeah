export const siteConfig = {
  businessName: 'Gold Plumbing Hialeah',
  tagline: 'Fast, reliable plumbing in Hialeah and surrounding Miami-Dade communities.',
  niche: 'plumbing',
  schemaType: 'Plumber' as const,
  phone: '(305) 488-6833',
  phoneRaw: '+13054886833',
  email: '[CLIENT TO PROVIDE]',
  ownerName: '[CLIENT TO PROVIDE]',
  siteUrl: 'https://goldplumbinghialeah.com',
  quoteEndpoint:
    import.meta.env.PUBLIC_QUOTE_ENDPOINT ?? 'QUOTE_ENDPOINT_PLACEHOLDER',

  address: {
    street: '[CLIENT TO PROVIDE]',
    city: 'Hialeah',
    state: 'FL',
    zip: '[CLIENT TO PROVIDE]',
  },

  geo: {
    lat: '25.8576',
    lng: '-80.2781',
  },

  colors: {
    deepBlue: '#10243F',
    accent: '#2E9BE0',
    gold: '#D4A017',
    background: '#FFFFFF',
    text: '#1A1A2E',
  },

  hours: 'Mo-Su 00:00-23:59',
  openingHours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '00:00', closes: '23:59' },
  ],

  licenses: [
    { type: 'FL Plumbing License', number: '[CLIENT TO PROVIDE]' },
  ],

  reviews: {
    rating: null as number | null,
    count: null as number | null,
  },

  social: {
    facebook: '',
    instagram: '',
    google: '',
  },

  trustBadges: [
    { en: '24/7 Service', es: 'Servicio 24/7' },
    { en: 'Upfront Pricing', es: 'Precios Claros' },
    { en: 'Licensed & Insured', es: 'Licenciados y Asegurados' },
  ],

  serviceArea: [
    { city: 'Hialeah', slug: 'hialeah-fl', zipCodes: ['33010', '33012', '33013', '33014', '33016'] },
    { city: 'Hialeah Gardens', slug: 'hialeah-gardens-fl', zipCodes: ['33016', '33018'] },
    { city: 'Miami Lakes', slug: 'miami-lakes-fl', zipCodes: ['33014', '33016'] },
    { city: 'Miami Gardens', slug: 'miami-gardens-fl', zipCodes: ['33054', '33055', '33056'] },
    { city: 'Doral', slug: 'doral-fl', zipCodes: ['33122', '33166', '33178'] },
  ],

  services: [
    {
      slug: 'drain-cleaning',
      titleEn: 'Drain Cleaning',
      titleEs: 'Limpieza de Drenajes',
      keyword: 'drain cleaning hialeah',
      icon: 'drain',
      order: 1,
    },
    {
      slug: 'water-heaters',
      titleEn: 'Water Heaters',
      titleEs: 'Calentadores',
      keyword: 'water heater repair hialeah',
      icon: 'heater',
      order: 2,
    },
    {
      slug: 'leak-repair',
      titleEn: 'Leak Repair',
      titleEs: 'Reparación de Fugas',
      keyword: 'slab leak repair hialeah',
      icon: 'leak',
      order: 3,
    },
    {
      slug: 'sewer-repair',
      titleEn: 'Sewer Repair',
      titleEs: 'Alcantarillado',
      keyword: 'sewer repair hialeah',
      icon: 'sewer',
      order: 4,
    },
    {
      slug: 'repiping',
      titleEn: 'Repiping',
      titleEs: 'Reemplazo de Tuberías',
      keyword: 'repiping hialeah fl',
      icon: 'repipe',
      order: 5,
    },
    {
      slug: 'fixtures',
      titleEn: 'Fixtures',
      titleEs: 'Accesorios',
      keyword: 'faucet repair hialeah',
      icon: 'fixtures',
      order: 6,
    },
    {
      slug: 'emergency-plumbing',
      titleEn: 'Emergency',
      titleEs: 'Emergencia',
      keyword: '24 hour plumber hialeah',
      icon: 'emergency',
      order: 7,
      featured: true,
    },
  ],

  processSteps: [
    {
      en: { title: 'Request Your Quote', description: 'Call or submit the form — tell us what is going on and where you are located.' },
      es: { title: 'Solicite Su Cotización', description: 'Llame o envíe el formulario — cuéntenos qué pasa y dónde se encuentra.' },
    },
    {
      en: { title: 'We Assess the Job', description: 'A licensed plumber reviews your issue and gives upfront pricing before work starts.' },
      es: { title: 'Evaluamos el Trabajo', description: 'Un plomero licenciado revisa su problema y le da un precio claro antes de empezar.' },
    },
    {
      en: { title: 'We Get to Work', description: 'Our crew arrives on time with the right tools and parts to fix it right the first time.' },
      es: { title: 'Nos Ponemos a Trabajar', description: 'Nuestro equipo llega a tiempo con las herramientas y piezas correctas para arreglarlo bien.' },
    },
    {
      en: { title: 'Enjoy Peace of Mind', description: 'We test everything, clean up, and stand behind our work so you can get back to normal.' },
      es: { title: 'Disfrute la Tranquilidad', description: 'Probamos todo, limpiamos y respaldamos nuestro trabajo para que vuelva a la normalidad.' },
    },
  ],

  differentiators: [
    {
      en: { title: 'Local & Reliable', description: 'Hialeah-based plumbers who know Miami-Dade homes, condos, and commercial buildings.' },
      es: { title: 'Locales y Confiables', description: 'Plomeros basados en Hialeah que conocen casas, condominios y edificios comerciales del condado.' },
    },
    {
      en: { title: 'Upfront Pricing', description: 'No surprise hourly bills. You know the cost before we turn a wrench.' },
      es: { title: 'Precios Claros', description: 'Sin facturas por hora sorpresa. Usted conoce el costo antes de que empecemos.' },
    },
    {
      en: { title: 'Fast Response', description: 'We call back within 1 business hour and dispatch for emergencies 24/7.' },
      es: { title: 'Respuesta Rápida', description: 'Le devolvemos la llamada en 1 hora hábil y atendemos emergencias 24/7.' },
    },
    {
      en: { title: 'Bilingual Service', description: 'English and Spanish — your household or business gets clear communication either way.' },
      es: { title: 'Servicio Bilingüe', description: 'Inglés y español — su hogar o negocio recibe comunicación clara en cualquier idioma.' },
    },
  ],
} as const;

export type Locale = 'en' | 'es';

export const ui = {
  en: {
    bookPlumber: 'Book a Plumber',
    bookNow: 'BOOK NOW',
    callNow: 'Call Now',
    getFreeQuote: 'Get Free Quote',
    learnMore: 'Learn More',
    howItWorks: 'How It Works',
    whyChooseUs: 'Why Choose Gold Plumbing Hialeah',
    ourServices: 'Our Services',
    serviceAreas: 'Service Areas',
    serving: 'Proudly serving',
    reviews: 'Reviews',
    about: 'About',
    contact: 'Contact',
    home: 'Home',
    services: 'Services',
    freeQuote: 'Free Quote',
    heroLine1: 'FAST, RELIABLE PLUMBING',
    heroLine2: 'SERVICES IN',
    heroSubEn: 'We fix it right the first time.',
    heroSubEs: 'Lo reparamos bien la primera vez.',
    heroCta: 'Book a Plumber / Reserve un Plomero',
    trustBar: 'Locally Owned · Free Quotes · Residential & Commercial · Se Habla Español',
    formSuccess: "Thanks! We'll call you within 1 business hour.",
    formTrust: 'No obligation. Free estimate. We respond fast.',
    formSubmit: 'Book a Plumber',
    painHeadline: 'Plumbing problems do not wait — and neither should you.',
    painBody: 'A slow drain turns into a backup. A small leak becomes ceiling damage. No hot water ruins your morning. Gold Plumbing Hialeah sends licensed plumbers who show up, explain the fix, and get it done right.',
    whatsIncluded: "What's Included",
    signsYouNeed: 'Signs You Need This Service',
    ourProcess: 'Our Process',
    faq: 'Frequently Asked Questions',
    readyToFix: 'Ready to fix your plumbing problem?',
    viewAllServices: 'View All Services',
    residential: 'Residential',
    commercial: 'Commercial',
    fullName: 'Full Name',
    phone: 'Phone Number',
    email: 'Email (optional)',
    serviceNeeded: 'Service Needed',
    propertyType: 'Property Type',
    addressZip: 'Service Address or Zip Code',
    message: 'Brief Description (optional)',
    selectService: 'Select a service',
  },
  es: {
    bookPlumber: 'Reserve un Plomero',
    bookNow: 'RESERVAR',
    callNow: 'Llame Ahora',
    getFreeQuote: 'Cotización Gratis',
    learnMore: 'Más Información',
    howItWorks: 'Cómo Funciona',
    whyChooseUs: 'Por Qué Elegir Gold Plumbing Hialeah',
    ourServices: 'Nuestros Servicios',
    serviceAreas: 'Áreas de Servicio',
    serving: 'Servimos con orgullo',
    reviews: 'Reseñas',
    about: 'Nosotros',
    contact: 'Contacto',
    home: 'Inicio',
    services: 'Servicios',
    freeQuote: 'Cotización Gratis',
    heroLine1: 'PLOMERÍA RÁPIDA Y CONFIABLE',
    heroLine2: 'EN',
    heroSubEn: 'We fix it right the first time.',
    heroSubEs: 'Lo reparamos bien la primera vez.',
    heroCta: 'Reserve un Plomero / Book a Plumber',
    trustBar: 'Propiedad Local · Cotizaciones Gratis · Residencial y Comercial · Se Habla Español',
    formSuccess: '¡Gracias! Le llamaremos dentro de 1 hora hábil.',
    formTrust: 'Sin obligación. Estimado gratis. Respondemos rápido.',
    formSubmit: 'Reserve un Plomero',
    painHeadline: 'Los problemas de plomería no esperan — y usted tampoco debería.',
    painBody: 'Un drenaje lento se convierte en un respaldo. Una fuga pequeña daña el techo. Sin agua caliente arruina su mañana. Gold Plumbing Hialeah envía plomeros licenciados que llegan, explican la solución y lo arreglan bien.',
    whatsIncluded: 'Qué Incluye',
    signsYouNeed: 'Señales de Que Necesita Este Servicio',
    ourProcess: 'Nuestro Proceso',
    faq: 'Preguntas Frecuentes',
    readyToFix: '¿Listo para resolver su problema de plomería?',
    viewAllServices: 'Ver Todos los Servicios',
    residential: 'Residencial',
    commercial: 'Comercial',
    fullName: 'Nombre Completo',
    phone: 'Teléfono',
    email: 'Correo (opcional)',
    serviceNeeded: 'Servicio Necesario',
    propertyType: 'Tipo de Propiedad',
    addressZip: 'Dirección o Código Postal',
    message: 'Descripción Breve (opcional)',
    selectService: 'Seleccione un servicio',
  },
} as const;

export function localePath(path: string, locale: Locale): string {
  if (locale === 'en') return path;
  if (path === '/') return '/es/';
  return `/es${path}`;
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === 'en' ? 'es' : 'en';
}
