import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { getToken} from "./db/LocalStorageService";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/"  element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/signup" element={<Signup/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
