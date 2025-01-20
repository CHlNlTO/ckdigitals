import { ContactForm } from "@/components/component/contact-form";
import CTASection from "@/components/component/cta-section";
import HeroCardSlideShow from "@/components/component/hero-card-slideshow";
import DotPattern from "@/components/ui/dot-pattern";
import Hero from "@/components/ui/hero";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <section className="flex flex-col justify-center items-center overflow-x-hidden bg-white dark:bg-[#121212] mb-24 relative">
      <Hero />
      <section
        id="projects"
        className="flex flex-col justify-center items-center transition-all duration-300 w-full"
      >
        <HeroCardSlideShow />
      </section>
      <section className="flex flex-row justify-center items-center w-full mb-52">
        <CTASection />
      </section>
      <section
        id="contact"
        className="flex flex-row justify-center items-center w-full"
      >
        <ContactForm />
      </section>
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(1200px_1200px_at_top,white,transparent)] absolute top-0 left-0 right-0 w-full h-full"
        )}
      />
    </section>
  );
}
