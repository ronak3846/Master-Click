// app/about/page.js

import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>

      <div className="flex flex-col md:flex-row items-center gap-10">
        <Image
          src="/images/your-photo.jpg" // replace with your actual photo
          alt="Your Name"
          width={192}
          height={192}
          className="rounded-full border-4 border-gold object-cover"
          placeholder="blur"
          blurDataURL="/images/placeholder.jpg" // optional: blurred placeholder
        />

        <div>
          <p className="text-lg mb-4">
            Hi, I&apos;m <span className="font-semibold">Your Name</span> , a
            passionate photographer specializing in portrait, wedding, and
            editorial photography. I aim to capture authentic moments with
            creativity and elegance.
          </p>

          <p className="text-lg">
            With years of experience and a keen eye for detail, I help my
            clients preserve their most precious memories through timeless
            images.
          </p>
        </div>
      </div>
    </section>
  );
}
