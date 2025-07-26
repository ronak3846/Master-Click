// // app/page.js
// "use client";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import Link from "next/link";
// import { FaCamera, FaPortrait, FaImages, FaFilm } from "react-icons/fa";
// import { motion } from "framer-motion";

// import Image from "next/image";

// export default function HomePage() {

//   const heroImages = [
//     { src: "/images/header1.JPG", alt: "Hero Image 1" },
//     { src: "/images/header2.JPG", alt: "Hero Image 2" },
//     { src: "/images/header3.JPG", alt: "Hero Image 3" },
//   ];

//  const services = [
//    {
//      icon: FaCamera,
//      title: "Wedding Photography",
//      description:
//        "Capturing every precious moment of your wedding day with elegance and creativity.",
//      whatsappMsg: "Hello, I'm interested in your Wedding Photography services.",
//    },
//    {
//      icon: FaPortrait,
//      title: "Portraits & Headshots",
//      description:
//        "Professional portraits and headshots to elevate your personal or business profile.",
//      whatsappMsg: "Hello, I'm interested in Portraits & Headshots.",
//    },
//    {
//      icon: FaImages,
//      title: "Event Coverage",
//      description:
//        "Comprehensive photography for events, parties, and corporate functions.",
//      whatsappMsg: "Hello, I'd like to enquire about Event Coverage services.",
//    },
//    {
//      icon: FaFilm,
//      title: "Cinematography",
//      description:
//        "Professional cinematic video coverage to capture your moments with motion and emotion.",
//      whatsappMsg: "Hello, I'm interested in your Cinematography services.",
//    },
//  ];



//   const galleryImages = [
//     { src: "/images/ph1.JPG", alt: "Gallery Photo 1" },
//     { src: "/images/ph2.JPG", alt: "Gallery Photo 2" },
//     { src: "/images/ph3.JPG", alt: "Gallery Photo 3" },
//   ];

//   return (
//     <main>
//       {/* Hero Section */}
//       <section className="h-[80vh]">
//         <Swiper
//           spaceBetween={0}
//           slidesPerView={1}
//           loop={true}
//           autoplay={{ delay: 3000 }}
//           className="h-full"
//         >
//           {heroImages.map((image, index) => (
//             <SwiperSlide key={index}>
//               <div
//                 className="h-[80vh] bg-center bg-cover relative flex flex-col justify-center items-center text-center text-white px-4"
//                 style={{ backgroundImage: `url(${image.src})` }}
//               >
//                 <div className="absolute inset-0 bg-black/40"></div>

//                 <div className="relative z-10">
//                   <h1 className="text-4xl md:text-6xl font-bold mb-4">
//                     Master Click Photography
//                   </h1>
//                   <p className="text-lg md:text-xl max-w-xl mb-6">
//                     Capturing timeless moments with elegance and creativity.
//                   </p>
//                   <Link href="/portfolio">
//                     <span className="bg-gold text-black px-6 py-3 rounded-full font-semibold hover:bg-white transition cursor-pointer">
//                       View Portfolio
//                     </span>
//                   </Link>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </section>

//       {/* About Section */}
//       <section className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-16 bg-white text-black">
//         {/* Profile Image */}
//         <div className=" rounded-full md:w-1/3">
//           <img
//             src="/images/mcp logo.png" // replace with your actual profile image
//             alt="Photographer"
//             className="rounded-full shadow-lg  object-center"
//           />
//         </div>

//         {/* About Text */}
//         <div className="w-full md:w-2/3">
//           <h2 className="text-3xl font-bold mb-4">About Me</h2>
//           <p className="text-lg mb-6">
//             Hi, I'm [Your Name], the creative mind behind Master Click
//             Photography. I specialize in capturing timeless moments with a blend
//             of elegance and storytelling. My passion lies in creating visuals
//             that resonate emotionally with my clients.
//           </p>
//           <a
//             href="/about"
//             className="bg-gold text-black px-6 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition"
//           >
//             Learn More
//           </a>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="px-6 py-16 bg-gradient-to-b from-gray-50 to-white text-black">
//         <h2 className="text-3xl font-bold mb-10 text-center">My Services</h2>

//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {services.map((service, index) => {
//             const Icon = service.icon;
//             return (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: false, amount: 0.3 }}
//                 whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
//                 transition={{ duration: 0.6 }}
//                 className="bg-white bg-opacity-80 backdrop-blur-md rounded-xl shadow-lg p-6 text-center border border-gray-200 hover:shadow-2xl transition"
//               >
//                 <Icon size={50} className="mx-auto mb-4 text-gold" />
//                 <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
//                 <p className="mb-4 text-sm">{service.description}</p>
//                 <a
//                   href={`https://wa.me/919664040372?text=${encodeURIComponent(
//                     service.whatsappMsg
//                   )}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-block mt-2 bg-gold text-black px-4 py-2 rounded-full font-semibold hover:bg-black hover:text-white transition"
//                 >
//                   Book Now
//                 </a>
//               </motion.div>
//             );
//           })}
//         </div>
//       </section>

