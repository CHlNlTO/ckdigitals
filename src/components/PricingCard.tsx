import Link from "next/link";

type Props = {
  category: string;
  pkg: {
    name: string;
    price: number;
    features: string[];
    featured: boolean;
  };
};

export default function PricingCard({ category, pkg }: Props) {
  return (
    <div
      className={`border rounded-lg p-4 shadow-md hover:shadow-lg transition ${
        pkg.featured ? "bg-blue-100 border-blue-500" : "bg-white"
      }`}
    >
      <h3 className="text-lg font-bold text-black mb-2">{pkg.name}</h3>
      <p className="text-sm text-gray-600">Starting at PHP {pkg.price}</p>
      <ul className="mt-4 space-y-2">
        {pkg.features.slice(0, 3).map((feature, idx) => (
          <li key={idx} className="text-sm text-gray-700">
            • {feature}
          </li>
        ))}
      </ul>
      <Link
        href={`/pricing/${category
          .toLowerCase()
          .replace(/\s+/g, "-")}/${pkg.name
          .toLowerCase()
          .replace(/\s+/g, "-")}`}
      >
        <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          View Details
        </button>
      </Link>
    </div>
  );
}
