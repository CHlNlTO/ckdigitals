import HeroCard from "@/components/component/hero-card";
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
  },
  {
    title: "Snapfolia",
    description: "A leaf identification app",
    image: snapfolia,
    link: "https://leaflet-web-app.vercel.app/",
  },
  {
    title: "Synergreens",
    description: "A health and wellness company",
    image: synergreens,
    link: "https://synergreens-deo-abutal.vercel.app/",
  },
];

export default function HeroCardSlideShow() {
  return (
    <section className="flex flex-row gap-4 justify-center items-center">
      {/* <HeroCard items={items} /> */}
      <div className="h-[50rem] rounded-md flex flex-col antialiased bg-white dark:bg-[#121212] dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards items={items} direction="left" speed="normal" />
      </div>
    </section>
  );
}
