import React from "react";
import { Container } from "@/app/(site)/components/Container";
import { FadeIn } from "@/app/(site)/components/animate/FadeIn";
import { urlForImage } from "@/lib/image";
import Button from "../Button";

type HeaderProps = {
  header: string;
  subline: string;
  ctas: { label: string; url: string }[];
  image: string;
  animate: boolean;
};
const AnimatedHero = ({
  header,
  subline,
  ctas,
  image,
  animate,
}: HeaderProps) => {
  return animate ? (
    <FadeIn className="max-w-3xl">
      <Container className="  mt-24 sm:mt-32 md:mt-56">
        <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
          {header}
        </h1>
        <p className="mt-6 text-xl text-neutral-600">{subline}</p>

        {ctas?.map((cta, key) => (
          <Button
            className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            {...cta}
            key={key}
          />
        ))}
      </Container>
    </FadeIn>
  ) : (
    <div className="max-w-3xl">
      <Container className=" mt-24 sm:mt-32 md:mt-56">
        <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
          {header}
        </h1>
        <p className="mt-6 text-xl text-neutral-600">{subline}</p>
        <div className="bg-[url('/placeholder.svg)] bg-red-400"></div>
        {ctas?.map((cta, key) => (
          <Button
            className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            {...cta}
            key={key}
          />
        ))}
      </Container>
    </div>
  );
};

export default AnimatedHero;
