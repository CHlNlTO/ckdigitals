import HeroCard from "@/components/component/hero-card";
import HeroCardSlideShow from "@/components/component/hero-card-slideshow";
import Hero from "@/components/ui/hero";
import HeroImage from "@/components/ui/hero-image";

export default function Home() {
  return (
    <section className="flex flex-col justify-center items-center">
      <Hero />
      <div className="flex flex-row justify-center items-center">
        <HeroCardSlideShow />
      </div>
    </section>
  );
}
