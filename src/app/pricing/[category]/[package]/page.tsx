import { notFound } from "next/navigation";
import { services } from "@/app/data/services"; // Assuming your JSON data is in /data/services.ts
import ContactForm from "@/components/ContactForm";
import Link from "next/link";

export default function PackageDetails({
  params,
}: {
  params: { category: string; package: string };
}) {
  const { category, package: packageName } = params;

  // Find the category
  const selectedCategory = services.find(
    (service) =>
      service.category.toLowerCase().replace(/\s+/g, "-") === category
  );

  if (!selectedCategory) {
    return notFound();
  }

  // Find the package within the category
  const selectedPackage = selectedCategory.packages.find(
    (pkg) => pkg.name.toLowerCase().replace(/\s+/g, "-") === packageName
  );

  if (!selectedPackage) {
    return notFound();
  }

  const {
    name,
    price,
    originalPrice,
    features,
    additionalFeatures,
    excludedFeatures,
  } = selectedPackage;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-8">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-600">
        <Link href="/pricing" legacyBehavior>
          <a className="text-blue-500 hover:underline">Pricing</a>
        </Link>{" "}
        /{" "}
        <Link href={`/pricing/${category}`} legacyBehavior>
          <a className="text-blue-500 hover:underline">
            {selectedCategory.category}
          </a>
        </Link>{" "}
        / <span className="text-gray-800">{name}</span>
      </div>

      {/* Header */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-gray-900">{name}</h1>
        <p className="text-gray-700 mt-2">{selectedCategory.description}</p>
        <div className="mt-4">
          <span className="text-4xl font-bold text-blue-600">
            ₱{price.toLocaleString()}
          </span>
          {originalPrice && (
            <span className="text-sm line-through text-gray-500 ml-3">
              ₱{originalPrice.toLocaleString()}
            </span>
          )}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 rounded-lg shadow-sm p-6 space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          What’s Included
        </h2>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-700">
              <span className="inline-block w-4 h-4 bg-blue-500 rounded-full mr-3"></span>
              {feature}
            </li>
          ))}
          {additionalFeatures &&
            additionalFeatures.map((feature, index) => (
              <li
                key={`add-${index}`}
                className="flex items-center text-gray-700"
              >
                <span className="inline-block w-4 h-4 bg-green-500 rounded-full mr-3"></span>
                {feature}
              </li>
            ))}
        </ul>
      </div>

      {/* Exclusions Section */}
      {excludedFeatures && (
        <div className="bg-white text font bg-white rounded-xl **shadow==pm clean lines remove container list ">
          <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              What’s Not Included
            </h2>
            <ul className="space-y-3">
              {excludedFeatures.map((exclusion, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <span className="inline-block w-4 h-4 bg-red-500 rounded-full mr-3"></span>
                  {exclusion}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Inquiry Section */}
      <div className="bg-gray-50 rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          Interested in this package?
        </h2>
        <p className="text-gray-600 mt-2">
          Fill out the form below to inquire about the <strong>{name}</strong>{" "}
          package. We'll get back to you as soon as possible.
        </p>
        <div className="mt-6">
          <ContactForm packageName={name} />
        </div>
      </div>
    </div>
  );
}
