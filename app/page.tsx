"use client";

import { Carousel } from "@/components/ui/carousel";
import { Toaster, toast } from "sonner";
import { getUsers, saveUserData } from "@/server/user";
import {
  ChevronDown,
  Instagram,
  Mail,
  Menu,
  Phone,
  MapPin,
  X,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FocusCards } from "@/components/ui/focus-cards";
import { HoverEffect } from "@/components/ui/card-hover-effect";

const focusCards = [
  {
    title: "Wedding",
    src: "/Assets/1.jpg",
  }, {
    title: "Birthday",
    src: "/Assets/2.jpg",
  }, {
    title: "Munja",
    src: "/Assets/3.jpg",
  }, {
    title: "Baby Shower",
    src: "/Assets/4.jpg",
  }, {
    title: "Office Event",
    src: "/Assets/5.jpg",
  }, {
    title: "Custom Event",
    src: "/Assets/6.jpg",
  },
]

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSave = async () => {
    if (!email || !name || !message) {
      return toast.error("All fields are required.")

    }
    try {
      const data = await saveUserData({ name, email, message });
      toast.success("We will reach out to you shortly.")
      setEmail("")
      setName("")
      setMessage("")
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers().then(console.log).catch(console.error);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const slideData = [
    {
      title:
        "Exceptional wedding and birthday photography! The attention to detail, creativity, and quality of work exceeded our expectations. The photographer beautifully captured every special moment. Highly recommended for any event",
      author: "Ashutosh Jain",
    },
    {
      title:
        "Such a great experience with our wedding and birthday photos! The photographer was so friendly, and the pictures turned out amazing. Every moment was captured perfectly. We're so happy with them!",
      author: "Piyush Dubey",
    },
    {
      title:
        "Absolutely in love with our wedding and birthday photos! The photographer captured every emotion, every detail so beautifully! We'll treasure these moments forever. Highly recommend for anyone looking for amazing memories!",
      author: "Saurabh Tripathi",
    },
    {
      title:
        "Absolutely in love with our wedding and birthday photos! The photographer captured every emotion, every detail so beautifully! We'll treasure these moments forever. Highly recommend for anyone looking for amazing memories!",
      author: "Vanita Jain",
    },
  ];

  const services = [
    {
      title: "Wedding Photography",
      description:
        "Capturing your special day with elegance and style. Complete coverage of ceremonies, portraits, and candid moments.",
      price: "Starting from ₹25,000",
    },
    {
      title: "Birthday Photography",
      description:
        "Professional coverage of birthday celebrations. Includes candid shots, group photos, and special moment captures.",
      price: "Starting from ₹5,000",
    },
    {
      title: "Event Photography",
      description:
        "Comprehensive coverage for corporate events, parties, and special occasions. High-quality professional photos.",
      price: "Starting from ₹20,000",
    },
    {
      title: "Portrait Sessions",
      description:
        "Professional portrait photography for individuals, couples, and families. Indoor and outdoor sessions available.",
      price: "Starting from ₹10,000",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src="/Assets/banner.jpg"
          alt="Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <nav
          className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-sm" : "bg-transparent"
            }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <h1
                className={`text-2xl font-light ${isScrolled ? "text-black" : "text-white"
                  }`}
              >
                Viraj Art Photos
              </h1>
              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-8">
                <a
                  href="#portfolio"
                  className={`${isScrolled ? "text-black" : "text-white"
                    } hover:opacity-70`}
                >
                  Portfolio
                </a>
                <a
                  href="#services"
                  className={`${isScrolled ? "text-black" : "text-white"
                    } hover:opacity-70`}
                >
                  Services
                </a>
                <a
                  href="#about"
                  className={`${isScrolled ? "text-black" : "text-white"
                    } hover:opacity-70`}
                >
                  About
                </a>
                <a
                  href="#contact"
                  className={`${isScrolled ? "text-black" : "text-white"
                    } hover:opacity-70`}
                >
                  Contact
                </a>
                <a
                  href="#testimonial"
                  className={`${isScrolled ? "text-black" : "text-white"
                    } hover:opacity-70`}
                >
                  Testimonial
                </a>
              </div>
              {/* Mobile Menu Button */}
              <button
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X
                    className={`w-6 h-6 ${isScrolled ? "text-black" : "text-white"
                      }`}
                  />
                ) : (
                  <Menu
                    className={`w-6 h-6 ${isScrolled ? "text-black" : "text-white"
                      }`}
                  />
                )}
              </button>
            </div>
          </div>
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white">
              <div className="px-4 pt-2 pb-3 space-y-1">
                <a
                  href="#portfolio"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Portfolio
                </a>
                <a
                  href="#services"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </a>
                <a
                  href="#about"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#contact"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </a>
                <a
                  href="#testimonial"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Testimonial
                </a>
              </div>
            </div>
          )}
        </nav>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <div className="w-full bg-white text-black opacity-40 flex flex-col items-center justify-center">
            <h2 className="text-4xl md:text-6xl font-light mb-6">
              Viraj Art PhotoGraphy
            </h2>
            <p className="text-lg md:text-xl font-light mb-12">
              Planning Your Perfect Day, Your Perfect Way
            </p>
            <ChevronDown className="animate-bounce w-8 h-8" />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-center mb-16">Portfolio</h2>
          <FocusCards cards={focusCards} />
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "/Assets/1.jpg",
              "/Assets/2.jpg",
              "/Assets/3.jpg",
              "/Assets/4.jpg",
              "/Assets/5.jpg",
              "/Assets/6.jpg",
            ].map((src, index) => (
              <div
                key={index}
                className="relative aspect-[3/4] overflow-hidden group"
              >
                <Image
                  src={src}
                  alt={`Portfolio ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        {/* <div className="max-w-7xl mx-auto px-8">
          <HoverEffect items={services} />
        </div> */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-center mb-16">
            Our Services
          </h2>
          <HoverEffect items={services} />

          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <p className="text-lg font-medium">{service.price}</p>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-light mb-8">About</h2>
          <p className="text-lg text-gray-600 mb-12">
            With over 15 years of experience, I specialize in capturing life&apos;s
            most beautiful moments, from weddings and birthdays to all types of
            special events. My passion is creating timeless memories through
            photography, delivering images that tell your unique story with
            authenticity, elegance, and creativity.
          </p>
          <div className="flex justify-center space-x-8">
            <a
              href="https://www.instagram.com/viraj_arts_photos/"
              className="text-gray-600 hover:text-gray-900"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="mailto:contact@nordic.com"
              className="text-gray-600 hover:text-gray-900"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-center text-4xl font-light mb-8">
            Contact Details
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center">
              <div className="text-center">
                <Phone className="w-8 h-8 mx-auto mb-4 text-gray-700" />
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="text-gray-600">+91 9819814077</p>
                <p className="text-gray-600">+91 7977145463</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <Mail className="w-8 h-8 mx-auto mb-4 text-gray-700" />
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-600">virajartphots@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-8 h-8 mx-auto mb-4 text-gray-700" />
                <h3 className="text-xl font-semibold mb-2">Address</h3>
                <p className="text-gray-600">Shop No-13,Viraj Art Photo&apos;s, </p>
                <p className="text-gray-600">ShivMarket,Manpada Road </p>
                <p className="text-gray-600">Dombivali Station,</p>
                <p className="text-gray-600"> Maharashtra 421201</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-center mb-12">Contact Us</h2>
          <div className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
            </div>
            <button
              onClick={handleSave}
              className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors"
            >
              Send Message
            </button>
            <Toaster richColors />
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section id="testimonial">
        <div className="max-w-[100vw] overflow-hidden">
          <h2 className="text-4xl font-light text-center mb-12">
            What Our Clients Say
          </h2>
          <Carousel slides={slideData} />
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="py-8 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">
            © 2025 Viraj Art Photos. All rights reserved.
          </p>
        </div>
      </footer> */}


      <footer className="bg-white rounded-lg shadow-sm dark:bg-gray-900 m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">About</a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Contact</a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
        </div>
      </footer>


    </main>
  );
}
