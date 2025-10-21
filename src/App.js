import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import CitySignUp from "./components/CitySignUp";
import ResidentSignUp from "./components/ResidentSignUp";

function App() {
  const [currentView, setCurrentView] = useState("home");

  const renderContent = () => {
    switch (currentView) {
      case "home":
        return <HomePage onNavigate={setCurrentView} />;
      case "city-signup":
        return <CitySignUp onNavigate={setCurrentView} />;
      case "resident-signup":
        return <ResidentSignUp onNavigate={setCurrentView} />;
      default:
        return <HomePage onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <Navbar onNavigate={setCurrentView} />
      </header>
      <main className="App-main">{renderContent()}</main>
    </div>
  );
}

export default App;