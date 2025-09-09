import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Calendar,
  Shield,
  MapPin,
  Star,
  Clock,
  Phone,
  Mail,
  Menu,
  X,
  ChevronRight,
  ArrowRight,
  Play,
  CheckCircle,
  Award,
} from "lucide-react";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Family-oriented clinic",
      description:
        "We treat your pets like family members, providing compassionate care with a personal touch that makes every visit comfortable.",
      color: "blue",
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Over 12 years of trusted service",
      description:
        "Three decades of excellence in veterinary care, building lasting relationships with pets and their families in our community.",
      color: "blue",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Exceptional patient care",
      description:
        "Advanced medical treatments combined with gentle, loving care to ensure your pet receives the best possible treatment.",
      color: "blue",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Convenient location",
      description:
        "Conveniently located in your neighborhood, making it easy to access quality veterinary care when you need it most.",
      color: "blue",
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Outstanding service providers",
      description:
        "Our experienced veterinarians and caring staff are dedicated to providing exceptional service and building trust with every interaction.",
      color: "blue",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Latest diagnostic equipment",
      description:
        "State-of-the-art medical technology ensures accurate diagnoses and effective treatments for your beloved companions.",
      color: "blue",
    },
  ];

  const additionalFeatures = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Competitive prices",
      description:
        "Quality veterinary care at affordable rates, ensuring your pet gets the best treatment without breaking your budget.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Open 7 days a week",
      description:
        "Available when you need us most, with extended hours including weekends for your convenience.",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "24/7 emergency care",
      description:
        "Round-the-clock emergency care because we know pet health emergencies don't wait for business hours.",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.2,
        ease: "easeOut",
      },
    }),
  };

  const images = [
    "https://images.unsplash.com/photo-1601758228041-f3b2795255f1",
    "https://images.unsplash.com/photo-1576201836106-db1758fd1c97",
    "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // change image every 4s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border border-gray-200 z-50 transition-all duration-300">
        <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <img src="log.jpeg" alt="logo" className="w-24 object-contain" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Services", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Menu (Animated with Framer Motion) */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden"
              >
                <div className="flex flex-col space-y-4 pt-4 border border-gray-200-t border border-gray-200-gray-100 pb-4">
                  {["Home", "About", "Services", "Contact"].map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-700 hover:text-blue-600 py-2 px-4 rounded-lg hover:bg-gray-50 transition-all duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 bg-gray-50">
        <div className="max-w-[95rem] mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h1 className="text-7xl font-black text-gray-900 mb-6">
                We Care
              </h1>
              <div className="w-24 h-1 bg-blue-600 mb-6 mx-auto lg:mx-0"></div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={0.2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-2xl text-gray-700 mb-4">
              Newcastle Veterinary Clinic is a trusted small animal practice
              </p>
              <p className="text-2xl text-blue-600 font-semibold">
                with over 12 years of proven experience in compassionate, high-quality veterinary care.
              </p>
            </motion.div>

            <motion.p
              variants={fadeUp}
              custom={0.4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-lg text-gray-600 mb-12"
            >
              Our dedicated team is committed to delivering exceptional veterinary care,
              guided by compassion, clinical excellence, and a genuine love for animals — because your
              pets deserve only the best.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={0.6}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition shadow-lg flex items-center gap-2">
                Book Appointment <ArrowRight className="w-5 h-5" />
              </button>
              <button className="flex items-center gap-3 text-gray-700 hover:text-blue-600">
                <div className="w-12 h-12 border-gray-200-2 border border-gray-200-gray-300 hover:border border-gray-200-blue-600 rounded-full flex items-center justify-center">
                  <Play className="w-5 h-5" />
                </div>
                <span className="font-medium">Watch Our Story</span>
              </button>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            custom={0.8}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="aspect-square bg-gray-200 rounded-3xl overflow-hidden shadow-2xl relative"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={images[current]}
                alt="Veterinary care"
                className="w-full h-full object-cover absolute inset-0"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-[95rem] mx-auto px-6">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-5xl font-black text-gray-900 mb-4"
          >
            Why Choose Us?
          </motion.h2>
          <div className="w-24 h-1 bg-blue-600 mb-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((f, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i * 0.2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-700 transition">
                    <div className="text-white">{f.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{f.title}</h3>
                  <p className="text-gray-600">{f.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalFeatures.map((f, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i * 0.2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-blue-50 border border-gray-200 rounded-xl p-6 hover:bg-blue-100 transition"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
                    <div className="text-blue-600">{f.icon}</div>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{f.title}</h3>
                  <p className="text-gray-700 text-sm">{f.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-[95rem] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black mb-6">About Us</h2>
            <div className="w-24 h-1 bg-blue-600 mb-8"></div>
            <p className="text-lg mb-4">
              For more than three decades, we have been committed ...
            </p>
            <p className="text-lg">
              We treat every patient with love and attention ...
            </p>
            <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition shadow-lg flex items-center gap-2">
              Learn More <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>
          <motion.div
            variants={fadeUp}
            custom={0.2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="aspect-[4/3] bg-gray-200 rounded-3xl overflow-hidden shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97"
              alt="Veterinary team"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Care Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[95rem] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="aspect-[4/3] bg-gray-200 rounded-3xl overflow-hidden shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba"
              alt="Pet care"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            variants={fadeUp}
            custom={0.2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black mb-6">Our Promise</h2>
            <div className="w-24 h-1 bg-blue-600 mb-8"></div>
            <p className="text-lg mb-4">
              Thank you for entrusting us with caring ...
            </p>
            <p className="text-lg mb-4">
              Our commitment goes beyond medical treatment …
            </p>
            <p className="text-lg">
              We build lasting relationships with pets and their families …
            </p>
            <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition shadow-lg flex items-center gap-2">
              Our Services <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl font-bold mb-8"
          >
            We Provide the Care Your Pet Deserves
          </motion.h2>
          <motion.button
            variants={fadeUp}
            custom={0.2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transition"
          >
            Book Today
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-16 ">
        <div className="max-w-[95rem] mx-auto px-6 grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
             <img src="log.jpeg" alt="logo" className="w-24 object-contain" />
            </div>
            <p className="mb-6 max-w-md">
              Providing exceptional veterinary care for over 12 years...
            </p>
            <div className="flex space-x-4">
              {["Facebook", "Twitter", "Instagram", "LinkedIn"].map(
                (social) => (
                  <button
                    key={social}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                    aria-label={`Visit us on ${social}`}
                  >
                    <span className="text-gray-400 text-sm">{social[0]}</span>
                  </button>
                )
              )}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 mt-1 text-blue-400" />
                <span className="text-sm">+27 34 062 0910</span>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 mt-1 text-blue-400" />
                <span className="text-sm">nnvetclinic@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 text-blue-400" />
                <span className="text-sm">
                  46 Gemsbok Avenue, Newcastle, South Africa, 2940
                </span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <div className="space-y-3 text-sm">
              {[
                "Home",
                "About Us",
                "Services",
                "Contact",
                "Emergency Care",
                "Pet Insurance",
              ].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/ /g, "-")}`}
                  className="block hover:text-blue-400 transition"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 max-w-[95rem] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm">
            <p className="flex items-center">
              © {new Date().getFullYear()} Newcastle Veterinary Clinic.
              Developed with <Heart className="w-4 h-4 ml-2 text-blue-400" />
            </p>
            <div className="flex items-center space-x-6">
              <span>Caring for pets since 2013</span>
              <span>12+ Years Excellence</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center  shadow-lg transition-all duration-300 z-50"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{
          opacity: scrollY > 500 ? 1 : 0,
          transform: `translateY(${scrollY > 500 ? 0 : 20}px)`,
        }}
      >
        <ChevronRight className="w-5 h-5 -rotate-90" />
      </button>
    </div>
  );
};

export default App;
