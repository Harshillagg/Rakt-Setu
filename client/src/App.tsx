import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./views/Home";
import Navbar from "./views/Navbar";
import Error from "./views/Error";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/Error" />} />
        <Route path="/Error" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;