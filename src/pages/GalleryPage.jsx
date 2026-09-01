import React from 'react';

const galleryImages = [
  {
    id: 1,
    title: 'Mountain Sunrise',
    description:
      'A peaceful sunrise spreading warm golden light across the mountain peaks.',
    location: 'Mountain Valley',
    src: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1600&q=90',
  },
  {
    id: 2,
    title: 'Crystal Lake',
    description:
      'Clear blue water reflecting the surrounding mountains and quiet forest.',
    location: 'Alpine Lake',
    src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=90',
  },
  {
    id: 3,
    title: 'Spring Flowers',
    description:
      'Beautiful pink blossoms bringing color and life to a peaceful spring morning.',
    location: 'Spring Garden',
    src: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1200&q=90',
  },
  {
    id: 4,
    title: 'Forest Waterfall',
    description:
      'Fresh mountain water flowing through a green and untouched forest.',
    location: 'Green Forest',
    src: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1400&q=90',
  },
  {
    id: 5,
    title: 'Golden Beach',
    description:
      'The setting sun creates a beautiful golden reflection across the ocean.',
    location: 'Ocean Coast',
    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=90',
  },
  {
    id: 6,
    title: 'City Lights',
    description:
      'A vibrant city skyline glowing beautifully against the night sky.',
    location: 'City Skyline',
    src: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1400&q=90',
  },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        {/* ================= HEADER ================= */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600 dark:text-indigo-400 mb-3">
            Our Collection
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            Gallery
          </h1>

          <p className="mt-4 text-base sm:text-lg leading-7 text-slate-600 dark:text-slate-400">
            Explore beautiful moments captured across mountains, forests,
            beaches, gardens, and city landscapes.
          </p>
        </div>

        {/* ================= GALLERY ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">

          {galleryImages.map((image, index) => (
            <article
              key={image.id}
              className={`
                group relative overflow-hidden rounded-3xl
                bg-white dark:bg-slate-900
                border border-slate-200/70 dark:border-slate-800
                shadow-sm hover:shadow-2xl
                transition-all duration-500
                ${
                  index === 0
                    ? 'lg:col-span-2 lg:row-span-2'
                    : ''
                }
              `}
            >
              {/* Image */}
              <div
                className={`
                  relative overflow-hidden
                  ${
                    index === 0
                      ? 'h-[420px] sm:h-[500px] lg:h-full min-h-[520px]'
                      : 'h-[300px] sm:h-[340px] lg:h-[360px]'
                  }
                `}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-110
                  "
                />

                {/* Dark gradient */}
                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-black/80
                    via-black/20
                    to-transparent
                    opacity-80
                    group-hover:opacity-95
                    transition-opacity
                    duration-500
                  "
                />

                {/* Image number */}
                <div
                  className="
                    absolute top-5 left-5
                    flex items-center justify-center
                    w-10 h-10
                    rounded-full
                    bg-white/20
                    backdrop-blur-md
                    border border-white/30
                    text-white
                    text-xs
                    font-semibold
                  "
                >
                  {String(image.id).padStart(2, '0')}
                </div>

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 text-white">

                  <div className="mb-2">
                    <span
                      className="
                        inline-flex
                        px-3 py-1
                        rounded-full
                        bg-white/15
                        backdrop-blur-md
                        border border-white/20
                        text-xs
                        font-medium
                      "
                    >
                      {image.location}
                    </span>
                  </div>

                  <h2
                    className={`
                      font-bold
                      ${
                        index === 0
                          ? 'text-3xl sm:text-4xl'
                          : 'text-2xl'
                      }
                    `}
                  >
                    {image.title}
                  </h2>

                  <p
                    className="
                      mt-2
                      max-w-xl
                      text-sm
                      sm:text-base
                      leading-6
                      text-white/80
                    "
                  >
                    {image.description}
                  </p>

                  {/* Bottom line */}
                  <div
                    className="
                      mt-5
                      h-px
                      w-0
                      bg-white/70
                      group-hover:w-20
                      transition-all
                      duration-500
                    "
                  />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ================= FOOTER TEXT ================= */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-sm text-slate-500 dark:text-slate-500">
            Six moments • One beautiful collection
          </p>
        </div>
      </div>
    </div>
  );
}