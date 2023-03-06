import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import About from "./components/About";
// import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0f2a45";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light mode";
    }
  };
  return (
    <>
    {/* <Router> */}
      <Navbar
        title="TextUtils"
        aboutText="about us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      {/* <Routes> */}
        {/* <Route exact path='/about' element={<About/>} /> */}
        {/* <Route exact path='/' element={<div className="container my-3"> */}
            <TextForm
              heading="Enter Your Text to analyze"
              mode={mode}
              showAlert={showAlert}
            />
          {/* </div>} /> */}
      {/* </Routes> */}
      {/* </Router> */}
    </>
  );
}

export default App;
