import { useState } from "react";
import AQI from "./components/AQI/AQI";
import Navbar from "./components/header/Navbar";
import Login from "./components/login/Login";
import SignUp from "./components/login/SignUp";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="container-fluid">
      <Navbar
        isLoggedIn={isLoggedIn}
        showLogIn={setShowLogin}
        handleIsloggedin={setIsLoggedIn}
      />
      {isLoggedIn ? <AQI /> : <>{showLogin ? <Login handleLoggedIn={setIsLoggedIn} /> : <SignUp handleLoggedIn={setIsLoggedIn} />}</>}
    </div>
  );
}

export default App;
