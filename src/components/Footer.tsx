import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Moon } from "lucide-react";
import ThemeSwitch from "./ui/theme-switcher";

const footerConfig = {
  companyInfo: {
    name: "Algotrimo",
    address: {
      line1: "Block 7 Lot 15 Tamarind Village",
      line2: "San Roque, Santo Tomas, Batangas",
    },
    email: "clark.wayne023@gmail.com",
    phone: "+63 917 721 2114",
  },
  columns: {
    company: {
      title: "Company",
      links: [
        { name: "Projects", href: "/projects" },
        { name: "Pricing", href: "/pricing" },
        { name: "Contact", href: "/contact" },
      ],
    },
    products: {
      title: "Our Products",
      links: [
        {
          name: "Business Profile Websites",
          href: "/pricing/business-profile-websites",
        },
        {
          name: "Business Internal Websites",
          href: "/pricing/business-internal-systems",
        },
        { name: "e-Commerce Websites", href: "/pricing/e-commerce-websites" },
      ],
    },
  },
  socials: {
    title: "Socials",
    links: [
      {
        name: "Facebook",
        icon: Facebook,
        href: "https://www.facebook.com/itswaynetoomuch",
      },
      {
        name: "Instagram",
        icon: Instagram,
        href: "https://www.instagram.com/itswaynetoomuch",
      },
      {
        name: "LinkedIn",
        icon: Linkedin,
        href: "https://www.linkedin.com/in/clark-wayne-abutal-1005001aa",
      },
    ],
  },
  legal: {
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms & Conditions", href: "/terms" },
    ],
  },
};

const FooterColumn = ({
  title,
  links,
}: {
  title: string;
  links: {
    name: string;
    icon?: React.RefAttributes<SVGSVGElement>;
    href: string;
  }[];
}) => (
  <div>
    <h3 className="text-lg font-semibold text-blue-500 mb-6">{title}</h3>
    <ul className="space-y-4">
      {links.map((link) => (
        <li key={link.name}>
          <Link
            href={link.href}
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const { companyInfo, columns, socials, legal } = footerConfig;

  return (
    <footer className="bg-white dark:bg-[#121212] border-t-[1px] border-zinc-800 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 - Company Info */}
          <div className="space-y-6">
            <Link
              href="/"
              className="text-2xl font-bold text-gray-900 dark:text-white"
            >
              {companyInfo.name}
            </Link>
            <div className="space-y-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {companyInfo.address.line1}
                <br />
                {companyInfo.address.line2}
              </p>
              <a
                href={`mailto:${companyInfo.email}`}
                className="block text-sm text-blue-500 hover:text-blue-600"
              >
                {companyInfo.email}
              </a>
              <a
                href={`tel:${companyInfo.phone}`}
                className="block text-sm text-blue-500 hover:text-blue-600"
              >
                {companyInfo.phone}
              </a>
            </div>
          </div>

          {/* Column 2 - Company */}
          <FooterColumn {...columns.company} />

          {/* Column 3 - Products */}
          <FooterColumn {...columns.products} />

          {/* Column 4 - Socials */}
          <div>
            <h3 className="text-lg font-semibold text-blue-500 mb-6">
              {socials.title}
            </h3>
            <div className="flex space-x-4">
              {socials.links.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">{social.name}</span>
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
              <button
                className="text-gray-400 hover:text-gray-500"
                aria-label="Toggle theme"
              >
                <div className="ml-2">
                  <ThemeSwitch />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} {companyInfo.name} / All Rights
              Reserved
            </p>
            <div className="flex space-x-6">
              {legal.links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
