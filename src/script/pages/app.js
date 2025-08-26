import HomePage from "./home.jsx";
import AddPage from "./add.jsx";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FooterBottom } from "../components/footer.jsx";

const routeLink = [
  {
    path: "/",
    element: <HomePage />,
  },
];

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {routeLink.map((rute, i) => (
          <Route
            key={i}
            path={rute.path}
            element={<motion.section>{rute.element}</motion.section>}
          />
        ))}
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
      <FooterBottom />
    </BrowserRouter>
  );
}
