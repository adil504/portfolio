import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Services from "./components/Services/Services.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Signup from "./components/signup/Signup.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Main content */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white text-center py-4">
          © 2025 ZM QR Code Services. All Rights Reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
