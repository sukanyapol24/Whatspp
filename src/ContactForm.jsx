import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    query: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = form.mobile.replace(/\D/g, "");
    if (!phoneNumber) {
      alert("Enter a valid mobile number with country code, for example 919876543210.");
      return;
    }

    const message = `Name: ${form.name}\nEmail: ${form.email}\nMobile: ${form.mobile}\nQuery: ${form.query}`;
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="name"
        value={form.name}
        placeholder="Name"
        onChange={handleChange}
        required
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
      />
      <input
        name="email"
        value={form.email}
        placeholder="Email"
        onChange={handleChange}
        required
        type="email"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
      />
      <input
        name="mobile"
        value={form.mobile}
        placeholder="Mobile Number (country code + number)"
        onChange={handleChange}
        required
        type="tel"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
      />
      <p className="text-sm text-gray-500">Example: 918088147241 (no + or spaces)</p>
      <textarea
        name="query"
        value={form.query}
        placeholder="Query"
        onChange={handleChange}
        required
        rows="4"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-md transition duration-200"
      >
        Send to WhatsApp
      </button>
    </form>
  );
}