// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Mic, MicOff } from 'lucide-react';
// import shivohiniLogo from '../assets/logo.png'; // adjust the path as needed
// import conversationData from '../contants/conversation.js';

// const ElevenLabsInterface = () => {
//   const [logoLoaded, setLogoLoaded] = useState(false);
//   const [showMicButton, setShowMicButton] = useState(false);
//   const [isRecording, setIsRecording] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);

//   const [conversation, setConversation] = useState([conversationData]);
//   const [historyVisible, setHistoryVisible] = useState(false);

//   useEffect(() => {
//     const timer1 = setTimeout(() => setLogoLoaded(true), 500);
//     const timer2 = setTimeout(() => setShowMicButton(true), 1500);

//     return () => {
//       clearTimeout(timer1);
//       clearTimeout(timer2);
//     };
//   }, []);

//   const handleMicClick = () => {
//     const message = isRecording
//       ? "Stopped recording. AI processing paused."
//       : "Recording started. Speak to the AI Agent...";

//     setConversation((prev) => [...prev, message]);
//     setIsRecording(!isRecording);
//     setShowPopup(true);
//     setTimeout(() => setShowPopup(false), 2000);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col items-center justify-center relative overflow-hidden">
//       {/* Live Conversation Panel - Top Left */}
//       <div className="absolute top-4 left-4 w-72 max-h-60 overflow-y-auto bg-black/70 border border-gray-700 rounded-xl p-4 text-white text-sm shadow-xl backdrop-blur-md z-50">
//         <h2 className="font-semibold mb-2 text-yellow-400">Live Conversation</h2>
//         {conversation.length === 0 ? (
//           <p className="italic text-gray-400">No messages yet...</p>
//         ) : (
//           conversation.map((msg, i) => (
//             <div key={i} className="mb-1 flex gap-1">
//               <span className="font-semibold text-blue-300">
//                 {i % 2 === 0 ? "🧑‍💬 You:" : "🤖 AI:"}
//               </span>
//               <span className="text-white">{msg}</span>
//             </div>
//           ))
//         )}
//       </div>

//       {/* Menu Button - Top Right */}
//       <div className="absolute top-4 right-4 z-50">
//         <button
//           className="px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-md hover:bg-gray-700 transition-all"
//           onClick={() => setHistoryVisible(!historyVisible)}
//         >
//           {historyVisible ? "Hide History" : "Show History"}
//         </button>
//       </div>

//       {/* Conversation History Panel */}
//       {historyVisible && (
//         <div className="absolute top-16 right-4 w-72 max-h-60 overflow-y-auto bg-black/70 border border-gray-700 rounded-xl p-4 text-white text-sm shadow-xl backdrop-blur-md z-50">
//           <h2 className="font-semibold mb-2 text-blue-400">Conversation History</h2>
//           {conversation.length === 0 ? (
//             <p className="italic text-gray-400">No conversation history.</p>
//           ) : (
//             conversation.map((msg, i) => (
//               <div key={i} className="mb-1 flex gap-1">
//                 <span className="font-semibold text-blue-300">
//                   {i % 2 === 0 ? "🧑‍💬 You:" : "🤖 AI:"}
//                 </span>
//                 <span className="text-white">{msg}</span>
//               </div>
//             ))
//           )}
//         </div>
//       )}


//       {/* Background decorative elements */}
//       <div className="absolute inset-0 opacity-20">
//         <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-3xl"></div>
//       </div>

//       {/* Logo Section */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.5 }}
//         animate={{
//           opacity: logoLoaded ? 1 : 0,
//           scale: logoLoaded ? 1 : 0.5,
//           y: logoLoaded ? -40 : 0
//         }}
//         transition={{
//           duration: 0.8,
//           ease: "easeOut",
//           delay: 0.2
//         }}
//         className="mb-8"
//       >
//         <motion.h1
//           className="text-3xl md:text-4xl font-bold text-yellow-400 tracking-wide text-center"
//           initial={{ opacity: 0, scale: 0.3, y: 0 }}
//           animate={{ opacity: 1, scale: 1, y: -10 }}
//           transition={{
//             duration: 1,
//             ease: "easeOut",
//             delay: 0.3,
//             type: "spring",
//             stiffness: 100,
//           }}
//         >
//           SHIVOHINI TECH-AI
//         </motion.h1>
//       </motion.div>

