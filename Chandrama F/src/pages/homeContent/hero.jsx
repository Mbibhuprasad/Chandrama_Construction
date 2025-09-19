import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const properties = [
  {
    id: 1,
    name: "Skyline Heights: Modern Urban Living",
    description:
      "A luxury high-rise offering panoramic city views, smart-home integrations, and premium amenities. Designed for those seeking elegance and convenience in the heart of the metropolis. Experience urban sophistication redefined.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    category: "Luxury Apartments (Sale)",
  },
  {
    id: 2,
    name: "Harbor Vista Estates",
    description:
      "Waterfront properties blending contemporary architecture with natural serenity. Private docks, infinity pools, and sustainable design make these homes a sanctuary for discerning buyers seeking tranquility and exclusivity.",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    category: "Waterfront Homes (Sale)",
  },
  {
    id: 3,
    name: "Heritage Oaks Ranch",
    description:
      "Expansive ranch properties with equestrian facilities, vineyards, and preserved natural landscapes. Ideal for investors or families desiring privacy, sustainability, and connection to nature.",
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    category: "Equestrian Estates (Sale)",
  },
  {
    id: 4,
    name: "Urban Loft Collections",
    description:
      "Converted industrial spaces turned into minimalist lofts with exposed brick, high ceilings, and modular designs. Perfect for artists, entrepreneurs, and urban pioneers craving creative spaces.",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    category: "Commercial/Residential (Rent)",
  },

];

