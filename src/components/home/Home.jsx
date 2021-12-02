import React from 'react';
import './Home.css'
import Header from '../../components/header/Header';
import red_highlight from '../../res/img/red_highlight.svg'
import go_down from '../../res/img/go_down.svg'
import { Link } from "react-router-dom";
import Scroll from 'react-scroll';



function Home() {
    return (
        <>
            <header>
                <Header />
            </header>
            <div className="container">
                <div className="frame" id="frame-1">
                    <p id="title">"양심을 팝니다"</p>
                    <img className="highlight" src={red_highlight} />
                    <img id="go-down" src={go_down} onClick={ScrollDown} />
                </div>
                <div className="frame" id="frame-2">
                    <p id="title">"양심"</p>
                    <p id="description">자기의 행위에 대하여 옳고 그름, 선과 악의 판단을 내리는 도덕적 의식</p>
                </div>
                <div className="frame" id="frame-3">
                    <p id="title">“당신은 양심이 있습니까?”</p>
                    <p id="description">당신의 오늘 하루를 되돌아보세요</p>
                </div>
                <div className="frame" id="frame-4">
                    <p id="title">“혹시 양심이 필요하시다면 . . .”</p>
                    <p id="go_to_buy">
                        <Link to="/products" style={{ textDecoration: 'none', color: 'black' }}>
                            양심 구매하기 -&gt;
                        </Link>
                    </p>
                    <img className="highlight" src={red_highlight} />
                </div>
            </div>
        </>
    );
}

export default Home;

function ScrollDown() {
    Scroll.animateScroll.scrollTo(900)
}