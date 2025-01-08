import React from "react";
import { Route, Routes } from "react-router-dom";

//components
import Home from './Home'
import SignUpPage from './SignUpPage'
import LoginPage from './LoginPage'
import ForgetPasswordPage from './ForgetPasswordPage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgetpassword" element={<ForgetPasswordPage />} />
      </Routes>
    </div>
  );
}

export default App;
