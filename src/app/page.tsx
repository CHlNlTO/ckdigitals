import HeroCardSlideShow from "@/components/component/hero-card-slideshow";
import Hero from "@/components/ui/hero";

export default function Home() {
  return (
    <section className="flex flex-col justify-center items-center overflow-x-hidden">
      <Hero />
      <div className="flex flex-row justify-center items-center">
        <HeroCardSlideShow />
      </div>
    </section>
  );
}
