import React from 'react';
import './Bag.css'
import Header from '../../components/header/Header';

function Bag() {
    return (
        <>
            <header>
                <Header />
            </header>
            <div className="bagContainer">
                <p id="pageTitle">"장바구니"</p>
                <div className="itemImg" id="reset" onclick="reset()"><p>장바구니 초기화</p></div>
            </div>
        </>
    );
}

export default Bag;