import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PrimaryButton } from "./component/PrimaryButton";
import { ArrowUpRight } from "lucide-react";

interface ClientCardProps {
  title?: string;
  description: string;
  logo?: string;
  image?: string;
  link?: string;
  package?: string;
}

export default function ClientCard({ items }: { items: ClientCardProps[] }) {
  return (
    <div className="grid grid-cols-1 gap-16 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3 w-full h-full place-items-center">
      {items.map((item, idx) => (
        <div
          className="w-64 h-full rounded-2xl bg-white dark:bg-black shadow-lg border border-neutral-300 dark:border-neutral-800/90 hover:scale-105 hover:shadow-2xl transition-transform duration-300 ease-in-out"
          key={idx}
        >
          <div className="h-32 relative">
            <div className="absolute inset-0 opacity-80">
              <Image
                src={item.image!}
                alt={item.title!}
                width={300}
                height={300}
                className="rounded-t-2xl"
              />
            </div>
          </div>
          <div className="relative px-4 pb-4 h-[calc(100%-8rem)] flex flex-col">
            {/* Profile Image */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
              <div className="w-14 h-14 rounded-full border-4 border-white overflow-hidden bg-white">
                <Image
                  src={item.logo!}
                  alt={item.title!}
                  width={300}
                  height={300}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex flex-col h-full gap-4">
              <div className="mt-20 text-center">
                <h2 className="text-lg tracking-tighter font-semibold text-gray-800 dark:text-white leading-5">
                  {item.title}
                </h2>
                <p className="text-gray-500 dark:text-gray-400 mt-1 tracking-tighter">
                  {item.package}
                </p>
              </div>
              <div className="mt-auto text-center">
                <Link href={item.link!} target="_blank">
                  <PrimaryButton>
                    Visit <ArrowUpRight className="w-4 h-4" />
                  </PrimaryButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
