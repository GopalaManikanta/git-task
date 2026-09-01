
import React from "react";

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-slate-800 dark:text-white">
          Contact Us
        </h1>

        <p className="mt-2 text-slate-500 dark:text-slate-400">
          Get in touch with us for any questions or support.
        </p>
      </div>

      <div className="max-w-2xl mx-auto bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">
            Name
          </label>

          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-transparent outline-none"
          />
        </div>

        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-transparent outline-none"
          />
        </div>

        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">
            Message
          </label>

          <textarea
            rows="5"
            placeholder="Enter your message"
            className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-transparent outline-none resize-none"
          ></textarea>
        </div>

        <button
          className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition"
        >
          Send Message
        </button>
      </div>
    </div>
  );
}
