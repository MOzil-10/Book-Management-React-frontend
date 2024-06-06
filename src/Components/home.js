import React from "react";
import { Link } from "react-router-dom";

export function Home() {
    const pageStyle = {
        background: "linear-gradient(135deg, #8e44ad, #3498db, #e74c3c)",
        minHeight: "100vh",
        color: "#ffffff",
        padding: "20px",
    };

    return (
        <div style={pageStyle}>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h2>Welcome to Our Book Management System</h2>
                        <p>
                            Explore our collection of books, add new books, and manage your library efficiently.
                        </p>
                        <Link to="/books" className="btn btn-primary">Browse Books</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
