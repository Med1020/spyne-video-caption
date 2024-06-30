import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <>
      <header className="text-2xl font-bold text-left mb-8">
        Adding captions to video
      </header>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;
