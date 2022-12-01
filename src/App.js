import React from "react";
import "./App.css";
import { Accounts } from "./components/Accounts";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <div style={{ minHeight: "76vh" }}>
        <Routes>
          <Route path="/" element={<Accounts />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
