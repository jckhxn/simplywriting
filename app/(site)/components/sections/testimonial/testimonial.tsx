"use client";
import React from "react";
import { SanityImage } from "../../SanityImage";

type TestimonialProps = {
  image: any;
  isRight: boolean;
  name: string;
  position: string;
  testimonial: string;
  _key: string;
};

export default function TestimonialSection({
  _key,
  image,
  isRight,
  name = "John Doe",
  position = "CEO of Company",
  testimonial = "Molestie vivamus at sed massa at purus scelerisque egestas quis non augue hac massa rhoncus, nec nunc consequat cras diam tristique rhoncus et vitae.",
}: TestimonialProps) {
  return (
    <section
      id={_key}
      className="bg-gradient-to-br from-blue-50 to-purple-50 py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-xxl mx-auto">
        <div
          className={`flex flex-col-reverse lg:flex-row items-center justify-center ${
            isRight ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Text Section */}
          <div className="lg:w-1/2 lg:px-8 mb-8 lg:mb-0 flex flex-col items-center lg:items-start">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{name}</h2>
            <p className="text-xl text-gray-600 mb-6">{position}</p>
            <blockquote className="text-2xl font-medium text-gray-800 italic relative">
              <svg
                className="absolute top-0 left-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-gray-100 opacity-50"
                fill="currentColor"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              {testimonial}
            </blockquote>
          </div>

          {/* Image Section */}
          <div className={`w-full lg:w-auto flex justify-center lg:px-8`}>
            <div className="w-[400px] h-[600px] relative overflow-hidden rounded-lg shadow-2xl">
              <SanityImage
                data={image}
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                sizes="(max-width: 1024px) 100vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
