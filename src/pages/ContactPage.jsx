import React from 'react';

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 text-center">
      {/* Empty Contact Page */}
      <div className="min-h-[60vh] flex flex-col items-center justify-center border-2 border-dashed border-slate-300 dark:border-slate-700/60 rounded-3xl p-12 bg-white/60 dark:bg-slate-800/20 shadow-sm dark:shadow-none transition-colors duration-300">
        <h1 className="text-3xl font-bold text-slate-700 dark:text-slate-300 mb-2">Contact Page</h1>
        <p className="text-slate-500 dark:text-slate-500 text-sm">This page is currently empty.</p>
      </div>
    </div>
  );
}
