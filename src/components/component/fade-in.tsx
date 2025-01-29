import clsx from "clsx";
import React, { useEffect, useState } from "react";

interface FadeInProps {
  children: React.ReactNode;
  duration: number;
  className?: string;
}

export default function FadeIn({
  children,
  duration = 0,
  className,
}: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, duration);
        }
      },
      {
        threshold: 0.2,
      }
    );

    const element = elementRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [duration]);
  return (
    <div
      ref={elementRef}
      className={clsx(
        "transition-all duration-700 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        className
      )}
    >
      {children}
    </div>
  );
}
