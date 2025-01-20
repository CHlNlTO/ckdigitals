import Link from "next/link";

type Props = {
  links: { href: string; label: string }[];
  current: string;
};

export default function Breadcrumb({ links, current }: Props) {
  return (
    <nav className="text-sm text-gray-500 mb-6">
      {links.map((link, idx) => (
        <span key={idx}>
          <Link href={link.href} legacyBehavior>
            <a className="text-blue-500 hover:underline">{link.label}</a>
          </Link>
          {" > "}
        </span>
      ))}
      <span className="text-black font-semibold">{current}</span>
    </nav>
  );
}