//       {/* Main Voice Interface */}
//       <div className="relative z-10 flex flex-col items-center">
//         <motion.div
//           initial={{ opacity: 0, scale: 0 }}
//           animate={{
//             opacity: showMicButton ? 1 : 0,
//             scale: showMicButton ? 1 : 0
//           }}
//           transition={{
//             duration: 0.6,
//             ease: "easeOut"
//           }}
//           className="relative w-80 h-80 mb-5"
//         >
//           {/* Outer rotating ring */}
//           <motion.div
//             className="absolute inset-0 rounded-full bg-gradient-conic from-green-400 via-pink-500 via-purple-500 to-green-400 p-1 shadow-2xl shadow-purple-500/30"
//             animate={{ rotate: isRecording ? 360 : 0 }}
//             transition={{
//               duration: 2,
//               repeat: isRecording ? Infinity : 0,
//               ease: "linear"
//             }}
//           >
//             <div className="w-full h-full rounded-full bg-gray-900"></div>
//           </motion.div>

//           {/* Inner static circle */}
//           <div className="absolute inset-4 rounded-full bg-gradient-to-br from-cyan-200/50 via-blue-300/50 to-indigo-400/50 backdrop-blur-sm shadow-xl shadow-cyan-400/20 border border-cyan-400/30 flex flex-col items-center justify-center gap-4">
//             <div className="flex items-center justify-center">
//               <img
//                 src={shivohiniLogo}
//                 alt="Shivohini Logo"
//                 className="w-60 h-40 object-contain rounded-lg opacity-90"
//               />
//             </div>

//             <motion.button
//               onClick={handleMicClick}
//               className="w-36 h-12 bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center gap-2 text-white hover:bg-black/90 transition-all duration-300 border border-white/20 z-10"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               initial={{ opacity: 0 }}
//               animate={{
//                 opacity: showMicButton ? 1 : 0
//               }}
//               transition={{ delay: 0.3 }}
//             >
//               <motion.div
//                 animate={{ scale: isRecording ? [1, 1.2, 1] : 1 }}
//                 transition={{ duration: 0.5, repeat: isRecording ? Infinity : 0 }}
//               >
//                 {isRecording ? (
//                   <MicOff className="w-5 h-5 text-red-400" />
//                 ) : (
//                   <Mic className="w-5 h-5 text-white" />
//                 )}
//               </motion.div>
//               <span className="text-xs font-medium">
//                 {isRecording ? 'Stop' : 'Call AI agent'}
//               </span>
//             </motion.button>
//           </div>
//         </motion.div>

//         {/* Powered by */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: showMicButton ? 1 : 0, y: showMicButton ? 0 : 20 }}
//           transition={{ delay: 0.8, duration: 0.5 }}
//           className="text-gray-400 text-sm mt-4"
//         >
//           Powered by <span className="text-white font-medium">Shivohini TechAI</span>
//         </motion.div>
//       </div>

//       {/* Recording Status Popup */}
//       <AnimatePresence>
//         {showPopup && (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8, y: 50 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.8, y: 50 }}
//             transition={{ duration: 0.3 }}
//             className="fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-black/90 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-3 text-white z-50"
//           >
//             <div className="flex items-center gap-3">
//               <div className={`w-3 h-3 rounded-full ${isRecording ? 'bg-red-500 animate-pulse' : 'bg-green-500'}`}></div>
//               <span className="text-sm font-medium">
//                 {isRecording ? 'Recording in progress...' : 'Recording stopped'}
//               </span>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Ambient particles */}
//       <div className="absolute inset-0 overflow-hidden">
//         {[...Array(20)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-1 h-1 bg-white/20 rounded-full"
//             initial={{
//               x: Math.random() * window.innerWidth,
//               y: Math.random() * window.innerHeight,
//             }}
//             animate={{
//               x: Math.random() * window.innerWidth,
//               y: Math.random() * window.innerHeight,
//             }}
//             transition={{
//               duration: Math.random() * 20 + 10,
//               repeat: Infinity,
//               repeatType: "reverse",
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ElevenLabsInterface;
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, MicOff, PhoneOff } from 'lucide-react';

