import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
type SocialProofProps = {
  name: string;
  position: string;
  testimonial: string;
  image: string;
};
export default function SocialProof({
  name,
  position,
  testimonial,
  image,
}: SocialProofProps) {
  console.log(name, position, testimonial, image);
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="max-w-xxl mx-auto">
        <div className="mb-12">
          <h2 className="text-sm uppercase tracking-wide text-indigo-600 mb-2">
            What Our Customers Say
          </h2>
          <div className="w-12 h-0.5 bg-indigo-300 mb-8"></div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-indigo-900">
              Testimonials
            </h1>
            <p className="text-indigo-700">
              Hear what our satisfied customers have to say about our services.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Testimonial Card 1 */}
          <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div
              className="w-16 h-16 flex items-center justify-center bg-indigo-100 rounded-full"
              aria-hidden="true"
            >
              <Avatar className="w-16 h-16 border-2 border-indigo-200">
                <AvatarImage
                  src="/placeholder.svg?height=64&width=64"
                  alt="Sarah Johnson"
                />
                <AvatarFallback>SJ</AvatarFallback>
              </Avatar>
            </div>
            <h3 className="text-xl font-semibold text-indigo-900 text-center">
              Sarah Johnson
            </h3>
            <p className="text-sm text-indigo-600 text-center">CEO, Acme Inc</p>
            <blockquote className="text-indigo-700 text-center">
              "The customer service I received was exceptional. The support team
              went above and beyond to address my concerns."
            </blockquote>
          </div>

          {/* Testimonial Card 2 */}
          <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div
              className="w-16 h-16 flex items-center justify-center bg-indigo-100 rounded-full"
              aria-hidden="true"
            >
              <Avatar className="w-16 h-16 border-2 border-indigo-200">
                <AvatarImage
                  src="/placeholder.svg?height=64&width=64"
                  alt="Alex Smith"
                />
                <AvatarFallback>AS</AvatarFallback>
              </Avatar>
            </div>
            <h3 className="text-xl font-semibold text-indigo-900 text-center">
              Alex Smith
            </h3>
            <p className="text-sm text-indigo-600 text-center">CTO, Acme Inc</p>
            <blockquote className="text-indigo-700 text-center">
              "The platform has been a game-changer for our business. The
              features are top-notch and the team is incredibly responsive."
            </blockquote>
          </div>

          {/* Testimonial Card 3 */}
          <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div
              className="w-16 h-16 flex items-center justify-center bg-indigo-100 rounded-full"
              aria-hidden="true"
            >
              <Avatar className="w-16 h-16 border-2 border-indigo-200">
                <AvatarImage
                  src="/placeholder.svg?height=64&width=64"
                  alt="Emily Parker"
                />
                <AvatarFallback>EP</AvatarFallback>
              </Avatar>
            </div>
            <h3 className="text-xl font-semibold text-indigo-900 text-center">
              Emily Parker
            </h3>
            <p className="text-sm text-indigo-600 text-center">
              Head of Design, Acme Inc
            </p>
            <blockquote className="text-indigo-700 text-center">
              "I've been using the product for over a year now, and it has
              consistently exceeded my expectations. Highly recommended!"
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
