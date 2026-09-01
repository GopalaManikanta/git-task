import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Info, User, Image, ArrowRight, Plane, MapPin } from 'lucide-react';

export default function HomePage() {
  const routes = [
    {
      name: 'Contact',
      path: '/contact',
      description: 'Reach out to travel guides and customer support.',
      icon: Phone,
      color: 'from-amber-500 to-orange-600',
    },
    {
      name: 'About',
      path: '/about',
      description: 'Learn about our travel agency mission and journey.',
      icon: Info,
      color: 'from-blue-500 to-cyan-600',
    },
    {
      name: 'Profile',
      path: '/profile',
      description: 'Manage user traveler account and booking history.',
      icon: User,
      color: 'from-emerald-500 to-teal-600',
    },
    {
      name: 'Gallery',
      path: '/gallery',
      description: 'Explore travel photo albums and scenic destinations.',
      icon: Image,
      color: 'from-purple-500 to-indigo-600',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <div className="text-center py-12 px-6 rounded-3xl bg-gradient-to-r from-sky-50 via-indigo-50 to-sky-100 dark:from-slate-800 dark:via-slate-800/80 dark:to-slate-800 border border-sky-100 dark:border-slate-700 shadow-xl dark:shadow-2xl mb-12 relative overflow-hidden transition-colors duration-300">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-sky-400/20 dark:bg-sky-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-400/20 dark:bg-indigo-500/10 rounded-full blur-3xl"></div>
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 text-sky-700 dark:text-sky-400 text-sm font-semibold mb-6 border border-sky-500/20">
          <Plane className="w-4 h-4" />
          <span>Explore the World</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
          Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600 dark:from-sky-400 dark:to-indigo-400">TravelQuest</span>
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Your portal to unforgettable journeys. Access your profile, explore destinations gallery, get in touch, or learn more about us below.
        </p>

        <div className="flex items-center justify-center gap-4 text-slate-500 dark:text-slate-400 text-sm font-medium">
          <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-sky-500 dark:text-sky-400" /> 4 Dedicated Routes</span>
          <span>•</span>
          <span>Light & Dark Mode Support</span>
        </div>
      </div>

      {/* 4 Pages Route Cards */}
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
        <span>Explore Page Routes</span>
        <span className="text-xs bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-400 border border-slate-300 dark:border-slate-700 px-2 py-0.5 rounded-full font-normal">4 Pages</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {routes.map((route) => {
          const Icon = route.icon;
          return (
            <Link
              key={route.path}
              to={route.path}
              className="group relative bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 hover:border-sky-500/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/10 flex flex-col justify-between"
            >
              <div>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${route.color} flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition duration-300`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition">
                  {route.name}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  {route.description}
                </p>
              </div>

              <div className="flex items-center text-sky-600 dark:text-sky-400 text-sm font-semibold gap-1 group-hover:gap-2 transition-all">
                <span>Visit Page</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
