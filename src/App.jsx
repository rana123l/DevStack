import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Technologies from "./Components/Technologies";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Technologies />
      <Footer />
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default App;