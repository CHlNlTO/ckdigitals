"use client";

import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { GripVertical } from "lucide-react";
import comparison1 from "@/assets/comparison1.png";
import comparison2 from "@/assets/comparison2.png";
import { PulsatingButton } from "./ui/pulsating-button";

export default function Comparison() {
  const [inset, setInset] = useState<number>(50);
  const [onMouseDown, setOnMouseDown] = useState<boolean>(false);

  const onMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!onMouseDown) return;

    const rect = e.currentTarget.getBoundingClientRect();
    let x = 0;

    if ("touches" in e && e.touches.length > 0) {
      x = e.touches[0].clientX - rect.left;
    } else if ("clientX" in e) {
      x = e.clientX - rect.left;
    }

    const percentage = (x / rect.width) * 100;
    setInset(percentage);
  };

  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4">
          <div>
            <Badge>Expertise</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              Make your digital tranformation successful
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              We help you become tech-enabled.
            </p>
          </div>
          <div className="pt-12 w-full">
            <div
              className="relative aspect-video w-full h-full overflow-hidden rounded-2xl select-none"
              onMouseMove={onMouseMove}
              onMouseUp={() => setOnMouseDown(false)}
              onTouchMove={onMouseMove}
              onTouchEnd={() => setOnMouseDown(false)}
            >
              <div
                className="h-full w-1 absolute z-20 top-0 -ml-1 select-none"
                style={{
                  left: inset + "%",
                }}
              >
                <PulsatingButton
                  className="bg-blue-500 dark:bg-blue-500 rounded hover:scale-110 transition-all w-5 h-24 select-none -translate-y-1/2 absolute top-1/2 -ml-2 z-30 cursor-ew-resize flex justify-center items-center"
                  onTouchStart={(e) => {
                    setOnMouseDown(true);
                    onMouseMove(e);
                  }}
                  onMouseDown={(e) => {
                    setOnMouseDown(true);
                    onMouseMove(e);
                  }}
                  onTouchEnd={() => setOnMouseDown(false)}
                  onMouseUp={() => setOnMouseDown(false)}
                >
                  <GripVertical className="h-4 w-4 select-none text-white" />
                </PulsatingButton>
              </div>
              <Image
                src={comparison1}
                alt="Algotrimo Feature Comparison 1"
                width={1920}
                height={1080}
                priority
                className="absolute left-0 top-0 z-10 w-full h-full object-contain rounded-2xl select-none border"
                style={{
                  clipPath: "inset(0 0 0 " + inset + "%)",
                }}
              />
              <Image
                src={comparison2}
                alt="Algotrimo Feature Comparison 2"
                width={1920}
                height={1080}
                priority
                className="absolute left-0 top-0 w-full h-full object-contain rounded-2xl select-none border"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
