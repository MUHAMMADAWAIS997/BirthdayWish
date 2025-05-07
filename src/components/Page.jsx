import { motion } from "framer-motion";
import { useState } from "react";
import { Gift } from "lucide-react"; // Optional: You can replace with an emoji 🎁

const Page = () => {
  const [isGiftOpened, setIsGiftOpened] = useState(false);

  return (
    <div className="relative min-h-screen bg-transparent flex items-center justify-center ">
      {/* Gift Button Section (only visible initially) */}
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

      {/* Birthday Content Section (only visible after gift is opened) */}
      {isGiftOpened && (
        <>
          {/* Light overlay */}
          <div className="absolut inset-0 bg-transparent justify-self-center"></div>

          {/* Main Content */}
          <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mt-[30vh] px-4">
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold text-pink-600 mb-6 leading-tight"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              🎉 Awais is wishing you Happy Birthday! 🎂
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-800 mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              Wishing you tons of happiness, love, and cake! 🎁 🎈🎂
            </motion.p>

            <motion.img
              src="https://i.gifer.com/3rfL.gif"
              alt="Birthday Cake"
              className="w-full max-w-xs md:max-w-md h-auto object-contain mb-6"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              whileHover={{ scale: 1.05 }}
            />

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
