import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Menu from "./components/Menu";
function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/tasks" element={<Tasks />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