export default function Hero() {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-screen bg-white relative overflow-hidden">
      {/* Animated Blue and Green Background Elements */}
      <div className="absolute inset-0">
        {/* Large Gradient Orbs with Animation */}
        <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-r from-blue-200/30 via-teal-200/25 to-green-200/30 rounded-full blur-3xl animate-pulse-slow animate-drift-1"></div>
        <div className="absolute top-32 right-16 w-96 h-96 bg-gradient-to-r from-cyan-200/25 via-teal-200/20 to-blue-200/25 rounded-full blur-3xl animate-bounce-slow animate-drift-2"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-r from-teal-200/30 via-blue-200/25 to-green-200/30 rounded-full blur-3xl animate-pulse-slow animate-drift-3"></div>
        <div className="absolute top-1/2 right-10 w-64 h-64 bg-gradient-to-r from-blue-200/25 via-teal-200/20 to-green-200/25 rounded-full blur-3xl animate-spin-very-slow"></div>
        <div className="absolute bottom-32 right-1/4 w-88 h-88 bg-gradient-to-r from-teal-200/20 via-blue-200/15 to-green-200/20 rounded-full blur-3xl animate-pulse-slow animate-drift-4"></div>

        {/* Colorful Moving Particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 rounded-full animate-float-particle ${
                i % 6 === 0
                  ? "bg-blue-400/60"
                  : i % 6 === 1
                  ? "bg-teal-400/60"
                  : i % 6 === 2
                  ? "bg-green-400/60"
                  : i % 6 === 3
                  ? "bg-cyan-400/60"
                  : i % 6 === 4
                  ? "bg-emerald-400/60"
                  : "bg-sky-400/60"
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Geometric Shapes */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 border-2 border-gradient-deep rotate-45 animate-rainbow-spin"></div>
        <div className="absolute bottom-1/3 left-1/5 w-24 h-24 bg-gradient-to-r from-teal-200/30 to-blue-200/30 rotate-12 animate-rainbow-bounce"></div>
        <div className="absolute top-2/3 right-1/3 w-20 h-20 bg-gradient-to-r from-blue-300/40 to-teal-300/40 rounded-full animate-color-pulse"></div>

        {/* Animated Lines */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-300/40 via-teal-300/40 via-cyan-300/40 via-green-300/40 to-blue-300/40 animate-rainbow-wave"></div>
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-slate-200/30 via-blue-300/30 via-teal-300/30 to-cyan-300/30 animate-rainbow-wave-reverse"></div>
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-blue-300/35 via-teal-300/35 via-slate-200/35 to-cyan-300/35 animate-rainbow-wave-slow"></div>

        {/* Dynamic Color Waves */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-100/30 via-transparent via-blue-100/30 via-transparent to-green-100/30 animate-color-shift"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-blue-100/25 via-transparent via-teal-100/25 via-transparent to-cyan-100/25 animate-color-shift-reverse"></div>

        {/* Matrix Rain */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={`rainbow-line-${i}`}
              className={`absolute w-px bg-gradient-to-b from-transparent via-${
                i % 4 === 0
                  ? "blue"
                  : i % 4 === 1
                  ? "teal"
                  : i % 4 === 2
                  ? "cyan"
                  : "green"
              }-400/40 to-transparent animate-matrix-rain`}
              style={{
                left: `${5 + i * 8}%`,
                height: "100%",
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Floating Bubbles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={`bubble-${i}`}
              className={`absolute rounded-full animate-bubble-float bg-gradient-to-r ${
                i % 5 === 0
                  ? "from-teal-200/20 to-blue-200/20"
                  : i % 5 === 1
                  ? "from-blue-200/20 to-cyan-200/20"
                  : i % 5 === 2
                  ? "from-cyan-200/20 to-green-200/20"
                  : i % 5 === 3
                  ? "from-green-200/20 to-teal-200/20"
                  : "from-blue-200/20 to-teal-200/20"
              }`}
              style={{
                width: `${20 + Math.random() * 40}px`,
                height: `${20 + Math.random() * 40}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${4 + Math.random() * 4}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Neon Glow Effects */}
        <div className="absolute top-20 left-40 w-4 h-4 bg-blue-400 rounded-full animate-neon-glow shadow-lg shadow-blue-400/50"></div>
        <div
          className="absolute top-60 right-32 w-3 h-3 bg-teal-400 rounded-full animate-neon-glow shadow-lg shadow-teal-400/50"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-20 w-5 h-5 bg-cyan-400 rounded-full animate-neon-glow shadow-lg shadow-cyan-400/50"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-40 left-2/3 w-3 h-3 bg-green-400 rounded-full animate-neon-glow shadow-lg shadow-green-400/50"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet !bg-gray-400/50 !w-3 !h-3",
          bulletActiveClass:
            "swiper-pagination-bullet-active !bg-teal-600 !w-8",
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-screen relative z-10"
      >
        {properties.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative w-full h-full flex items-center justify-between px-8 lg:px-16 pt-10">
              {/* Content overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/60 to-transparent z-10"></div>

              {/* Content Section */}
              <div className="relative z-20 flex-1 max-w-2xl text-gray-800">
                {/* Category Tag */}
                <div className="inline-flex items-center px-5 py-2 rounded-full bg-gradient-to-r from-teal-100 to-blue-100 border border-teal-300/40 mb-6 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-2 animate-neon-glow"></div>
                  <span className="text-sm text-teal-700 font-medium">
                    {item.category}
                  </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight animate-fade-in">
                  <span className="bg-gradient-to-r from-gray-800 via-teal-700 to-blue-700 bg-clip-text text-transparent animate-gradient-text">
                    {item.name}
                  </span>
                </h1>

                {/* Description */}
                <p
                  className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg animate-fade-in"
                  style={{ animationDelay: "0.2s" }}
                >
                  {item.description}
                </p>

                {/* CTA Buttons */}
                <div
                  className="flex flex-col sm:flex-row gap-4 animate-fade-in"
                  style={{ animationDelay: "0.4s" }}
                >
                  <button
                    onClick={() => navigate("/product")}
                    className="group px-8 py-4 bg-gradient-to-r from-teal-600 to-blue-700 hover:from-teal-700 hover:to-blue-800 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl hover:shadow-teal-400/25 transform hover:scale-105"
                  >
                    <span>View Property</span>
                    <svg
                      className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>

                  <button className="group px-8 py-4 border-2 border-gradient-deep hover:border-teal-500/60 rounded-lg font-semibold text-gray-700 transition-all duration-300 flex items-center justify-center backdrop-blur-sm hover:bg-gradient-to-r hover:from-teal-100 hover:to-blue-100 transform hover:scale-105">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Virtual Tour</span>
                  </button>
                </div>
              </div>

              {/* Image Section */}
              <div className="relative z-20 flex-1 max-w-2xl mt-10 ml-8 lg:block animate-slide-in">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-teal-200/30 to-blue-200/30 rounded-2xl transform rotate-3 animate-color-float"></div>
                  <div className="relative bg-white/80 backdrop-blur-lg rounded-2xl p-3 border border-gray-200 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-90 object-cover rounded-lg shadow-lg"
                    />
                    <div className="absolute top-8 right-8 bg-teal-500 w-3 h-3 rounded-full animate-neon-glow shadow-lg shadow-teal-400/50"></div>
                    <div className="absolute bottom-8 left-8">
                      <div className="bg-white/80 backdrop-blur-sm rounded-lg px-2 py-2">
                        <div className="text-teal-700 text-sm font-mono animate-neon-glow p-1">
                          ● Premium Listing
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Styles */}
      <style jsx>{`
        .swiper-pagination {
          bottom: 2rem !important;
        }
        .swiper-button-next,
        .swiper-button-prev {
          color: #334155 !important;
          background: rgba(255, 255, 255, 0.8) !important;
          backdrop-filter: blur(10px) !important;
          width: 3rem !important;
          height: 3rem !important;
          border-radius: 50% !important;
          border: 1px solid rgba(203, 213, 225, 0.5) !important;
          transition: all 0.3s ease !important;
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: linear-gradient(
            45deg,
            rgba(13, 148, 136, 0.2),
            rgba(29, 78, 216, 0.2)
          ) !important;
          transform: scale(1.1) !important;
          box-shadow: 0 0 20px rgba(13, 148, 136, 0.3) !important;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.05);
          }
        }

        @keyframes drift-1 {
          0%,
          100% {
            transform: translate(0px, 0px) rotate(0deg);
          }
          25% {
            transform: translate(30px, -20px) rotate(90deg);
          }
          50% {
            transform: translate(60px, 20px) rotate(180deg);
          }
          75% {
            transform: translate(20px, 40px) rotate(270deg);
          }
        }

        @keyframes drift-2 {
          0%,
          100% {
            transform: translate(0px, 0px) rotate(0deg);
          }
          33% {
            transform: translate(-40px, 30px) rotate(120deg);
          }
          66% {
            transform: translate(40px, -30px) rotate(240deg);
          }
        }

        @keyframes drift-3 {
          0%,
          100% {
            transform: translate(0px, 0px) scale(1);
          }
          50% {
            transform: translate(-30px, -30px) scale(1.2);
          }
        }

        @keyframes drift-4 {
          0%,
          100% {
            transform: translate(0px, 0px) rotate(0deg);
          }
          25% {
            transform: translate(-25px, 25px) rotate(45deg);
          }
          50% {
            transform: translate(25px, 25px) rotate(90deg);
          }
          75% {
            transform: translate(25px, -25px) rotate(135deg);
          }
        }

        @keyframes rainbow-spin {
          0% {
            transform: rotate(0deg);
            border-color: #0d9488;
          }
          25% {
            border-color: #0891b2;
          }
          50% {
            transform: rotate(180deg);
            border-color: #0369a1;
          }
          75% {
            border-color: #0d9488;
          }
          100% {
            transform: rotate(360deg);
            border-color: #0891b2;
          }
        }

        @keyframes rainbow-bounce {
          0%,
          100% {
            transform: translateY(0px) rotate(12deg);
            background: linear-gradient(45deg, #0d9488, #0891b2);
          }
          50% {
            transform: translateY(-30px) rotate(12deg);
            background: linear-gradient(45deg, #0369a1, #0d9488);
          }
        }

        @keyframes color-pulse {
          0%,
          100% {
            background: linear-gradient(45deg, #0369a1, #0d9488);
            transform: scale(1);
          }
          50% {
            background: linear-gradient(45deg, #0d9488, #0891b2);
            transform: scale(1.2);
          }
        }

        @keyframes rainbow-wave {
          0% {
            background: linear-gradient(
              90deg,
              #0d9488,
              #0891b2,
              #0369a1,
              #0d9488,
              #0c4a6e
            );
            transform: translateX(-100%);
          }
          100% {
            background: linear-gradient(
              90deg,
              #0c4a6e,
              #0d9488,
              #0891b2,
              #0369a1,
              #0d9488
            );
            transform: translateX(100%);
          }
        }

        @keyframes rainbow-wave-reverse {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes rainbow-wave-slow {
          0% {
            background: linear-gradient(90deg, #0d9488, #0891b2, #0369a1);
            transform: translateX(-50%);
          }
          100% {
            background: linear-gradient(90deg, #0369a1, #0d9488, #0891b2);
            transform: translateX(50%);
          }
        }

        @keyframes color-shift {
          0%,
          100% {
            background: linear-gradient(
              90deg,
              rgba(13, 148, 136, 0.3),
              transparent,
              rgba(29, 78, 216, 0.3),
              transparent,
              rgba(8, 145, 178, 0.3)
            );
          }
          50% {
            background: linear-gradient(
              90deg,
              rgba(29, 78, 216, 0.3),
              transparent,
              rgba(13, 148, 136, 0.3),
              transparent,
              rgba(8, 145, 178, 0.3)
            );
          }
        }

        @keyframes color-shift-reverse {
          0%,
          100% {
            background: linear-gradient(
              -90deg,
              rgba(29, 78, 216, 0.25),
              transparent,
              rgba(8, 145, 178, 0.25),
              transparent,
              rgba(13, 148, 136, 0.25)
            );
          }
          50% {
            background: linear-gradient(
              -90deg,
              rgba(13, 148, 136, 0.25),
              transparent,
              rgba(29, 78, 216, 0.25),
              transparent,
              rgba(8, 145, 178, 0.25)
            );
          }
        }

        @keyframes float-particle {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 1;
          }
        }

        @keyframes matrix-rain {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }

        @keyframes bubble-float {
          0%,
          100% {
            transform: translateY(0px) scale(1);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-30px) scale(1.1);
            opacity: 1;
          }
        }

        @keyframes neon-glow {
          0%,
          100% {
            box-shadow: 0 0 5px currentColor, 0 0 10px currentColor,
              0 0 15px currentColor;
            opacity: 1;
          }
          50% {
            box-shadow: 0 0 10px currentColor, 0 0 20px currentColor,
              0 0 30px currentColor;
            opacity: 0.8;
          }
        }

        @keyframes gradient-text {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes color-float {
          0%,
          100% {
            transform: rotate(3deg) translateY(0px);
            background: linear-gradient(
              45deg,
              rgba(13, 148, 136, 0.3),
              rgba(29, 78, 216, 0.3)
            );
          }
          50% {
            transform: rotate(3deg) translateY(-15px);
            background: linear-gradient(
              45deg,
              rgba(29, 78, 216, 0.3),
              rgba(13, 148, 136, 0.3)
            );
          }
        }

        @keyframes spin-very-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in {
          animation: slide-in 1s ease-out forwards;
          opacity: 0;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 6s ease-in-out infinite;
        }

        .animate-drift-1 {
          animation: drift-1 15s ease-in-out infinite;
        }

        .animate-drift-2 {
          animation: drift-2 12s ease-in-out infinite;
        }

        .animate-drift-3 {
          animation: drift-3 10s ease-in-out infinite;
        }

        .animate-drift-4 {
          animation: drift-4 8s ease-in-out infinite;
        }

        .animate-rainbow-spin {
          animation: rainbow-spin 8s linear infinite;
        }

        .animate-rainbow-bounce {
          animation: rainbow-bounce 4s ease-in-out infinite;
        }

        .animate-color-pulse {
          animation: color-pulse 3s ease-in-out infinite;
        }

        .animate-rainbow-wave {
          animation: rainbow-wave 6s linear infinite;
        }

        .animate-rainbow-wave-reverse {
          animation: rainbow-wave-reverse 8s linear infinite;
        }

        .animate-rainbow-wave-slow {
          animation: rainbow-wave-slow 10s linear infinite;
        }

        .animate-color-shift {
          animation: color-shift 8s ease-in-out infinite;
        }

        .animate-color-shift-reverse {
          animation: color-shift-reverse 6s ease-in-out infinite;
        }

        .animate-float-particle {
          animation: float-particle 4s ease-in-out infinite;
        }

        .animate-matrix-rain {
          animation: matrix-rain 4s linear infinite;
        }

        .animate-bubble-float {
          animation: bubble-float 6s ease-in-out infinite;
        }

        .animate-neon-glow {
          animation: neon-glow 2s ease-in-out infinite;
        }

        .animate-gradient-text {
          background-size: 200% 200%;
          animation: gradient-text 3s ease infinite;
        }

        .animate-color-float {
          animation: color-float 4s ease-in-out infinite;
        }

        .animate-spin-very-slow {
          animation: spin-very-slow 20s linear infinite;
        }

        .border-gradient-deep {
          border: 2px solid;
          border-image: linear-gradient(
              45deg,
              #0d9488,
              #0891b2,
              #0369a1,
              #0d9488
            )
            1;
        }
      `}</style>
    </div>
  );
}
