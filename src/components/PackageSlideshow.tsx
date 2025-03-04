"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { User } from "lucide-react";

const testimonials = [
  {
    id: 1,
    title: "Game-changing platform",
    content:
      "The automation tools have saved us countless hours in development time.",
    author: "Sarah Chen",
    role: "Lead Developer",
  },
  {
    id: 2,
    title: "Exceptional Service",
    content:
      "Integration was seamless, and the support team was incredibly helpful.",
    author: "Mike Rodriguez",
    role: "CTO",
  },
  {
    id: 3,
    title: "Robust Solution",
    content: "Their API handling and error management systems are top-notch.",
    author: "Emma Thompson",
    role: "Senior Engineer",
  },
];

export default function PackageSlideshow() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 4000);
  }, [api, current]);

  return (
    <div className="w-full py-10">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
            Trusted by thousands of businesses worldwide
          </h2>
          <Carousel setApi={setApi} className="w-full pb-10">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem className="lg:basis-1/2" key={testimonial.id}>
                  <div className="bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg h-full lg:col-span-2 p-6 aspect-video flex justify-between flex-col">
                    <User className="w-10 h-10 stroke-5 stroke-blue-500 dark:stroke-blue-600" />
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col">
                        <h3 className="text-xl tracking-tight">
                          {testimonial.title}
                        </h3>
                        <p className="text-neutral-600 dark:text-neutral-400 max-w-xs text-base">
                          {testimonial.content}
                        </p>
                      </div>
                      <p className="flex flex-row gap-2 text-sm items-center">
                        <span className="text-neutral-600 dark:text-neutral-400">
                          By
                        </span>
                        <span>{testimonial.author}</span>
                        <span className="text-neutral-500">
                          • {testimonial.role}
                        </span>
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
