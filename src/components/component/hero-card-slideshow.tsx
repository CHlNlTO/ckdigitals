import townplace from "@/assets/townplace.png";
import snapfolia from "@/assets/snapfolia.png";
import synergreens from "@/assets/synergreens.png";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const items = [
  {
    title: "Townplace",
    description: "A steel and aluminum company",
    image: townplace,
    link: "https://townplace-steel-and-aluminum.vercel.app/",
    light: "text-[#9C330C]",
    dark: "dark:text-orange-400",
  },
  {
    title: "Snapfolia",
    description: "A leaf identification app",
    image: snapfolia,
    link: "https://leaflet-web-app.vercel.app/",
    light: "text-[#0A7A0A]",
    dark: "dark:text-green-400",
  },
  {
    title: "Synergreens",
    description: "A health and wellness company",
    image: synergreens,
    link: "https://synergreens-deo-abutal.vercel.app/",
    light: "text-[#0A7A0A]",
    dark: "dark:text-green-400",
  },
];

export default function HeroCardSlideShow() {
  return (
    <section className="flex flex-row gap-4 justify-center items-center w-full">
      <div className="h-[30rem] rounded-md flex flex-col antialiased bg-transparent dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden max-w-full">
        <InfiniteMovingCards items={items} direction="left" speed="normal" />
      </div>
    </section>
  );
}
