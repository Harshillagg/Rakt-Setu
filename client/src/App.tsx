import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./views/Home";
import Navbar from "./views/Navbar";
import Error from "./views/Error";
import LookingforBlood from "./views/LookingforBlood";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lookingforblood" element={<LookingforBlood />} />
        <Route path="*" element={<Navigate to="/error" />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;