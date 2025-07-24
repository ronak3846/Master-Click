import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold mb-4">Master Click Photography</h3>
          <p>Capturing timeless moments with elegance and creativity.</p>
        </div>

        {/* Contact Details with Icons */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <div className="flex items-start mb-2">
            <FaMapMarkerAlt className="mt-1 mr-2 text-gold" />
            <p>Udaipur, Rajasthan, India</p>
          </div>
          <div className="flex items-center mb-2">
            <FaPhoneAlt className="mr-2 text-gold" />
            <p>+91 98871 65654</p>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="mr-2 text-gold" />
            <p>masterclick@gmail.com</p>
          </div>
        </div>

        {/* Embedded Map */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Location</h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.8158564829286!2d73.71248031488584!3d24.58887658418695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e5655d4325bb%3A0xa4af949d135c8db1!2sUdaipur%2C%20Rajasthan%2C%20India!5e0!3m2!1sen!2sin!4v1629979789391!5m2!1sen!2sin"
            width="100%"
            height="200"
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
      </div>

      <div className="text-center mt-10 text-sm text-gray-400">
        © {new Date().getFullYear()} Master Click Photography. All rights
        reserved.
      </div>
    </footer>
  );
}
