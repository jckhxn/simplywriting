export type NavigationPayload = {
  brandName?: string;
  logo?: {
    asset: {
      url: string;
    };
    alt?: string;
  };
  mainLinks?: LinkPayload[];
  ctaButtons?: CtaPayload[];
  showBrandName?: boolean;
  stickyNavigation?: boolean;
  transparentOnTop?: boolean;
};

export type FooterPayload = {
  companyDescription?: string;
  quickLinks?: LinkPayload[];
  serviceLinks?: LinkPayload[];
  legalLinks?: LinkPayload[];
  showContactInfo?: boolean;
  showSocialMedia?: boolean;
  copyrightText?: string;
  footerColumns?: 'three-columns' | 'four-columns' | 'centered';
};

export type LinkPayload = {
  title: string;
  url: string;
  _key?: string;
};

export type CtaPayload = {
  title: string;
  url: string;
  variant?: 'primary' | 'secondary' | 'outline';
  _key?: string;
};

export type SitePayload = {
  _id: string;
  _type: "site";
  title?: string;
  description?: string;
  url?: string;
  companyName?: string;
  tagline?: string;
  email?: string;
  phone?: string;
  address?: {
    street?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    country?: string;
  };
  socialMedia?: {
    twitter?: string;
    linkedin?: string;
    facebook?: string;
    instagram?: string;
    youtube?: string;
    github?: string;
  };
  ogimage?: string;
  navigation?: NavigationPayload;
  footer?: FooterPayload;
};

export type PagePayload = {
  _id: string;
  _type: string;
  pathname: string;
  title?: string;
  sectionsBody: any[];
  globals?: SitePayload;
};
