"use client";

import { Carousel } from "@/components/ui/carousel";
import { ChevronDown, Instagram, Mail } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const slideData = [
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Urban Dreams",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Neon Nights",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Desert Whispers",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4"
          alt="Nordic Landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-sm" : "bg-transparent"
          }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <h1 className={`text-2xl font-light ${isScrolled ? "text-black" : "text-white"}`}>
                Viraj Art Photos
              </h1>
              <div className="flex space-x-8">
                <a href="#portfolio" className={`${isScrolled ? "text-black" : "text-white"} hover:opacity-70`}>Portfolio</a>
                <a href="#about" className={`${isScrolled ? "text-black" : "text-white"} hover:opacity-70`}>About</a>
                <a href="#contact" className={`${isScrolled ? "text-black" : "text-white"} hover:opacity-70`}>Contact</a>
                <a href="#contact" className={`${isScrolled ? "text-black" : "text-white"} hover:opacity-70`}>Testimonial</a>
              </div>
            </div>
          </div>
        </nav>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h2 className="text-6xl font-light mb-6">Viraj Art PhotoGraphy</h2>
          <p className="text-xl font-light mb-12">Planning Your Perfect Day, Your Perfect Way</p>
          <ChevronDown className="animate-bounce w-8 h-8" />
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-center mb-16">Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "https://images.unsplash.com/photo-1520769669658-f07657f5a307",
              "https://images.unsplash.com/photo-1542401886-65d6c61db217",
              "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122",
              "https://images.unsplash.com/photo-1527489377706-5bf97e608852",
              "https://images.unsplash.com/photo-1518128958364-65859d70aa41",
              "https://images.unsplash.com/photo-1469474968028-56623f02e42e"
            ].map((src, index) => (
              <div key={index} className="relative aspect-[3/4] overflow-hidden group">
                <Image
                  src={src}
                  alt={`Portfolio ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-light mb-8">About</h2>
          <p className="text-lg text-gray-600 mb-12">
            With over 15 years of experience, I specialize in capturing life’s most beautiful moments, from weddings and birthdays to all types of special events. My passion is creating timeless memories through photography, delivering images that tell your unique story with authenticity, elegance, and creativity."

            Feel free to tweak it to your liking!
          </p>
          <div className="flex justify-center space-x-8">
            <a href="https://instagram.com" className="text-gray-600 hover:text-gray-900">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="mailto:contact@nordic.com" className="text-gray-600 hover:text-gray-900">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-center mb-12">Contact</h2>
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
      <div className="max-w-[100vw] overflow-hidden scrollbar-none my-4">
        <Carousel slides={slideData} />
      </div>

      {/* Footer */}
      <footer className="py-8 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">© 2025 Viraj Art Photos. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}