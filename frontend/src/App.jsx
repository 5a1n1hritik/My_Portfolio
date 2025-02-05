import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default App;
