import "./App.css";

import Menu from "./pages/Menu";
import HomePage from "./pages/HomePage";
import Rules from "./pages/Rules";

import NavBar from "./components/MyNav";
import Footer from "./components/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/:game" element={<Menu />}></Route>
          <Route path="/rules" element={<Rules />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
