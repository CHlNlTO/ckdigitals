"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, MoveRight, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import ThemeSwitch from "./ui/theme-switcher";

export default function Navbar() {
  const navigationItems = [
    {
      title: "Home",
      href: "/",
      description: "",
    },
    {
      title: "Services",
      description: "Managing a small business today is already tough.",
      items: [
        {
          title: "Design",
          href: "/web-design",
        },
        {
          title: "Sites",
          href: "/web-sites",
        },
        {
          title: "Systems",
          href: "/web-systems",
        },
        {
          title: "eCommrece",
          href: "/web-ecommerce",
        },
      ],
    },
    // {
    //   title: "Products",
    //   description: "Managing a small business today is already tough.",
    //   items: [
    //     {
    //       title: "Web Builder",
    //       href: "/web-builder",
    //     },
    //     {
    //       title: "Blog Builder",
    //       href: "/blog-builder",
    //     },
    //     {
    //       title: "Content Management",
    //       href: "/cms",
    //     },
    //     {
    //       title: "Shopify Store",
    //       href: "/shopify-store",
    //     },
    //   ],
    // },
    {
      title: "Clients",
      href: "/projects",
      description: "",
    },
    {
      title: "Blog",
      href: "/blog",
      description: "",
    },
    {
      title: "Pricing",
      href: "/pricing",
      description: "",
    },
    {
      title: "Contact",
      href: "/contact",
      description: "",
    },
  ];

  const [isOpen, setOpen] = useState(false);
  return (
    <header className="w-full fixed top-0 left-0 bg-white dark:shadow-lg bg-white/80 dark:bg-[#121212]/50 text-black dark:text-neutral-50/60 z-50 shadow-[inset_0_-8px_10px_#8fdfff1f] backdrop-blur-sm transition-shadow duration-500 ease-out [--bg-size:300%] hover:shadow-[inset_0_-5px_10px_#8fdfff3f]">
      <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">
        <div className="flex lg:justify-center">
          <Link href="/">
            <h3 className="text-2xl font-bold text-black dark:text-white">
              Algotrimo
            </h3>
          </Link>
        </div>
        <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
          <NavigationMenu className="flex justify-start items-start">
            <NavigationMenuList className="flex justify-start gap-4 flex-row">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.href ? (
                    <>
                      <NavigationMenuLink href={item.href}>
                        <Button variant="ghost">{item.title}</Button>
                      </NavigationMenuLink>
                    </>
                  ) : (
                    <>
                      <NavigationMenuTrigger className="font-medium text-sm !bg-transparent hover:!bg-zinc-100 focus:!bg-zinc-100 dark:!bg-transparent dark:hover:!bg-zinc-800 dark:focus:!bg-zinc-800 data-[state=open]:!bg-zinc-100 dark:data-[state=open]:!bg-zinc-800 data-[active]:!bg-zinc-100">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="!w-[450px] p-4">
                        <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                          <div className="flex flex-col h-full justify-between">
                            <div className="flex flex-col">
                              <p className="text-base">{item.title}</p>
                              <p className="text-muted-foreground text-sm">
                                {item.description}
                              </p>
                            </div>
                            <Link href="/contact">
                              <Button size="sm" className="mt-10">
                                Book a call today
                              </Button>
                            </Link>
                          </div>
                          <div className="flex flex-col text-sm h-full justify-end">
                            {item.items?.map((subItem) => (
                              <NavigationMenuLink
                                href={subItem.href}
                                key={subItem.title}
                                className="flex flex-row justify-between items-center hover:bg-muted py-2 px-4"
                              >
                                <span>{subItem.title}</span>
                                <MoveRight className="w-4 h-4 text-muted-foreground" />
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex justify-end w-full gap-4">
          {/* <Button>Get started</Button> */}
          <ThemeSwitch />
        </div>
        <div className="flex w-12 shrink lg:hidden items-end justify-end">
          <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
          {isOpen && (
            <div className="absolute top-20 border-t flex flex-col w-full right-0 shadow-lg py-4 container gap-8 bg-white dark:bg-[#121212]">
              {navigationItems.map((item) => (
                <div key={item.title}>
                  <div className="flex flex-col gap-2">
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="flex justify-between items-center"
                      >
                        <span className="text-lg">{item.title}</span>
                        <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                      </Link>
                    ) : (
                      <p className="text-lg font-semibold">{item.title}</p>
                    )}
                    {item.items &&
                      item.items.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className="flex justify-between items-center text-sm"
                        >
                          <span className="text-neutral-400">
                            {subItem.title}
                          </span>
                          <MoveRight className="w-4 h-4 stroke-1" />
                        </Link>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
