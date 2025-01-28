import ClientSlideShow from "@/components/ClientSlideshow";
import Comparison from "@/components/Comparison";
import { ContactForm } from "@/components/component/contact-form";
import CTASection from "@/components/component/cta-section";
import HeroCardSlideShow from "@/components/component/hero-card-slideshow";
import { FAQs } from "@/components/FAQ";
import ServiceGrid from "@/components/ServiceGrid";
import { Testimonials } from "@/components/Testimonials";
import Hero from "@/components/ui/hero";

export default function Home() {
  return (
    <section className="flex flex-col justify-center items-center overflow-x-hidden mb-24 relativ">
      <Hero />
      <section
        id="partners"
        className="flex flex-col justify-center items-center transition-all duration-300 w-full mb-8 md:mb-24"
      >
        <ClientSlideShow />
      </section>
      <section
        id="services"
        className="flex flex-col justify-center items-center transition-all duration-300 w-full mb-48"
      >
        <ServiceGrid />
      </section>
      <section
        id="projects"
        className="flex flex-col justify-center items-center transition-all duration-300 w-full mb-48"
      >
        <HeroCardSlideShow />
      </section>
      <section className="flex flex-row justify-center items-center w-full mb-52">
        <CTASection />
      </section>
      <section
        id="comparison"
        className="flex flex-row justify-center items-center w-full mb-48"
      >
        <Comparison />
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
