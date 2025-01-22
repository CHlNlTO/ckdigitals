import { ContactForm } from "@/components/component/contact-form";
import CTASection from "@/components/component/cta-section";
import HeroCardSlideShow from "@/components/component/hero-card-slideshow";
import { FAQs } from "@/components/FAQ";
import { Testimonials } from "@/components/Testimonials";
import Hero from "@/components/ui/hero";

export default function Home() {
  return (
    <section className="flex flex-col justify-center items-center overflow-x-hidden mb-24 relative">
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
        id="tetimonials"
        className="flex flex-row justify-center items-center w-full mb-48"
      >
        <Testimonials />
      </section>
      <section
        id="faqs"
        className="flex flex-row justify-center items-center w-full mb-36"
      >
        <FAQs />
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
