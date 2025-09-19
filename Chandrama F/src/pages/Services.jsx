import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Main App component
const App = () => {
  // Set the target date for the countdown to exactly 30 days from the current time
  const [targetDate] = useState(
    new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
  );
  const [timeRemaining, setTimeRemaining] = useState({});
  const [isAnimating, setIsAnimating] = useState(false);

  // Function to calculate the time remaining
  const calculateTimeRemaining = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();
    let remaining = {};

    if (difference > 0) {
      remaining = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      // If countdown is over, set all to 0
      remaining = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return remaining;
  };

  useEffect(() => {
    // Start the interval to update the timer every second
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    // Initial calculation on component mount
    setTimeRemaining(calculateTimeRemaining());

    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, [targetDate]);

  // Framer Motion animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  // Function to calculate SVG stroke dashoffset for the circular timer
  const getStrokeOffset = (unit, total) => {
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const percentage = unit / total;
    return circumference * (1 - percentage);
  };

  return (
    <div className="relative w-screen h-screen bg-gray-950 text-white font-inter overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        src="https://assets.mixkit.co/videos/preview/mixkit-thunder-and-lightning-in-the-sky-3796-large.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Main Content Container */}
      <motion.div
        className="relative z-10 w-full h-full flex flex-col items-center justify-center p-4 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Logo */}
        <motion.div
          className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-24 h-24 sm:w-32 sm:h-32 text-purple-400"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2A10 10 0 002 12a10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2zm0 18a8 8 0 01-8-8c0-4.418 3.582-8 8-8v16z" />
          </svg>
        </motion.div>

        <motion.h1
          className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
          variants={itemVariants}
        >
          Chandrama Developer
        </motion.h1>
        <motion.p
          className="text-xl sm:text-2xl md:text-3xl font-light mb-12 tracking-wide"
          variants={itemVariants}
        >
          We are coming soon.
        </motion.p>

        {/* Countdown Timer */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12"
          variants={containerVariants}
        >
          {/* Days */}
          <motion.div
            className="flex flex-col items-center"
            variants={itemVariants}
          >
            <div className="relative w-32 h-32 md:w-40 md:h-40">
              <svg className="w-full h-full" viewBox="0 0 120 120">
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="transparent"
                  stroke="#334155"
                  strokeWidth="8"
                />
                <motion.circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="transparent"
                  stroke="#8B5CF6"
                  strokeWidth="8"
                  strokeLinecap="round"
                  transform="rotate(-90 60 60)"
                  style={{
                    strokeDasharray: "314.159",
                    strokeDashoffset: getStrokeOffset(timeRemaining.days, 30),
                  }}
                  initial={{ strokeDashoffset: 314.159 }}
                  animate={{
                    strokeDashoffset: getStrokeOffset(timeRemaining.days, 30),
                  }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl md:text-5xl font-bold">
                  {timeRemaining.days}
                </span>
                <span className="text-sm md:text-base text-gray-400 mt-1">
                  Days
                </span>
              </div>
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div
            className="flex flex-col items-center"
            variants={itemVariants}
          >
            <div className="relative w-32 h-32 md:w-40 md:h-40">
              <svg className="w-full h-full" viewBox="0 0 120 120">
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="transparent"
                  stroke="#334155"
                  strokeWidth="8"
                />
                <motion.circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="transparent"
                  stroke="#3B82F6"
                  strokeWidth="8"
                  strokeLinecap="round"
                  transform="rotate(-90 60 60)"
                  style={{
                    strokeDasharray: "314.159",
                    strokeDashoffset: getStrokeOffset(timeRemaining.hours, 24),
                  }}
                  initial={{ strokeDashoffset: 314.159 }}
                  animate={{
                    strokeDashoffset: getStrokeOffset(timeRemaining.hours, 24),
                  }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl md:text-5xl font-bold">
                  {timeRemaining.hours}
                </span>
                <span className="text-sm md:text-base text-gray-400 mt-1">
                  Hours
                </span>
              </div>
            </div>
          </motion.div>

          {/* Minutes */}
          <motion.div
            className="flex flex-col items-center"
            variants={itemVariants}
          >
            <div className="relative w-32 h-32 md:w-40 md:h-40">
              <svg className="w-full h-full" viewBox="0 0 120 120">
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="transparent"
                  stroke="#334155"
                  strokeWidth="8"
                />
                <motion.circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="transparent"
                  stroke="#F97316"
                  strokeWidth="8"
                  strokeLinecap="round"
                  transform="rotate(-90 60 60)"
                  style={{
                    strokeDasharray: "314.159",
                    strokeDashoffset: getStrokeOffset(
                      timeRemaining.minutes,
                      60
                    ),
                  }}
                  initial={{ strokeDashoffset: 314.159 }}
                  animate={{
                    strokeDashoffset: getStrokeOffset(
                      timeRemaining.minutes,
                      60
                    ),
                  }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl md:text-5xl font-bold">
                  {timeRemaining.minutes}
                </span>
                <span className="text-sm md:text-base text-gray-400 mt-1">
                  Minutes
                </span>
              </div>
            </div>
          </motion.div>

          {/* Seconds */}
          <motion.div
            className="flex flex-col items-center"
            variants={itemVariants}
          >
            <div className="relative w-32 h-32 md:w-40 md:h-40">
              <svg className="w-full h-full" viewBox="0 0 120 120">
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="transparent"
                  stroke="#334155"
                  strokeWidth="8"
                />
                <motion.circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="transparent"
                  stroke="#EF4444"
                  strokeWidth="8"
                  strokeLinecap="round"
                  transform="rotate(-90 60 60)"
                  style={{
                    strokeDasharray: "314.159",
                    strokeDashoffset: getStrokeOffset(
                      timeRemaining.seconds,
                      60
                    ),
                  }}
                  initial={{ strokeDashoffset: 314.159 }}
                  animate={{
                    strokeDashoffset: getStrokeOffset(
                      timeRemaining.seconds,
                      60
                    ),
                  }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl md:text-5xl font-bold">
                  {timeRemaining.seconds}
                </span>
                <span className="text-sm md:text-base text-gray-400 mt-1">
                  Seconds
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default App;
