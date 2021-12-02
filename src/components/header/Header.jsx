import React from 'react';
import { Link } from "react-router-dom";
import './Header.css'

function Header() {
    return (
        <>
            <div class="logo">
                <p>
                    <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
                        양심 머시기
                    </Link>
                </p>

            </div>
            <div class="pages">
                <p id="about">
                    <Link to="/about" style={{ textDecoration: 'none', color: 'black' }}>
                        About
                    </Link>
                </p>
                <p id="products">
                    <Link to="/products" style={{ textDecoration: 'none', color: 'black' }}>
                        Products
                    </Link>
                </p>
                <p id="bag">
                    <Link to="/bag" style={{ textDecoration: 'none', color: 'black' }}>
                        Bag
                    </Link>
                </p>
            </div>
        </>
    );
}

export default Header;