//       {/* Gallery Section */}
//       <section className="max-w-6xl mx-auto px-4 py-20">
//         <h2 className="text-3xl font-bold mb-12 text-center">
//           Gallery Preview
//         </h2>
//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {galleryImages.map((image, index) => (
//             <div key={index} className="overflow-hidden rounded-lg">
//               <Image
//                 src={image.src}
//                 alt={image.alt}
//                 width={500}
//                 height={500}
//                 className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
//               />
//             </div>
//           ))}
//         </div>
//         <div className="text-center mt-8">
//           <a
//             href="/portfolio"
//             className="bg-gold text-black px-6 py-3 rounded-full font-semibold hover:bg-white transition"
//           >
//             View Full Portfolio
//           </a>
//         </div>
//       </section>
//     </main>
//   );
// }

"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import { motion } from "framer-motion";
import Link from "next/link";

const heroImages = [
  "/images/header1.JPG",
  "/images/header2.JPG",
  "/images/header3.JPG",
];

const services = [
  {
    image: "/images/ph5.JPG",
    title: "Wedding Photography",
    description:
      "Capturing every precious moment with elegance and creativity.",
    whatsappMsg: "Hello, I'm interested in Wedding Photography services.",
  },
  {
    image: "/images/ph6.JPG",
    title: "Portraits & Headshots",
    description:
      "Professional portraits and headshots to elevate your profile.",
    whatsappMsg: "Hello, I'm interested in Portraits & Headshots.",
  },
  {
    image: "/images/ph7.JPG",
    title: "Event Coverage",
    description: "Comprehensive photography for events and functions.",
    whatsappMsg: "Hello, I'd like to enquire about Event Coverage services.",
  },
  {
    image: "/images/ph8.JPG",
    title: "Cinematography",
    description: "Cinematic video coverage capturing moments with emotion.",
    whatsappMsg: "Hello, I'm interested in Cinematography services.",
  },
];

export default function HomePage() {
  return (
    <div className="bg-black text-white">
      {/* Hero Slider */}
      <section className="relative">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          className="h-screen"
        >
          {heroImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-screen w-full">
                <Image
                  src={image}
                  alt={`Slide ${index}`}
                  fill
                  priority
                  placeholder="blur"
                  blurDataURL="/images/placeholder.JPG" // use an actual blurred placeholder image here
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* About Section */}
      <section className="px-6 py-20 bg-gray-50 text-black">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <img
              src="/images/mcp logo.png"
              alt="Ajay Vaishnav"
              width={288}
              height={288}
              placeholder="blur"
              blurDataURL="/images/placeholder.JPG"
              className="rounded-full shadow-lg border-4 border-gold object-cover"
            />
          </div>

          {/* About Content */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4 text-gold">Ajay Vaishnav</h2>
            <h3 className="text-xl font-semibold mb-4">
              Professional Photographer
            </h3>
            <p className="text-lg mb-4">
              I am a passionate wedding and event photographer based in Udaipur
              with over 20 years of experience. My photography style blends
              creativity with elegance to tell your story beautifully and
              authentically.
            </p>
            <p className="text-lg">
              From capturing timeless wedding portraits to covering grand events
              and cinematic videography, I aim to make your special moments last
              forever.
            </p>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 bg-gold text-black px-6 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition"
            >
              Connect on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center text-gold">
          My Services
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-xl overflow-hidden shadow-lg group"
            >
              <div className="relative w-full h-80">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  placeholder="blur"
                  blurDataURL="/images/placeholder.JPG"
                  className="object-cover transform group-hover:scale-110 transition duration-700 ease-in-out"
                />
              </div>
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center p-4">
                <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                <p className="mb-4 text-sm">{service.description}</p>
                <a
                  href={`https://wa.me/919887165654
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-4 py-2 rounded-full font-semibold hover:bg-white hover:text-black transition"
                >
                  Book Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="px-6 py-16 bg-black">
        <h2 className="text-3xl font-bold mb-10 text-center text-gold">
          Gallery
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div key={num} className="relative w-full h-60">
              <Image
                src={`/images/ph${num}.JPG`}
                alt={`Gallery ${num}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                placeholder="blur"
                blurDataURL="/images/placeholder.JPG"
                className="object-cover rounded-lg hover:scale-105 transition"
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/portfolio">
            <span className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-white transition cursor-pointer">
              View Full Gallery
            </span>
          </Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-6 py-16 bg-gradient-to-r from-gold to-yellow-400 text-black text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Capture Your Special Moments?
        </h2>
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 bg-black text-gold px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition"
        >
          Contact on WhatsApp
        </a>
      </section>
    </div>
  );
}
