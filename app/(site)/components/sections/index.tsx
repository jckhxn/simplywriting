import { FC } from "react";
import ScrollableCard from "./ScrollableCard";

import hero from "./hero/hero";
import services from "./services/services";
import TestimonialSection from "./testimonial/testimonial";
import AboutSection from "./about/about";
import AllPosts from "./blog/posts";
import { ContactForm } from "./contact/contact-form";
import WorkExamples from "./work/examples";
import SocialProof from "./testimonials/testimonials";
import Benefits from "./benefits/benefits";

type SectionProps = {
  _type: string;
  [key: string]: any;
};

export const sections: Record<string, FC<any>> = {
  "section.aboutme": AboutSection,
  "section.scrollablecard": ScrollableCard,
  "section.hero": hero,
  "section.services": services,
  "section.testimonial": TestimonialSection,
  "section.testimonials": SocialProof,
  "section.benefits": Benefits,
  "section.blog.allposts": AllPosts,
  "section.forms.contact": ContactForm,
  "section.workexamples": WorkExamples,
};

export function SectionRenderer({ section }: { section: SectionProps }) {
  const Section = sections[section._type];

  if (!Section) {
    return null;
  }

  return <Section {...section} />;
}
