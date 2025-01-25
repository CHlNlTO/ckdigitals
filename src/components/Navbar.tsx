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
          title: "Applications",
          href: "/web-applications",
        },
        {
          title: "Systems",
          href: "/web-systems",
        },
      ],
    },
    {
      title: "Products",
      description: "Managing a small business today is already tough.",
      items: [
        {
          title: "Web Builder",
          href: "/web-builder",
        },
        {
          title: "Blog Builder",
          href: "/blog-builder",
        },
        {
          title: "Content Management",
          href: "/cms",
        },
        {
          title: "Shopify Store",
          href: "/shopify-store",
        },
      ],
    },
    {
      title: "Projects",
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
    <header className="w-full z-40 fixed top-0 left-0 bg-white dark:bg-[#121212] shadow-md dark:shadow-lg">
      <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">
        <div className="flex lg:justify-center">
          <p className="font-semibold">Algotrimo</p>
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
                      <NavigationMenuTrigger className="font-medium text-sm bg-transparent">
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
                            <Button size="sm" className="mt-10">
                              Book a call today
                            </Button>
                          </div>
                          <div className="flex flex-col text-sm h-full justify-end">
                            {item.items?.map((subItem) => (
                              <NavigationMenuLink
                                href={subItem.href}
                                key={subItem.title}
                                className="flex flex-row justify-between items-center hover:bg-muted py-2 px-4 rounded"
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

// "use client";

// import PrimaryLogo from "@/components/ui/logo";
// import Link from "next/link";
// import ThemeSwitch from "./ui/theme-switcher";
// import { motion } from "framer-motion";

// export default function Navbar() {
//   return (
//     <motion.nav
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, delay: 0.2 }}
//       className="fixed left-0 top-0 w-full z-[1000] bg-white dark:bg-[#121212] shadow-md dark:shadow-lg"
//     >
//       <div className="fixed left-[50%] top-4 md:top-8 flex w-fit -translate-x-[50%] items-center gap-6 rounded-lg bg-white/80 dark:bg-[#121212]/80 p-2 pl-4 text-sm text-black dark:text-neutral-50/60 z-50 shadow-[inset_0_-8px_10px_#8fdfff1f] backdrop-blur-sm transition-shadow duration-500 ease-out [--bg-size:300%] hover:shadow-[inset_0_-5px_10px_#8fdfff3f]">
//         <Link
//           href="/"
//           className="block overflow-hidden text-black hover:text-white hover:stroke-black dark:text-white dark:hover:text-black dark:hover:stroke-white  transition-all duration-300 py-1.5"
//         >
//           <PrimaryLogo />
//         </Link>
//         <Link
//           href="/projects"
//           className="block overflow-hidden text-zinc-500 hover:text-black dark:text-neutral-50/60 dark:hover:text-white transition-all duration-300"
//         >
//           <div className="h-[20px]">
//             <span className="flex h-[20px] items-center">Projects</span>
//             <span className="flex h-[20px] items-center text-neutral-50/60 ">
//               Projects
//             </span>
//           </div>
//         </Link>
//         <Link
//           href="/pricing"
//           className="block overflow-hidden text-zinc-500 hover:text-black dark:text-neutral-50/60 dark:hover:text-white transition-all duration-300"
//         >
//           <div className="h-[20px]">
//             <span className="flex h-[20px] items-center">Pricing</span>
//             <span className="flex h-[20px] items-center text-neutral-50/60 ">
//               Pricing
//             </span>
//           </div>
//         </Link>
//         <Link
//           href="/contact"
//           className="block overflow-hidden text-zinc-500 hover:text-black dark:text-neutral-50/60 dark:hover:text-white transition-all duration-300"
//         >
//           <div className="h-[20px]">
//             <span className="flex h-[20px] items-center">Contact</span>
//             <span className="flex h-[20px] items-center text-neutral-50/60 ">
//               Contact
//             </span>
//           </div>
//         </Link>
//         {/* <Link
//           href="#contact"
//           className='
//           relative z-0 flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-lg border-[1px]
//           dark:border-neutral-700 px-4 py-1.5 font-medium
//          text-black dark:text-neutral-300 transition-all duration-300 bg-white dark:bg-[#121212]

//           before:absolute before:inset-0
//           before:-z-10 before:translate-y-[200%]
//           before:scale-[2.5]
//           before:rounded-[100%] before:bg-black dark:before:bg-neutral-50
//           before:transition-transform before:duration-1000
//           before:content-[""]

//           hover:scale-105hover:border-black dark:hover:border-neutral-50 hover:text-white dark:hover:text-neutral-900
//           hover:before:translate-y-[0%]
//           active:scale-100'
//         >
//           Call us
//         </Link> */}
//         <ThemeSwitch />
//         <div className="-z-40 absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 bg-[length:var(--bg-size)_100%] p-[1px] ![mask-composite:subtract] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]"></div>
//         <div className="-z-40 absolute inset-0 block size-full animate-gradient bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 bg-[length:var(--bg-size)_100%] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] p-px ![mask-composite:subtract]"></div>
//       </div>
//     </motion.nav>
//   );
// }
