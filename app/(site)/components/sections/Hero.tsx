import { FadeIn } from "../animate/FadeIn";
import Button from "../Button";

type HeroProps = { title: string; body: string; ctas: any; _key: string };

export default function Hero({
  _key,
  title = "Welcome to our website",
  body = "New text will appear here as you add it",
  ctas,
}: HeroProps) {
  return (
    <FadeIn>
      <div id={_key} className="bg-white">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-20 transform-gpu overflow-hidden blur-3xl sm:-top-80 pointer-events-none"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-15rem)] aspect-[1155/678] w-[40rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-bl from-[#1e3a8a] via-[#3b82f6] to-[#fbbf24] opacity-50 sm:left-[calc(50%-35rem)] sm:w-[80rem]"
              style={{
                clipPath:
                  "polygon(80% 45%, 100% 60%, 90% 20%, 80% 5%, 70% 15%, 60% 35%, 50% 65%, 45% 70%, 40% 55%, 35% 40%, 25% 75%, 5% 65%, 10% 100%, 25% 85%, 80% 100%, 80% 45%)",
              }}
            />
          </div>
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                {title}
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {body ? body : ""}
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                {ctas?.map((cta, key) => (
                  <Button
                    className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    {...cta}
                    key={key}
                  />
                ))}
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-20 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)] pointer-events-none"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
