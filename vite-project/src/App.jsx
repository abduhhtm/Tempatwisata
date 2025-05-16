import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full flex items-center justify-between px-8 py-6 shadow-md bg-white sticky top-0 z-50"
    >
      {/* Logo */}
      <div className="text-3xl font-bold text-blue-600">MyLogo</div>

      {/* Navigation Menu */}
      <ul className="hidden md:flex gap-10 text-lg text-gray-700 font-semibold">
        <li className="hover:text-blue-600 transition-colors cursor-pointer">Home</li>
        <li className="hover:text-blue-600 transition-colors cursor-pointer">About</li>
        <li className="hover:text-blue-600 transition-colors cursor-pointer">Gallery</li>
        <li className="hover:text-blue-600 transition-colors cursor-pointer">Contact</li>
      </ul>

      {/* Contact Us Button */}
      <div className="hidden md:block">
        <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-5 py-3 rounded-xl shadow">
          Contact Us
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button className="border border-gray-300 px-4 py-3 rounded-md text-base">
          Menu
        </button>
      </div>
    </motion.nav>
  );
}

export function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full flex flex-col items-center justify-start bg-white text-center px-4 pt-24 pb-20"
    >
      <h1 className="text-5xl md:text-6xl font-bold text-blue-600 mb-4 mt-10">
        Selamat Datang di Website Kami
      </h1>
      <p className="text-lg md:text-xl text-blue-500 max-w-2xl">
        Kami menyediakan informasi lengkap dan galeri menarik untuk Anda.
        Jelajahi lebih lanjut dan hubungi kami jika ada pertanyaan.
      </p>
    </motion.section>
  );
}

export function Home1() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (imgSrc) => {
    setSelectedImage(imgSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full bg-blue-600 rounded-t-3xl px-6 py-16 z-10"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {["ss1.png", "ss2.png", "ss3.png", "ss4.png"].map((img, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg overflow-hidden shadow-md cursor-zoom-in"
            onClick={() => openModal(img)}
          >
            <img
              src={img}
              alt={`Foto ${i + 1}`}
              className="w-full h-auto object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-60 cursor-zoom-out"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="bg-white p-2 rounded-xl relative max-w-5xl w-full mx-6"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={selectedImage}
                alt="Selected"
                className="w-full max-h-[90vh] object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Home1 />
    </div>
  );
}

export default App;
