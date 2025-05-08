import { useRef, useEffect, useState } from "react";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import { Gift } from "lucide-react";
// import mypic from "../assets/mypic1.jpg"
import song from "../assets/birthdaySong.mp3"
const Page = () => {
  const [isGiftOpened, setIsGiftOpened] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (isGiftOpened) {
      audioRef.current?.play();

      const duration = 5 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = {
        startVelocity: 20,    // Slower initial speed
        spread: 360,
        ticks: 150,           // Lasts longer
        gravity: 0.6,         // Falls slower
        scalar: 1.4,          // Makes poppers bigger
        zIndex: 1000,
      };

      function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
      }

      const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) return clearInterval(interval);

        confetti({
          ...defaults,
          particleCount: 8, // Slightly more for each burst
          origin: { x: randomInRange(0.1, 0.9), y: 0 },
        });
      }, 250);
    }
  }, [isGiftOpened]);


  return (
    <div className="relative min-h-screen bg-transparent flex items-center justify-center">
      {/* Audio Element */}
      <audio ref={audioRef} src={song} />

      {/* Gift Button Section */}
      {!isGiftOpened && (
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <motion.button
            onClick={() => setIsGiftOpened(true)}
            className="bg-pink-600 text-white p-6 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
            animate={{
              rotate: [0, 5, -5, 5, -5, 0],
              transition: { repeat: Infinity, duration: 1 },
            }}
          >
            <Gift className="w-10 h-10" />
          </motion.button>
          <p className="mt-4 text-lg text-gray-700 font-semibold">
            Here is a gift from your friend 🎁
          </p>
        </motion.div>
      )}

      {/* Birthday Content */}
      {isGiftOpened && (
        <>
          <div className="absolute inset-0 bg-transparent justify-self-center"></div>

          <div className="relative z-10 flex flex-col items-center text-center max-w-3xl  px-4">
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold text-pink-600 mb-6 leading-tight"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              🎉Awais is Wishing you Happy Birthday!
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-800 mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              May this year you have tons of Happiness, Love, and Healthy Life! 🎁 🎈🎂
            </motion.p>
            <motion.div
              className="flex flex-row justify-center items-center gap-2 md:gap-4 mb-6 overflow-x-auto"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              <img
                src="https://i.gifer.com/2ukx.gif"
                alt="Birthday Cake"
                className="w-24 sm:w-28 md:w-36 lg:w-44 object-contain shrink-0"
              />
              {/*https://i.gifer.com/3rfL.gif */}
              <img
                src="https://i.gifer.com/3rfL.gif"
                alt="Balloon"
                className="w-30 h-30 sm:w-35 md:w-45 lg:w-55 sm:h-35 md:h-45 lg:h-55 object-cover shrink-0  "
              />
              <img
                src="https://i.gifer.com/2ukx.gif"
                alt="Party"
                className="w-24 sm:w-28 md:w-36 lg:w-44 object-contain shrink-0"
              />
            </motion.div>


            <motion.div
              className="text-2xl md:text-4xl flex flex-wrap justify-center gap-4"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
            >
              🎈 🎉 🎊 🥳 🎁 🎂 🍰 🎀 💖
            </motion.div>
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
