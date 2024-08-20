import WordRotate from "../magicui/word-rotate";
import RightArrow from "./right-arrow";

export default function Hero() {
  return (
    <section id="hero">
      <div className="relative h-full overflow-hidden pt-20 md:pt-14 z-40">
        <div className="z-10 flex flex-col">
          <div className="mt-10 grid grid-cols-1 md:mt-20">
            <div className="flex flex-col items-center gap-6 px-7 pb-8 text-center md:items-center md:px-10">
              <a href="/docs/components/flickering-grid">
                <div className="group relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-2xl bg-white/40 px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#8fdfff1f] backdrop-blur-sm transition-shadow duration-500 ease-out [--bg-size:300%] hover:shadow-[inset_0_-5px_10px_#8fdfff3f] dark:bg-black/40">
                  <div className="absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:var(--bg-size)_100%] p-[1px] ![mask-composite:subtract] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]"></div>
                  <div className="absolute inset-0 block size-full animate-gradient bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:var(--bg-size)_100%] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] p-px ![mask-composite:subtract]"></div>
                  🎉
                  <div
                    data-orientation="vertical"
                    role="none"
                    className="shrink-0 bg-border w-px mx-2 h-4"
                  ></div>
                  <span className="animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent inline">
                    Don&apos;t miss our 20% sale, Grab now!
                  </span>
                </div>
              </a>
              <div className="relative flex flex-col gap-4 md:items-center lg:flex-row">
                <h1 className="text-black dark:text-white relative mx-0 max-w-[43.5rem] pt-5 md:mx-auto md:px-4 md:py-2 text-left tracking-tighter text-balance md:text-center font-semibold md:text-7xl lg:text-7xl sm:text-7xl text-5xl">
                  Make your business known by
                  <WordRotate
                    className="text-black dark:text-white relative text-left tracking-tighter text-balance md:text-center font-semibold md:text-7xl lg:text-7xl sm:text-7xl text-5xl"
                    words={[
                      "everyone",
                      "clients",
                      "customers",
                      "people",
                      "the world",
                    ]}
                  />
                </h1>
              </div>
              <p className="max-w-xl text-balance text-left text-base tracking-tight text-black dark:font-medium dark:text-white md:text-center md:text-lg">
                We create seamless websites that make your business visible to
                more <b>clients</b>, driving <b>growth</b> and <b>expanding</b>{" "}
                your reach <b>effectively</b>.
                {/* {" "}
                <b>React</b>, <b>Typescript</b>, <b>Tailwind CSS</b>, and{" "}
                <b>Framer Motion</b>.<br />
                Perfect companion for <b>shadcn/ui</b>. */}
              </p>
              <div className="mx-0 flex w-full max-w-full flex-col gap-4 py-1 sm:max-w-lg sm:flex-row md:mx-auto">
                <div className="flex w-full flex-col gap-2 sm:flex-row sm:gap-4">
                  <a
                    className="inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white shadow hover:bg-black/90 h-10 px-8 whitespace-pre md:flex group relative w-full gap-1 rounded-xl text-sm font-semibold tracking-tighter ring-offset-inherit transition-all duration-150 ease-in-out hover:ring-2 dark:bg-white dark:text-black hover:ring-black hover:ring-offset-2 hover:ring-offset-current dark:hover:ring-neutral-50"
                    href="/components"
                  >
                    Choose your website
                    <RightArrow />
                  </a>
                  <a
                    className="inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-10 px-8 whitespace-pre md:flex group relative w-full gap-1 overflow-hidden rounded-xl text-sm font-semibold tracking-tighter transition-all duration-150 ease-in-out hover:ring-2 hover:ring-neutral-300 hover:ring-offset-2 hover:ring-offset-inherit dark:hover:ring-black dark:hover:ring-offset-black"
                    href="/docs"
                  >
                    Or request a website design
                    <RightArrow />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-full -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] w-full"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-full -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] w-full"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
}
