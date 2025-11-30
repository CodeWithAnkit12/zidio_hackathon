import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Leaderboard from "./pages/Leaderboard";
import SubmitProject from "./pages/SubmitProject";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HackathonDetails from "./pages/HackathonDetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {

  // ⭐ Initialize AOS once on app load
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors">
        
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/submit" element={<SubmitProject />} />
            <Route path="/hackathon/:id" element={<HackathonDetails />} />
<Route path="/hackathon/:id" element={<HackathonDetails />} />
<Route path="/login" element={<Login />} />
<Route path="/signup" element={<Signup />} />

          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
