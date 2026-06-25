import { useNavigate } from "react-router-dom";
import "../assets/navbar.css";
function Menu() {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <div className="logo">
          <a href="#">Task Board</a>
        </div>

        <div className="links">
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={() => navigate("/tasks")}>Tasks</button>
          <button>Add Task</button>
          <button>About us</button>
        </div>
      </header>
    </>
  );
}

export default Menu;
