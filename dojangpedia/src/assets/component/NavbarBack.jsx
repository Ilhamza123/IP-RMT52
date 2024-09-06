import { Link } from "react-router-dom";

function NavbarBack() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src="/src/assets/pages/assets/taekwondo.png" width="30" height="30" className="d-inline-block align-top" alt="Taekwondo icon" loading="lazy" />
                    DojangPedia
                    <img src="/src/assets/pages/assets/taekwondo1.png" width="30" height="30" className="d-inline-block align-top" alt="Taekwondo icon" loading="lazy" />
                </Link>
                <Link to="/">
                    <button className="btn btn-primary">Back</button>
                </Link>
            </div>
        </nav>
    );
}

export default NavbarBack;