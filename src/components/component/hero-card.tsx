import townplace from "@/assets/townplace.png";
import Image from "next/image";
import Link from "next/link";
import ShineBorder from "../magicui/shine-border";

interface StaticImageData {
  src: string;
  height: number;
  width: number;
}

interface Item {
  title: string;
  description: string;
  image: StaticImageData;
  link: string;
}

interface HeroCardProps {
  items?: Item[];
}

export default function HeroCard({ items = [] }: HeroCardProps) {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center mx-4 md:mx-0 gap-4 overflow-hidden">
      {items.map((item) => (
        <ShineBorder
          color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
          className="group relative overflow-auto rounded-lg transition-all flex flex-col shrink-0 flex-grow focus:outline-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-draplin w-full sm:w-[480px] opacity-90 hover:opacity-100 hover:shadow-drap hover:border-draplin/40 dark:hover:border-draplin/40 hover:bg-gray-50/70 dark:hover:bg-black cursor-pointer"
        >
          <Link href={item.link} target="__blank">
            <div className="relative w-full object-cover object-center transition-opacity overflow-hidden flex flex-col items-center grow h-48 sm:h-full sm:max-h-[280px] p-0 bg-gradient-to-b from-sky-50/20 to-sky-50 dark:from-transparent dark:to-sky-900/20">
              <div className="w-full z-10 grow">
                <Image
                  alt="Screenshot of MUI's website"
                  width="2400"
                  height="1502"
                  decoding="async"
                  data-nimg="1"
                  className="sm:w-auto max-w-full w-full h-full object-left-top object-cover"
                  style={{ color: "transparent" }}
                  src={item.image}
                />
              </div>
              <span className="dot-bg"></span>
            </div>
            <div className="p-3.5 flex flex-col gap-3 bg-white dark:bg-[#121212]">
              <div>
                <div className="flex items-center gap-2">
                  <div className="h2-medium text-black dark:text-white">
                    {item.title}
                  </div>
                  <div className="px-1.5 py-1 w-fit rounded-full transition-all focus:outline-none leading-none bg-gray-50 text-gray-800 border border-gray-200 dark:bg-gray-900/30 dark:border-gray-700/50 dark:text-gray-300 text-[0.6875rem] tracking-[0.2px] font-semibold">
                    React
                  </div>
                </div>
                <p className="description text-black dark:text-white">
                  {item.description}
                </p>
              </div>
              <div className="group select-none rounded-full transition-all flex items-center justify-center text-[0.8125rem] tracking-[0.2px] leading-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-draplin text-[#9C330C] dark:text-orange-400 font-semibold w-fit p-0">
                View site
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-4 h-4 shrink-0 transition-all relative top-px ml-0.5 -mr-1.5 group-hover:translate-x-0.5"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  ></path>
                </svg>
              </div>
            </div>
          </Link>
        </ShineBorder>
      ))}
    </div>
  );
}
