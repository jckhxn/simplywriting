/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Card } from "@/app/(site)/components/ui/Card";
import Image from "next/image";
const testimonials = [
  { id: 1, text: "Testimonial 1" },
  { id: 2, text: "Testimonial 2" },
  { id: 3, text: "Testimonial 3" },
  { id: 4, text: "Testimonial 1" },
  { id: 5, text: "Testimonial 2" },
  { id: 6, text: "Testimonial 3" },
  // Add more testimonials as needed
];

export default function TestimonialCarousel({ _key }) {
  const controlsArray = testimonials.map(() => useAnimation());
  const refsArray = testimonials.map(() => useRef(null));
  const [visibleCards, setVisibleCards] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = refsArray.findIndex(
            (ref) => ref.current === entry.target
          );
          if (entry.isIntersecting) {
            visibleCards.add(index);
          } else {
            visibleCards.delete(index);
          }
          setVisibleCards(new Set(visibleCards));
        });
      },
      {
        root: null,
        threshold: 0.5, // Adjust the threshold as needed
      }
    );

    refsArray.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      refsArray.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  useEffect(() => {
    visibleCards.forEach((index) => {
      controlsArray[index].start("visible");
    });
    controlsArray.forEach((controls, index) => {
      if (!visibleCards.has(index)) {
        controls.start("hidden");
      }
    });
  }, [visibleCards, controlsArray]);

  const variants = {
    visible: { opacity: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0.3, transition: { duration: 0.5 } }, // Adjusted opacity for the hidden state
  };

  return (
    <>
      <div id={_key} className="text-md">
        Smol placeholder text
      </div>
      <div className="text-3xl">Trusted by professionals</div>

      {/* Start Card Carousel */}
      <div className="flex  flex-row  snap-x snap-mandatory items-center justify-center  overflow-x-auto overscroll-contain  ">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            ref={refsArray[index]}
            className="w-full h-full"
          >
            <motion.div
              initial="hidden"
              animate={controlsArray[index]}
              variants={variants}
              className="w-full h-full"
            >
              <ScrollCard />
            </motion.div>
          </div>
        ))}
      </div>
      <div className="">
        Join professionsals who trust BarelyHR for hiring and onboarding new
        employees.
      </div>
      <div className="text-pink-500">Get started -&gt; </div>
    </>
  );
}

export const ScrollCard = ({ image, quote, title, name }) => {
  return (
    <Card className="bg-white rounded-lg overflow-hidden relative w-56 sm:w-64 md:w-72 lg:w-72 xl:w-72">
      <div className="relative">
        <img src="placeholder.avif" alt="Person" className="w-full" />
        {/* Bottom half gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-b from-transparent to-black opacity-90"></div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <p className="text-white text-sm italic">
            "BarelyHR made onboarding our new remote employees an absolute
            breeze."
          </p>
        </div>
      </div>
      <div className="bg-black p-4">
        <p className="text-white font-semibold">Jack Hoff</p>
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          Head of Marketing, TaxPad
        </p>
      </div>
    </Card>
  );
};
