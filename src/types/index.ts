export interface CompanyConfig {
  name: string;
  tagline: string;
  legalName: string;
  contactName: string;
  phone: string;
  phoneRaw: string;
  whatsapp: string;
  whatsappLink: string;
  instagram: string;
  instagramUrl: string;
  customLogoUrl?: string;
  cityRegion: string;
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    imageUrl: string;
  };
  about: {
    title: string;
    subtitle: string;
    description: string;
    paragraphs: string[];
    stats: { value: string; label: string }[];
    imageUrl: string;
  };
  services: ServiceItem[];
  gallery: GalleryItem[];
  financing: {
    title: string;
    partner: string;
    maxCoverage: string;
    maxInstallments: string;
    description: string;
    disclaimer: string;
  };
  plants: {
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    disclaimer: string;
  };
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  benefits: string[];
  imageUrl: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'residencial' | 'comercial' | 'industrial' | 'usina';
  location: string;
  description: string;
  imageUrl: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface QuoteFormData {
  name: string;
  phone: string;
  city: string;
  propertyType: 'Residencial' | 'Comercial' | 'Industrial' | 'Rural / Usina';
  averageBill: string;
  message: string;
}
