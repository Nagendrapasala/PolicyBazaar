import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
