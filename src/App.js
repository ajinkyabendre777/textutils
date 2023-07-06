import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({
      type: type,
      message: message,
    });

    setTimeout(() => setAlert(null), 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#17202b";
      showAlert("success", "Dark mode enabled successfully!");

      document.title = "TextUtils - Dark Mode";

      // setTimeout(() => {
      //   document.title="Install Text Utils";
      // }, 1500);
      // setTimeout(() => {
      //   document.title="Text Utils is Amazing";
      // }, 2000);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("success", "Light mode enabled successfully!");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <BrowserRouter>
      <NavBar
        title="TextUtils"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
      ></NavBar>
      <Alert alert={alert}></Alert>
      <Routes>
      <Route path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} ></TextForm>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
