// app/portfolio/page.js

import Image from "next/image";

export default function PortfolioPage() {
  const photos = [
    { src: "/images/ph1.JPG", alt: "Photo 1" },
    { src: "/images/ph2.JPG", alt: "Photo 2" },
    { src: "/images/ph3.JPG", alt: "Photo 3" },
    { src: "/images/ph4.JPG", alt: "Photo 4" },
    { src: "/images/ph5.JPG", alt: "Photo 5" },
    { src: "/images/ph6.JPG", alt: "Photo 6" },
    { src: "/images/ph7.JPG", alt: "Photo 7" },
    { src: "/images/ph8.JPG", alt: "Photo 8" },
    { src: "/images/ph9.JPG", alt: "Photo 9" },
    { src: "/images/ph10.JPG", alt: "Photo 10" },
    { src: "/images/ph11.JPG", alt: "Photo 11" },
    { src: "/images/ph12.JPG", alt: "Photo 12" },
    { src: "/images/ph13.JPG", alt: "Photo 13" },
    { src: "/images/ph14.JPG", alt: "Photo 14" },
    { src: "/images/ph15.JPG", alt: "Photo 15" },
    { src: "/images/ph16.JPG", alt: "Photo 16" },
    { src: "/images/ph17.JPG", alt: "Photo 17" },
    { src: "/images/ph18.JPG", alt: "Photo 18" },

    // Add more images as needed
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-20 ">
      <h2 className="text-4xl font-bold mb-8 text-center">Portfolio</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {photos.map((photo, index) => (
          <div key={index} className="overflow-hidden rounded-lg">
            <img
              src={photo.src}
              alt={photo.alt}
              width={500}
              height={500}
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
