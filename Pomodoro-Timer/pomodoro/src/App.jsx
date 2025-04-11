import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Timer from "./pages/Timer/Timer";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Timer></Timer>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
