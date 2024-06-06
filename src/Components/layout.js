import React from "react";
import { Link } from "react-router-dom";

export function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg" style={{ background: "linear-gradient(135deg, #8e44ad, #3498db, #e74c3c)" }}>
            <div className="container">
                <Link className="navbar-brand" to="/">Alex Forbes</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link text-white" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/books">Books</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export function Footer() {
    const footerStyle = {
        backgroundColor: "linear-gradient(135deg, #8e44ad, #3498db, #e74c3c)",
        color: "#ffffff",
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
    };

    return (
        <footer>
            <div className="text-center p-3" style={footerStyle}>
                © 2024 Copyright :
                <a className="text-body" > AlexForbes.com</a>
            </div>
        </footer>
    );
}

