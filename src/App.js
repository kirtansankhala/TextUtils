// All Usefull Imports
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import About from "./components/About";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// Use State
function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  // Alert Function

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  // Mode Changing Function
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.transition = "1s";
      document.body.style.color = "white";
      showAlert("Dark Mode Enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.transition = "1s";
      document.body.style.color = "black";
      showAlert("Light Mode Enabled", "success");
    }
  };
  // JSX

  return (
    <>
      {/* <BrowserRouter> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes>
            <Route exact
              path="/"
              element={ */}
                <TextForm
                  showAlert={showAlert}
                  heading="Enter The Text Here"
                  mode={mode}
                  toggleMode={toggleMode}
                />
              {/* } */}
            {/* /> */}
            {/* <Route exact path="/about" element={<About />} />
          </Routes> */}
        </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
