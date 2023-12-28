import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import TextForm from "./components/TextForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
   const [mode, setMode] = useState('light');

   const [alert, setAlert] = useState(null);

   const showAlert = (message, type) => {
      setAlert({
         msg: message,
         type: type
      });
      setTimeout(() => {
         setAlert(null);
      }, 2000);
   }
   const toggleMode = () => {
      if (mode === 'light') {
         setMode('dark');
         document.body.style.backgroundColor = 'black';
         showAlert("Dark mode has been enabled", "success");
      } else {
         setMode('light');
         document.body.style.backgroundColor = 'white';
         showAlert("Light mode has been enabled", "success");
      }
   }

   return (
      <>
         <BrowserRouter>
            <Navbar title="TextUtils" about="About TextUtils" mode={mode} toggleMode={toggleMode} />
            <Alert alert={alert} />
            <Routes>
               <Route>
                  <Route index element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
                  <Route path="/about" element={<About />} />
               </Route>
            </Routes>
         </BrowserRouter>
      </>
   );
}

export default App;
