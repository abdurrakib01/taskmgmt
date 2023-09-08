import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { getToken} from "./db/LocalStorageService";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
function App() {
  const {access_token} =getToken();
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/"  element={access_token?<Home/>:<Navigate to='/login/'/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/signup" element={<Signup/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
