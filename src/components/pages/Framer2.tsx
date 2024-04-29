import { motion } from "framer-motion";
import { useState } from "react";

const Framer2 = () => {
  return (
    <div className="grid h-dvh w-dvw place-items-center bg-[#ee33ff]">
      <MyComponent />
    </div>
  );
};

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

export const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav animate={isOpen ? "open" : "closed"} variants={variants}>
      <Toggle onClick={() => setIsOpen((isOpen) => !isOpen)} />
      <Items />
    </motion.nav>
  );
};

export default Framer2;
