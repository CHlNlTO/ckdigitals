"use client";

import { useState } from "react";

type Props = {
  features: string[];
  title?: string;
};

export default function FeatureSection({ features, title }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="mb-6">
      {title && <h2 className="text-lg font-bold text-black mb-2">{title}</h2>}
      <ul className={`${expanded ? "" : "line-clamp-3"} space-y-2`}>
        {features.map((feature, idx) => (
          <li key={idx} className="text-gray-700">
            • {feature}
          </li>
        ))}
      </ul>
      {features.length > 3 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-blue-500 text-sm mt-2"
        >
          {expanded ? "Show less" : "Show more"}
        </button>
      )}
    </section>
  );
}
