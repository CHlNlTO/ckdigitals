"use client";

import { useState } from "react";

type Props = {
  packageName: string;
};

export default function ContactForm({ packageName }: Props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: `I would like to inquire about the "${packageName}" package.`,
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Example API request (replace with your endpoint)
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Failed to send inquiry:", error);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="p-4 border rounded-lg bg-green-100 text-green-800">
        <p>Thank you for your inquiry! We&apos;ll get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 border rounded-lg shadow-md bg-white space-y-4"
    >
      <h2 className="text-lg font-bold text-black">
        Inquire about this package
      </h2>
      <div>
        <label htmlFor="name" className="block text-sm text-gray-700 mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border rounded px-3 py-2 text-gray-700"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border rounded px-3 py-2 text-gray-700"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm text-gray-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          required
          className="w-full border rounded px-3 py-2 text-gray-700"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className={`w-full py-2 rounded text-white ${
          loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        {loading ? "Sending..." : "Send Inquiry"}
      </button>
    </form>
  );
}
