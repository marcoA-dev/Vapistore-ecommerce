import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

// Importacion de Estilos
import vapistorelogo from "../assets/vapistorelogo.png";
import "../Styles/NavBar.css";


const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <img
            src={vapistorelogo}
            alt=""
            width="70"
            height="70"
            className="LogoBrand"
          ></img>
          <Link className="navbar-brand NameStore" to="/">
            Vapistore
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <div className="dropdown">
                <Link
                  className="btn dropdown-toggle "
                  to={"/"}
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Categoria
                </Link>

                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={"/category/vaper"}>
                      Vaper
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/category/liquido"}>
                      Liquido
                    </Link>
                  </li>
                </ul>
              </div>
              <li className="nav-item">
                <Link className="nav-link" to="/item/:id">
                  Productos
                </Link>
              </li>
            </ul>
            <span className="CartWidget">
              <CartWidget></CartWidget>
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
