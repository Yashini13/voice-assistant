import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, MicOff } from 'lucide-react';
import shivohiniLogo from '../assets/logo.png'; // adjust the path as needed

const ElevenLabsInterface = () => {
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [showMicButton, setShowMicButton] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setLogoLoaded(true);
    }, 500);

    const timer2 = setTimeout(() => {
      setShowMicButton(true);
    }, 1500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const handleMicClick = () => {
    setIsRecording(!isRecording);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-3xl"></div>
      </div>

      {/* Logo Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: logoLoaded ? 1 : 0,
          scale: logoLoaded ? 1 : 0.5,
          y: logoLoaded ? -40 : 0
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: 0.2
        }}
        className="mb-8"
      >
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-yellow-400 tracking-wide text-center"
          initial={{ opacity: 0, scale: 0.3, y: 0 }}
          animate={{ opacity: 1, scale: 1, y: -10 }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: 0.3,
            type: "spring",
            stiffness: 100,
          }}
        >
          SHIVOHINI TECH-AI
        </motion.h1>
      </motion.div>

      {/* Main Voice Interface */}
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: showMicButton ? 1 : 0,
            scale: showMicButton ? 1 : 0
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut"
          }}
          className="relative w-80 h-80 mb-5"
        >
          {/* Outer rotating ring */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-conic from-green-400 via-pink-500 via-purple-500 to-green-400 p-1 shadow-2xl shadow-purple-500/30"
            animate={{ rotate: isRecording ? 360 : 0 }}
            transition={{
              duration: 2,
              repeat: isRecording ? Infinity : 0,
              ease: "linear"
            }}
          >
            <div className="w-full h-full rounded-full bg-gray-900"></div>
          </motion.div>

          {/* Inner static circle */}
          <div className="absolute inset-4 rounded-full bg-gradient-to-br from-cyan-200/50 via-blue-300/50 to-indigo-400/50 backdrop-blur-sm shadow-xl shadow-cyan-400/20 border border-cyan-400/30 flex flex-col items-center justify-center gap-4">
            <div className="flex items-center justify-center">
              <img
                src={shivohiniLogo}
                alt="Shivohini Logo"
                className="w-60 h-40 object-contain rounded-lg opacity-90"
              />
            </div>

            <motion.button
              onClick={handleMicClick}
              className="w-36 h-12 bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center gap-2 text-white hover:bg-black/90 transition-all duration-300 border border-white/20 z-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: showMicButton ? 1 : 0
              }}
              transition={{ delay: 0.3 }}
            >
              <motion.div
                animate={{ scale: isRecording ? [1, 1.2, 1] : 1 }}
                transition={{ duration: 0.5, repeat: isRecording ? Infinity : 0 }}
              >
                {isRecording ? (
                  <MicOff className="w-5 h-5 text-red-400" />
                ) : (
                  <Mic className="w-5 h-5 text-white" />
                )}
              </motion.div>
              <span className="text-xs font-medium">
                {isRecording ? 'Stop' : 'Call AI agent'}
              </span>
            </motion.button>
          </div>
        </motion.div>

        {/* Powered by */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showMicButton ? 1 : 0, y: showMicButton ? 0 : 20 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-gray-400 text-sm mt-4"
        >
          Powered by <span className="text-white font-medium">Shivohini TechAI</span>
        </motion.div>
      </div>

      {/* Recording Status Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-black/90 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-3 text-white z-50"
          >
            <div className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full ${isRecording ? 'bg-red-500 animate-pulse' : 'bg-green-500'}`}></div>
              <span className="text-sm font-medium">
                {isRecording ? 'Recording in progress...' : 'Recording stopped'}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Ambient particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ElevenLabsInterface;
