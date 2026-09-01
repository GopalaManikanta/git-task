import React from 'react';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=85',
    alt: 'Mountain landscape at sunrise',
    className: 'lg:col-span-2 lg:row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=85',
    alt: 'Mountain lake',
    className: 'lg:col-span-1 lg:row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1000&q=85',
    alt: 'Pink flowers',
    className: 'lg:col-span-1 lg:row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1000&q=85',
    alt: 'Forest waterfall',
    className: 'lg:col-span-1 lg:row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=85',
    alt: 'Beach sunset',
    className: 'lg:col-span-1 lg:row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1000&q=85',
    alt: 'City skyline at night',
    className: 'lg:col-span-1 lg:row-span-1',
  },
];

export default function GalleryPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      
      {/* Header */}
      <div className="text-center mb-10 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-800 dark:text-slate-100">
          Gallery Page
        </h1>

        <p className="mt-2 text-sm sm:text-base text-slate-500 dark:text-slate-400">
          santhosham
        </p>
      </div>

      {/* Masonry Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[180px] sm:auto-rows-[200px] gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={`group relative overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800 shadow-sm hover:shadow-2xl transition-all duration-500 ${image.className}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Image number */}
            <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
              {String(index + 1).padStart(2, '0')}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}