import { Link } from "react-router-dom";

const Header = () =>{
    return(
    <>
    <header className=" d-flex align-items-center">
        <div className="container-fluid w-100">
            <div className="row d-flex align-items-center">
                <div className="col-xs-3">
                    <h1>jhhhhiii</h1>
                    <Link to={'/'}>
                    <img className="logo" src='https://img.freepik.com/premium-vector/pharmacy-logo-vector_23987-171.jpg'/>
                    <span className="ms-2 text-dark fw-bold">Pharmacy</span>
                    </Link>
                </div>
            </div>
        </div>
    </header>
    </>
    )
}

export default Header;