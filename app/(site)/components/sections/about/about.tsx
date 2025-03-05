import ScrollReveal from "../../ScrollReveal";

interface AboutSectionProps {
  heading: string;
  subheading: string;
  description: string;
  awards: {};
  milestones: {};
  _type: string;
}
export default function AboutSection({
  _type,
  awards,
  milestones,
  heading = "Our Mission & Story",
  subheading = "I Will Help You Win Pitches with Words & Concept",
  description = "I am a freelance copywriter and content strategist with over 10 years of experience. I have worked with a wide range of clients, from small startups to large corporations. I specialize in creating compelling copy that drives results. Whether you need a website, blog post, or social media content, I can help you craft the perfect message for your audience.",
}: AboutSectionProps) {
  return (
    <ScrollReveal>
      <section id={_type} className="py-24 px-6 md:px-10 bg-secondary/30">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className="opacity-0 animate-fade-in-left"
              style={{ animationPlayState: "paused" }}
            >
              <div className="relative">
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
                    alt="Writer working on content"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 glass rounded-lg p-6 max-w-xs">
                  <p className="text-sm text-foreground/80">{subheading}</p>
                </div>
              </div>
            </div>

            <div
              className="opacity-0 animate-fade-in-right"
              style={{ animationPlayState: "paused" }}
            >
              <div className="space-y-6">
                <span className="tag">About Us</span>
                <h2 className="section-title">{heading}</h2>
                <div className="space-y-4 text-foreground/80">
                  {description}
                  <p>
                    At Simply Writing, we believe that clear, compelling
                    communication is the foundation of success. Founded in 2012,
                    our mission is to help individuals and businesses express
                    themselves with precision and impact.
                  </p>
                  <p>
                    Our team of experienced writers and editors combines
                    technical expertise with a deep understanding of various
                    industries to deliver content that resonates with your
                    target audience.
                  </p>
                  <p>
                    We don't just write—we collaborate with you to understand
                    your vision, goals, and voice. Every project is approached
                    with dedication, creativity, and a commitment to excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
