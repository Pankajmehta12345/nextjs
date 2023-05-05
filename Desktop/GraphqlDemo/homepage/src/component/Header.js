import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import scandi from '../images/logo.png';
import Image from 'next/image'
import homepage from '../styles/homepage.module.css';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg" id={homepage.navbarExpand}>
            <div className="container-fluid" id={homepage.container}>
                <div className='col-12 row'>
                    <div className='col-4' id={homepage.brandImage}>
                        <a className="navbar-brand" href="#"><Image className={homepage.navImage} src={scandi} width={150} height={100} alt="logo"/></a>
                    </div>
                    <div className="col-5 collapse navbar-collapse" id="navbarSupportedContent">
                        <form className={homepage.flex} role="search">
                            <input className="form-control me-2" type="search" placeholder="Search products" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                    <div className='col-3' id={homepage.sideIcons}>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Header