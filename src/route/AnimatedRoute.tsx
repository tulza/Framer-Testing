import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import WebsiteTransitionAnimation from "./TransitionAnim/WebsiteTransitionAnimation";
import Home from "@components/pages/Home";
import PageNotFound from "@pages/PageNotFound";
import Framer1 from "@pages/Framer1";

const AnimatedRoute = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <WebsiteTransitionAnimation key={location.pathname}>
          <Routes location={location}>
            <Route path="/1" element={<Framer1 />} />
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </WebsiteTransitionAnimation>
      </AnimatePresence>
    </>
  );
};

export default AnimatedRoute;
