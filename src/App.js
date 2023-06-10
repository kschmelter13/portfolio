import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Mainpage from "./pages/mainpage";

function App() {
  return (
    <Router>
      <div
        className="py-8 background bg-gradient-to-r from-blue-600 to-purple-700"
        style={{ zIndex: -4 }}
      >
        <Navbar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Mainpage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
