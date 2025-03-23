import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Tasks from "./pages/Tasks/Tasks";

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/tasks" element={<Tasks />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
