import React from "react";
import {
  MapPin,
  Compass,
  Heart,
  ShieldCheck,
  Users,
  Globe2,
  Plane,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function AboutPage() {
  const stats = [
    { value: "10K+", label: "Happy Travelers" },
    { value: "120+", label: "Destinations" },
    { value: "500+", label: "Travel Experiences" },
    { value: "4.9/5", label: "Traveler Rating" },
  ];

  const values = [
    {
      icon: Compass,
      title: "Explore More",
      description:
        "Discover beautiful destinations, hidden gems, local experiences, and unforgettable adventures around the world.",
    },
    {
      icon: Heart,
      title: "Travel With Heart",
      description:
        "We believe travel is about meaningful moments, authentic connections, and memories that stay with you forever.",
    },
    {
      icon: ShieldCheck,
      title: "Travel With Confidence",
      description:
        "From planning to your return journey, we focus on reliable service, transparent information, and traveler support.",
    },
    {
      icon: Globe2,
      title: "Discover Responsibly",
      description:
        "We encourage responsible travel that respects local communities, cultures, nature, and the destinations we visit.",
    },
  ];

  const services = [
    {
      icon: Plane,
      title: "Trip Planning",
      description:
        "Personalized itineraries designed around your interests, schedule, and travel style.",
    },
    {
      icon: MapPin,
      title: "Amazing Destinations",
      description:
        "Explore beaches, mountains, cities, heritage sites, wildlife, and unforgettable places.",
    },
    {
      icon: Users,
      title: "Group Adventures",
      description:
        "Enjoy memorable journeys with friends, families, couples, and travel communities.",
    },
  ];

  return (
    <main className="bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-white transition-colors duration-300">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-white to-emerald-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900" />

        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 text-sm font-semibold mb-6">
                <Sparkles className="w-4 h-4" />
                Your Journey Starts Here
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                Travel More.
                <span className="block text-sky-600 dark:text-sky-400">
                  Experience More.
                </span>
                <span className="block">Live More.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-400">
                We make travel simple, inspiring, and unforgettable. Discover
                extraordinary destinations, plan meaningful adventures, and
                create memories that last a lifetime.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <button className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold shadow-lg shadow-sky-600/20 transition-all duration-300 hover:-translate-y-0.5">
                  Explore Destinations
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button className="px-6 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-slate-900/60 hover:bg-white dark:hover:bg-slate-800 font-semibold transition-all duration-300">
                  Plan My Trip
                </button>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <div className="absolute -inset-4 bg-sky-400/20 dark:bg-sky-500/10 blur-3xl rounded-full" />

              <div className="relative overflow-hidden rounded-[2rem] shadow-2xl border border-white/60 dark:border-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85"
                  alt="Beautiful mountain travel destination"
                  className="w-full h-[420px] lg:h-[520px] object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-sm font-semibold">
                    <MapPin className="w-4 h-4 text-sky-600" />
                    Discover the World
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-sky-600 dark:text-sky-400">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=700&q=85"
                alt="Mountain destination"
                className="w-full h-72 object-cover rounded-3xl shadow-lg"
              />

              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=85"
                alt="Tropical beach destination"
                className="w-full h-72 object-cover rounded-3xl shadow-lg mt-10"
              />
            </div>

            <div className="absolute left-1/2 -translate-x-1/2 bottom-4 bg-white dark:bg-slate-900 rounded-2xl px-6 py-4 shadow-xl border border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <Globe2 className="w-7 h-7 text-sky-600" />
                <div>
                  <p className="font-bold">One World</p>
                  <p className="text-xs text-slate-500">
                    Endless possibilities
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-sky-600 dark:text-sky-400">
              About Us
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl font-bold leading-tight">
              We believe every journey has a story worth telling.
            </h2>

            <p className="mt-6 text-slate-600 dark:text-slate-400 leading-7">
              Travel is more than moving from one place to another. It is about
              waking up somewhere new, tasting something you've never tried,
              meeting people from different cultures, and seeing the world from
              a new perspective.
            </p>

            <p className="mt-4 text-slate-600 dark:text-slate-400 leading-7">
              Our mission is to help travelers discover those moments without
              making the planning process complicated. Whether you are looking
              for a relaxing beach escape, an adventurous mountain trip, a
              cultural city break, or a family holiday, we help turn your travel
              ideas into memorable experiences.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/60">
                <p className="font-bold">Curated Experiences</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Handpicked ideas for better journeys.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/60">
                <p className="font-bold">Traveler First</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Your comfort and experience come first.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white dark:bg-slate-900/60 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-24">
          <div className="max-w-2xl mb-12">
            <p className="text-sm font-bold uppercase tracking-widest text-sky-600 dark:text-sky-400">
              What We Believe
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
              Travel should feel exciting, personal, and effortless.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="group p-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-500/10 flex items-center justify-center text-sky-600 dark:text-sky-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="mt-5 text-lg font-bold">{value.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-6 py-20 lg:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest text-sky-600 dark:text-sky-400">
            What We Offer
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
            Everything you need for your next adventure.
          </h2>

          <p className="mt-4 text-slate-500 dark:text-slate-400">
            From inspiration to itinerary, we help make every part of your
            journey easier.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-sky-100 dark:bg-sky-500/10 flex items-center justify-center text-sky-600 dark:text-sky-400">
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="mt-6 text-xl font-bold">{service.title}</h3>

                <p className="mt-3 text-slate-500 dark:text-slate-400 leading-7">
                  {service.description}
                </p>

                <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-600 dark:text-sky-400 hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="relative overflow-hidden rounded-[2rem] bg-slate-900 dark:bg-sky-950 px-8 py-14 sm:px-12 lg:px-16">
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-sky-500/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-emerald-500/10 blur-3xl" />

          <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-sky-400 uppercase tracking-widest">
                Your Next Adventure
              </p>

              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
                The world is waiting. Where will you go next?
              </h2>

              <p className="mt-4 text-slate-300 leading-7">
                Start exploring destinations, discover new experiences, and
                build a journey you'll remember for years to come.
              </p>
            </div>

            <button className="shrink-0 inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white text-slate-900 font-bold hover:bg-slate-100 transition-colors">
              Start Exploring
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
