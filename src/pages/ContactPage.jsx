
import React from "react";

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-white">
          Get in Touch
        </h1>

        <p className="mt-3 text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
          Have a question, suggestion, or need help? Send us a message and
          our team will get back to you soon.
        </p>
      </div>

      {/* Main Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Contact Details */}
        <div className="space-y-6">

          {/* Email */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-500/10">
                <span className="text-xl">✉️</span>
              </div>

              <div>
                <h3 className="font-semibold text-slate-800 dark:text-white">
                  Email Us
                </h3>

                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  support@example.com
                </p>

                <p className="text-xs text-slate-400 mt-2">
                  We usually reply within 24 hours.
                </p>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-100 dark:bg-green-500/10">
                <span className="text-xl">📞</span>
              </div>

              <div>
                <h3 className="font-semibold text-slate-800 dark:text-white">
                  Call Us
                </h3>

                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  +91 98765 43210
                </p>

                <p className="text-xs text-slate-400 mt-2">
                  Monday - Friday, 9:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-500/10">
                <span className="text-xl">📍</span>
              </div>

              <div>
                <h3 className="font-semibold text-slate-800 dark:text-white">
                  Our Location
                </h3>

                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Andhra Pradesh, India
                </p>

                <p className="text-xs text-slate-400 mt-2">
                  Available for online support worldwide.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">

            <h2 className="text-2xl font-semibold text-slate-800 dark:text-white">
              Send us a message
            </h2>

            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 mb-7">
              Fill out the form below and we'll get back to you shortly.
            </p>

            <form className="space-y-5">

              {/* Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  />
                </div>

              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="What is this regarding?"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Message
                </label>

                <textarea
                  rows="6"
                  placeholder="Tell us how we can help..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition resize-none"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white font-semibold transition shadow-sm"
              >
                Send Message
              </button>

            </form>
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="mt-10 text-center">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          We are always happy to help. Feel free to contact us anytime.
        </p>
      </div>

    </div>
  );
}
