export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  badge?: string;
  image: string;
  features: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  serviceType: string;
}

export interface PricingZone {
  zone: string;
  description: string;
  estimatedTime: string;
  features: string[];
}
