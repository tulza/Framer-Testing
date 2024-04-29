import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import WebsiteTransitionAnimation from "./TransitionAnim/WebsiteTransitionAnimation";
import Home from "@components/pages/Home";
import PageNotFound from "@pages/PageNotFound";

const AnimatedRoute = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <WebsiteTransitionAnimation key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </WebsiteTransitionAnimation>
      </AnimatePresence>
    </>
  );
};

export default AnimatedRoute;