const VoiceAssistant = () => {
  const [conversation, setConversation] = useState([]);
  const [isRecording, setIsRecording] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [currentStep, setCurrentStep] = useState('idle');
  const [agentStatus, setAgentStatus] = useState('Ready');
  const [showInterface, setShowInterface] = useState(false);

  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const streamRef = useRef(null);
  const sessionIdRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowInterface(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const showMessage = (msg) => {
    setPopupMessage(msg);
    setTimeout(() => setPopupMessage(''), 3000);
  };

  const playAudioResponse = async (audioBase64) => {
    try {
      const binary = atob(audioBase64);
      const buffer = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i++) buffer[i] = binary.charCodeAt(i);

      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const audioBuffer = await audioContext.decodeAudioData(buffer.buffer);
      const source = audioContext.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(audioContext.destination);

      return new Promise(resolve => {
        source.onended = resolve;
        source.start();
      });
    } catch (err) {
      console.error('Audio playback error:', err);
    }
  };

  const initializeAudio = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = e => audioChunksRef.current.push(e.data);
      mediaRecorderRef.current.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        audioChunksRef.current = [];
        await sendAudioToBackend(audioBlob);
      };
      return true;
    } catch (err) {
      showMessage('Microphone permission needed');
      return false;
    }
  };

  const sendAudioToBackend = async (audioBlob) => {
    setCurrentStep('processing');
    const formData = new FormData();
    formData.append('audio', audioBlob, 'recording.webm');
    formData.append('session_id', sessionIdRef.current);
    try {
      const res = await fetch('http://localhost:5000/api/voice-chat', {
        method: 'POST',
        body: formData
      });
      const data = await res.json();
      if (data.success) {
        setConversation(prev => [...prev, { type: 'user', text: data.user_text }, { type: 'agent', text: data.agent_response }]);
        setAgentStatus('Speaking...');
        await playAudioResponse(data.audio_response);
        setAgentStatus(data.status || 'Listening...');
        await startRecording();
      }
    } catch (err) {
      showMessage('Communication error');
    } finally {
      setCurrentStep('idle');
    }
  };

  const startRecording = async () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'inactive') {
      mediaRecorderRef.current.start();
      setIsRecording(true);
      setCurrentStep('listening');
      setAgentStatus('Listening...');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const startCall = async () => {
    if (!await initializeAudio()) return;
    const res = await fetch('http://localhost:5000/api/voice-init');
    const data = await res.json();
    if (data.success) {
      sessionIdRef.current = data.session_id;
      setConversation([{ type: 'agent', text: data.agent_response }]);
      await playAudioResponse(data.audio_response);
      await startRecording();
      setIsConnected(true);
    }
  };

  const handleMicClick = () => {
    if (!isConnected) startCall();
    else isRecording ? stopRecording() : startRecording();
  };

  const disconnect = () => {
    streamRef.current?.getTracks().forEach(t => t.stop());
    setIsConnected(false);
    setIsRecording(false);
    setConversation([]);
    setAgentStatus('Ready');
    sessionIdRef.current = null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            }}
            animate={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Live Conversation Panel */}
      <motion.div 
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="absolute top-4 left-4 w-72 max-h-60 overflow-y-auto bg-black/70 border border-gray-700 rounded-xl p-4 text-white text-sm shadow-xl backdrop-blur-md z-50"
      >
        <h2 className="font-semibold mb-2 text-yellow-400">Live Conversation</h2>
        <div className="space-y-2">
          {conversation.length === 0 ? (
            <p className="italic text-gray-400">No messages yet...</p>
          ) : (
            conversation.map((msg, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`text-sm flex gap-2 ${msg.type === 'user' ? 'text-blue-400' : 'text-green-400'}`}
              >
                <span className="font-semibold">
                  {msg.type === 'user' ? '🧑‍💬 You:' : '🤖 Agent Shreyash:'}
                </span>
                <span>{msg.text}</span>
              </motion.div>
            ))
          )}
        </div>
      </motion.div>

      {/* Status Panel */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="absolute top-4 right-4 bg-black/70 border border-gray-700 rounded-xl p-4 text-white text-sm shadow-xl backdrop-blur-md z-50"
      >
        <h2 className="font-semibold mb-2 text-cyan-400">Status</h2>
        <div className="flex items-center gap-2">
          <motion.div 
            className={`w-3 h-3 rounded-full ${isConnected ? (isRecording ? 'bg-green-500' : 'bg-yellow-500') : 'bg-gray-500'}`}
            animate={{ scale: isRecording ? [1, 1.2, 1] : 1 }}
            transition={{ duration: 0.5, repeat: isRecording ? Infinity : 0 }}
          />
          <span className="text-white">{agentStatus}</span>
        </div>
        <div className="mt-2 text-xs text-gray-400">
          Step: {currentStep}
        </div>
      </motion.div>

      {/* Main Header */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: -50 }}
        animate={{ 
          opacity: showInterface ? 1 : 0,
          scale: showInterface ? 1 : 0.5,
          y: showInterface ? -60 : -50
        }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="mb-12 z-10"
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-yellow-400 tracking-wide text-center"
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1 }}
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

      {/* Main Voice Interface Circle */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: showInterface ? 1 : 0,
          scale: showInterface ? 1 : 0
        }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        className="relative w-80 h-80 mb-8 z-10"
      >
        {/* Outer Rotating Ring */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-conic from-green-400 via-pink-500 via-purple-500 to-green-400 p-1 shadow-2xl shadow-purple-500/30"
          animate={{ rotate: isConnected && isRecording ? 360 : 0 }}
          transition={{
            duration: 2,
            repeat: isConnected && isRecording ? Infinity : 0,
            ease: "linear"
          }}
        >
          <div className="w-full h-full rounded-full bg-gray-900"></div>
        </motion.div>

        {/* Inner Circle with Controls */}
        <div className="absolute inset-4 rounded-full bg-gradient-to-br from-cyan-200/50 via-blue-300/50 to-indigo-400/50 backdrop-blur-sm shadow-xl shadow-cyan-400/20 border border-cyan-400/30 flex flex-col items-center justify-center gap-6">
          
          {/* Main Control Button */}
          <motion.button
            onClick={handleMicClick}
            className="w-24 h-24 bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/90 transition-all duration-300 border border-white/20 z-10 shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={currentStep === 'processing'}
          >
            <motion.div
              animate={{ 
                scale: isRecording ? [1, 1.2, 1] : 1,
                rotate: currentStep === 'processing' ? 360 : 0
              }}
              transition={{ 
                scale: { duration: 0.5, repeat: isRecording ? Infinity : 0 },
                rotate: { duration: 1, repeat: currentStep === 'processing' ? Infinity : 0, ease: "linear" }
              }}
            >
              {currentStep === 'processing' ? (
                <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : isRecording ? (
                <MicOff className="w-8 h-8 text-red-400" />
              ) : (
                <Mic className="w-8 h-8 text-white" />
              )}
            </motion.div>
          </motion.button>

          {/* Button Label */}
          <motion.span 
            className="text-white text-sm font-medium text-center"
            animate={{ opacity: currentStep === 'processing' ? 0.5 : 1 }}
          >
            {currentStep === 'processing' ? 'Processing...' : 
             isRecording ? 'Stop Recording' : 
             isConnected ? 'Start Listening' : 'Start Call'}
          </motion.span>

          {/* Disconnect Button */}
          <AnimatePresence>
            {isConnected && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={disconnect}
                className="flex items-center gap-2 px-4 py-2 bg-red-600/80 hover:bg-red-600 text-white text-sm rounded-full transition-all duration-300 backdrop-blur-sm border border-red-400/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <PhoneOff className="w-4 h-4" />
                End Call
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Powered By */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: showInterface ? 1 : 0, y: showInterface ? 0 : 20 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="text-gray-400 text-sm z-10"
      >
        Powered by <span className="text-white font-medium">Shivohini TechAI</span>
      </motion.div>

      {/* Enhanced Popup Messages */}
      <AnimatePresence>
        {popupMessage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-black/90 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-3 text-white z-50 shadow-xl"
          >
            <div className="flex items-center gap-3">
              <motion.div 
                className="w-3 h-3 rounded-full bg-yellow-500"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              />
              <span className="text-sm font-medium">{popupMessage}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VoiceAssistant;