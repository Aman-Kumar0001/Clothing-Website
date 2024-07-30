import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                <div className="container fw-bold px-5 py-2">
                    <Link className="navbar-brand" to="/">Trendy<span className='text-danger'>Threads</span></Link>
                    <button
                        className="navbar-toggler d-lg-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavId"
                        aria-controls="collapsibleNavId"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/" aria-current="page">Home<span className="visually-hidden">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/OurProducts">Our Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="About/">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="Contact/">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
