import "@/styles/styles.css";
import "@/styles/fonts.css";
import "@/styles/scrollbar.css";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoute from "./route/AnimatedRoute";

function App() {
  return (
    <Router basename="/Framer-Testing">
      <AnimatedRoute />
    </Router>
  );
}

export default App;
