import "../Navbar/navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="navbar_container">
        <Link to="/">
          <h3 className="logo">PoMo</h3>{" "}
        </Link>

        <ul className="navbar_list">
          <Link to="/pomopage">
            <li>Timer</li>
          </Link>
          <Link to="/todo">
            <li>Task</li>
          </Link>
          <button className="btn btn-info">
            <Link to="/login">
              <li> Login</li>
            </Link>
          </button>
        </ul>
      </div>
    </>
  );
};
export { NavBar };
