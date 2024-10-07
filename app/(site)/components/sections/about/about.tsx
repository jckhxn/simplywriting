import { formatSanityDate } from "@/lib/utils";
import React from "react";

interface AboutSectionProps {
  heading: string;
  subheading: string;
  description: string;
  awards: {};
  milestones: {};
  _key: string;
}

export default function AboutSection({
  _key,
  awards,
  milestones,
  heading = "About Me",
  subheading = "I Will Help You Win Pitches with Words & Concept",
  description = "I am a freelance copywriter and content strategist with over 10 years of experience. I have worked with a wide range of clients, from small startups to large corporations. I specialize in creating compelling copy that drives results. Whether you need a website, blog post, or social media content, I can help you craft the perfect message for your audience.",
}: AboutSectionProps) {
  return (
    <section id={_key} className="py-12 lg:py-16 bg-gradient-to-br bg-blue-50">
      <div className="max-w-xxl mx-auto px-6 space-y-12">
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <h2 className="text-lg font-medium text-green-600">{heading}</h2>
            <div className="flex-grow h-px bg-green-600"></div>
          </div>

          <h1 className="text-3xl lg:text-4xl font-bold leading-tight text-center">
            {subheading}
          </h1>

          <div className="grid md:grid-cols-2 gap-8">
            <p className="text-lg text-gray-700 leading-relaxed md:col-span-2 text-center md:text-left">
              {description}
            </p>
          </div>
        </div>
        {(milestones || awards) && (
          <div>
            <hr className="border-gray-200 my-8" />

            <div className="grid md:grid-cols-2 gap-8">
              {/* Render Milestones if they exist */}
              {milestones && milestones.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Milestones</h2>
                  <ul className="space-y-2 text-left">
                    {milestones.map((milestone, index) => (
                      <li key={index}>
                        <span className="font-semibold">
                          {formatSanityDate(milestone.date, "MM-YYYY")}
                        </span>{" "}
                        - {milestone.description}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Render Awards if they exist */}
              {awards && awards.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Awards</h2>
                  <ul className="space-y-2 text-left">
                    {awards.map((award, index) => (
                      <li key={index}>
                        <span className="font-semibold">
                          {formatSanityDate(award.date, "MM-YYYY")}
                        </span>{" "}
                        - {award.description}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
