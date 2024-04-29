import Card from "@components/Card";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="flex h-dvh w-dvw justify-between bg-[#252525]">
      <div className="full flex h-dvh w-full justify-center gap-8 overflow-x-hidden overflow-y-scroll">
        <div className="min-w-72">
          <div
            className="fixed h-dvh min-w-72 border-x border-[#AEAEAE] bg-[#222] text-white"
            style={{ boxShadow: "inset 0 -1em 1em rgba(0,0,0,0.5)" }}
          ></div>
        </div>
        <motion.div className="grid h-[max-content] grid-cols-1 gap-8 pt-8 lg:grid-cols-2 xl:grid-cols-3">
          {[...Array(10)].map((_, i) => (
            <Card key={i} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
