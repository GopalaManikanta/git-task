import React from 'react';
import { NavLink } from 'react-router-dom';
import { Compass, Phone, Info, User, Image, Home, Sun, Moon } from 'lucide-react';

export default function Navbar({ darkMode, toggleTheme }) {
  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Contact', path: '/contact', icon: Phone },
    { name: 'About', path: '/about', icon: Info },
    { name: 'Profile', path: '/profile', icon: User },
    { name: 'Gallery', path: '/gallery', icon: Image },
  ];

  return (
    <nav className="bg-white/95 dark:bg-slate-800/95 backdrop-blur border-b border-slate-300 dark:border-slate-700 sticky top-0 z-50 px-6 py-4 transition-colors duration-300 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2 text-xl font-bold text-sky-600 dark:text-sky-400 hover:opacity-90 transition">
          <Compass className="w-7 h-7 text-sky-500 dark:text-sky-400 animate-pulse" />
          <span>TravelQuest</span>
        </NavLink>

        <div className="flex items-center gap-1 sm:gap-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-sky-600 text-white shadow-md shadow-sky-600/30'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200/70 dark:hover:bg-slate-700/60 hover:text-slate-900 dark:hover:text-white'
                  }`
                }
              >
                <Icon className="w-4 h-4" />
                <span>{item.name}</span>
              </NavLink>
            );
          })}

          {/* Dark / Light Mode Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            className="ml-2 px-3 py-2 rounded-xl bg-slate-200/80 dark:bg-slate-700 text-slate-800 dark:text-slate-100 hover:bg-slate-300 dark:hover:bg-slate-600 transition-all cursor-pointer flex items-center gap-2 text-xs font-bold border border-slate-300 dark:border-slate-600 shadow-sm"
          >
            {darkMode ? (
              <>
                <Sun className="w-4 h-4 text-amber-500" />
                <span>Light Mode</span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-indigo-600" />
                <span>Dark Mode</span>
              </>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
