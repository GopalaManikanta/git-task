import React from "react";

export default function ProfilePage() {
  const user = {
    name: "Alex Morgan",
    handle: "@alexmorgan",
    bio: "Frontend developer. Coffee enthusiast. Building things on the web.",
    location: "San Francisco, CA",
    joined: "March 2023",
    stats: { posts: 128, followers: 942, following: 215 },
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <div className="bg-white/60 dark:bg-slate-800/20 border border-slate-200 dark:border-slate-700/60 rounded-3xl p-8 shadow-sm dark:shadow-none transition-colors duration-300">
        {/* Header */}
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-2xl font-semibold text-slate-600 dark:text-slate-300">
            {user.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
              {user.name}
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              {user.handle}
            </p>
          </div>
        </div>

        {/* Bio */}
        <p className="mt-6 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
          {user.bio}
        </p>

        {/* Meta */}
        <div className="mt-4 flex gap-4 text-xs text-slate-500 dark:text-slate-500">
          <span>{user.location}</span>
          <span>Joined {user.joined}</span>
        </div>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-3 divide-x divide-slate-200 dark:divide-slate-700/60 border-t border-slate-200 dark:border-slate-700/60 pt-6">
          {Object.entries(user.stats).map(([label, value]) => (
            <div key={label} className="text-center">
              <p className="text-lg font-semibold text-slate-800 dark:text-slate-100">
                {value}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-500 capitalize">
                {label}
              </p>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-8 flex gap-3">
          <button className="flex-1 rounded-xl bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-900 text-sm font-medium py-2.5 hover:opacity-90 transition">
            Edit profile
          </button>
          <button className="flex-1 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-sm font-medium py-2.5 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition">
            Share
          </button>
        </div>
      </div>
    </div>
  );
}
