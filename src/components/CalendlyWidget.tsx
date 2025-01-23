import { useEffect } from "react";

interface CalendlyWidgetProps {
  url: string;
}

const CalendlyWidget: React.FC<CalendlyWidgetProps> = ({ url }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget bg-white w-full"
      data-url={url}
      style={{ height: "900px", backgroundColor: "var(--tw-bg-neutral-800)" }}
    ></div>
  );
};

export default CalendlyWidget;
