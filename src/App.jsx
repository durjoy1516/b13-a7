import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Timeline from "./pages/Timeline";
import Stats from "./pages/Stats";
import FriendDetails from "./pages/FriendDetails";
import NotFound from "./pages/NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/friend/:id" element={<FriendDetails />} />

        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>

       {/* 🔥 Toastify */}
    <ToastContainer
  position="top-center"
  autoClose={1500}
  hideProgressBar
  closeOnClick
  pauseOnHover
  draggable
  theme="light"
  closeButton={false}
  toastClassName={() =>
    "bg-white text-gray-800 text-sm px-3 py-2 rounded-lg shadow-md flex items-center"
  }
  bodyClassName={() => "flex items-center gap-2"}
/>
    </BrowserRouter>
  );
}

export default App;