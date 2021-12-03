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
                <div className="itemImg" id="reset" onClick={reset}><p>장바구니 초기화</p></div>
            </div>
        </>
    );
}

export default Bag;

const oneCount = localStorage.getItem("\"양심 한 개\"")
const packageCount = localStorage.getItem("\"양심 한 묶음\"")


// if (Number(packageCount) >= 1) {
//     document.getElementById("reset").insertAdjacentHTML('beforebegin', '<div class="itemImg" id="packageItem" onclick="gotoPackage()"><p>"양심 한 묶음" x' + packageCount + '</p></div>')
// }
// if (Number(oneCount) >= 1) {
//     document.getElementById("reset").insertAdjacentHTML('beforebegin', '<div class="itemImg" id="oneItem" onclick="gotoOne()"><p>"양심 한 개" x' + oneCount + '</p></div>')
// }

function reset() {
    localStorage.removeItem("\"양심 한 묶음\"");
    localStorage.removeItem("\"양심 한 개\"");
    location.replace("/bag/bag.html")
}

function gotoOne() {
    location.href = "item?item=1"
}

function gotoPackage() {
    location.href = "item?item=2"
}
