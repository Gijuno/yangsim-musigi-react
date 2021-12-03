import React, { Component } from 'react';
import './Item.css'
import Header from '../header/Header';
var itemName = ""
var itemNum = '1'
var itemCount = 1
const description1 = "양심이 필요한 당신을 위해,\n\"양심 한 개\" 를 소개해드립니다.\n\n\"양심 한 개\" 는 당신의 하루를 되돌아보고,\n양심을 채우기 위해 제작되었습니다.";
const description2 = "양심이 필요한 당신을 위해,\n\“양심 한 묶음\” 패키지를 소개해드립니다.\n\n\“양심 한 묶음\" 패키지에는 양심 묶음 뿐 아니라,\n다양한 양심 굿즈들이 포함되어있습니다.";

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: 1
        };
    }

    render() {
        itemNum = getParameterByName("item")
        console.log(itemNum)

        // if (itemNum != "1" || itemNum != "2") {
        //     console.log(itemNum+" is not okay")
        //     alert("잘못된 접근입니다.");
        //     location.replace("/products");
        // }
        itemCount = this.state.inputValue
        return (
            <>
                <header>
                    <Header />
                </header>
                <div className="itemContainer">
                    <div className="introduce">
                        <p id="itemName">{itemNum == 1 ? "\"양심 한 개\"" : itemNum == 2 ? "\"양심 한 묶음\"" : ""}</p>
                        <div id="itemImg" style={itemNum == 1 ? { backgroundImage: "url('../../src/res/img/musigi-logo.png')" } : itemNum == 2 ? { backgroundImage: "url('../../src/res/img/musigi-package.png')" } : ""} />
                        <p id="title">당신의 양심, 오늘은 안녕하셨나요?</p>
                        <p id="itemDescription" style={{ whiteSpace: 'pre-wrap' }}>{itemNum == 1 ? description1 : itemNum == 2 ? description2 : ""}</p>
                    </div>
                    <div className="buy_div">
                        <div className="count_div">
                            <p>수량 : </p>
                            <input id="count" type="number" min={0} onChange={evt => this.updateInputValue(evt)} value={this.state.inputValue} />
                            <p>개</p>
                        </div>
                        <br /><p id="price">{"가격 : " + Number(this.state.inputValue) * Number(itemNum * 1000)}</p>
                        <div className="radius_button" id="addBag" onClick={addBag}>
                            <p>장바구니에 담기</p>
                        </div>
                        <div className="radius_button" id="kakao_buy" onClick={() => { buy('카카오페이') }}>
                            <p>Kakako Pay</p>
                        </div>
                        <div className="radius_button" id="toss_buy" onClick={() => { buy('토스') }}>
                            <p>toss</p>
                        </div>
                        <div className="radius_button" id="naver_buy" onClick={() => { buy('네이버 페이') }}>
                            <p>Naver Pay</p>
                        </div>
                    </div>
                </div>

            </>
        );
    }

    updateInputValue(evt) {
        this.setState({
            inputValue: evt.target.value
        });
    }
}

export default Item;

if(itemNum === '1') {
    itemName = "\"양심 한 개\""
} else {
    itemName = "\"양심 한 묶음\""
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function buy(payName) {
    console.log(payName)
    var buyConfirmResponse = confirm(payName + "로 " + itemName + " " + Number(itemCount) + "개를 구매하시겠습니까?")
    if(buyConfirmResponse===true) {
      alert("구매하기 기능은 아직 준비중입니다 ㅜㅜ\n불편을 드려 죄송합니다.")
    }
}

function addBag() {
    console.log('add bag')
    const baggedItem = Number(localStorage.getItem(itemName))
    localStorage.setItem(itemName,Number(itemCount)+Number(baggedItem))
    console.log(Number(itemCount)+Number(baggedItem))
    var bagConfirmResponse = confirm(itemName + " " + Number(itemCount) + "개가 장바구니에 담겼습니다!\n장바구니로 이동할까요?")
    if(bagConfirmResponse===true) {
      console.log("true")
      location.href = "/bag"
    }
  }
  