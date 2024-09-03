import { ContactForm } from "@/components/component/contact-form";
import CTASection from "@/components/component/cta-section";
import HeroCardSlideShow from "@/components/component/hero-card-slideshow";
import Hero from "@/components/ui/hero";

export default function Home() {
  return (
    <section className="flex flex-col justify-center items-center overflow-x-hidden bg-white dark:bg-[#121212]">
      <Hero />
      <section
        id="projects"
        className="flex flex-row justify-center items-center transition-all duration-300"
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
    </section>
  );
}
