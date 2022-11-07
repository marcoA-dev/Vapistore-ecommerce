import CartWidget from "./CartWidget";
import "../Styles/NavBar.css"

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                <img src="assets/vapistorelogo.png" alt="" width="70" height="70" className="LogoBrand"></img>
                    <a className="navbar-brand NameStore" href="index">
                        Vapistore
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item Catalogo">
                                <a className="nav-link " aria-current="page" href="index.html">Catalogo</a>
                            </li>
                            <li className="nav-item Contacto">
                                <a className="nav-link" href="features.html">Contacto</a>
                            </li>
                            <li className="nav-item Nosotros">
                                <a className="nav-link" href="pricing.html">Sobre Nosotros</a>
                            </li>
                            <li className="nav-item Sucursales">
                                <a className="nav-link" href="pricing.html">Sucursales</a>
                            </li>
                        </ul>
                        <span className="CartWidget">
                            <CartWidget></CartWidget>
                        </span>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar