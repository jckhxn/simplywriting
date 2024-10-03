import AnimatedHero from "./AnimatedHero";
import ScrollableCard from "./ScrollableCard";
// import Hero from "./Hero";
import hero from "./hero/hero";
import services from "./services/services";
import TestimonialSection from "./testimonial/testimonial";
import AboutSection from "./about/about";
import AllPosts from "./blog/posts";
import { contactForm } from "./contact/contact-form";
export const sections = {
  "section.aboutme": AboutSection,
  "section.animatedhero": AnimatedHero,
  "section.scrollablecard": ScrollableCard,
  "section.hero": hero,
  "section.services": services,
  "section.testimonialsection": TestimonialSection,
  "section.blog.allposts": AllPosts,
  "section.forms.contact": contactForm,
};

export function SectionRenderer(props: { section: any }) {
  // @ts-ignore

  const Section = sections[props.section._type];

  if (!Section) {
    return null;
  }

  return <Section {...props.section} />;
}
