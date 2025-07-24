// app/contact/page.js

export default function ContactPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold mb-8 text-center">Contact Me</h2>

      <form className="flex flex-col space-y-6">
        <div>
          <label htmlFor="name" className="block mb-2 font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-2 font-semibold">
            Message
          </label>
          <textarea
            id="message"
            rows="5"
            placeholder="Your Message"
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-gold text-black font-semibold px-6 py-3 rounded hover:bg-white transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
