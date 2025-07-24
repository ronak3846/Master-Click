// app/portfolio/page.js

import Image from "next/image";

export default function PortfolioPage() {
  const photos = [
    { src: "/images/ph1.jpg", alt: "Photo 1" },
    { src: "/images/ph2.jpg", alt: "Photo 2" },
    { src: "/images/ph3.jpg", alt: "Photo 3" },
    { src: "/images/ph4.jpg", alt: "Photo 4" },
    { src: "/images/ph5.jpg", alt: "Photo 5" },
    { src: "/images/ph6.jpg", alt: "Photo 6" },
    { src: "/images/ph7.jpg", alt: "Photo 7" },
    { src: "/images/ph8.jpg", alt: "Photo 8" },
    { src: "/images/ph9.jpg", alt: "Photo 9" },
    { src: "/images/ph10.jpg", alt: "Photo 10" },
    { src: "/images/ph11.jpg", alt: "Photo 11" },
    { src: "/images/ph12.jpg", alt: "Photo 12" },
    { src: "/images/ph13.jpg", alt: "Photo 13" },
    { src: "/images/ph14.jpg", alt: "Photo 14" },
    { src: "/images/ph15.jpg", alt: "Photo 15" },
    { src: "/images/ph16.jpg", alt: "Photo 16" },
    { src: "/images/ph17.jpg", alt: "Photo 17" },
    { src: "/images/ph18.jpg", alt: "Photo 18" },

    // Add more images as needed
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-20 ">
      <h2 className="text-4xl font-bold mb-8 text-center">Portfolio</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {photos.map((photo, index) => (
          <div key={index} className="overflow-hidden rounded-lg">
            <Image
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
