import { motion } from "framer-motion";

const Framer1 = () => {
  return (
    <div className="grid h-dvh w-dvw place-items-center bg-[#ee33ff]">
      <motion.div
        className="h-[200px] w-[200px] bg-white"
        animate={{
          scale: [1, 2, 3, 4, 3, 2, 1],
          rotate: [0, -90, 270, 270, 0, 0, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{ repeat: Infinity, duration: 2 }}
      />
    </div>
  );
};

export default Framer1;
