import React from 'react';
import './Products.css'
import Header from '../header/Header';
import { Link } from "react-router-dom";


function Products() {
    return (
        <>
            <header>
                <Header />
            </header>
            <div className="productsContainer">
                <div id="left">
                    <div className="item" id="item1" onClick={() => { setParameter(1) }}>
                        <p>양심 한 개</p>
                    </div>
                </div>
                <div id="right">
                    <div className="item" id="item2" onClick={() => { setParameter(2) }}>
                        <p>양심 한 묶음</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Products;

function setParameter(index) {
    window.location.href = "/item?item=" + index;
}

