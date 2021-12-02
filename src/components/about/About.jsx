import React from 'react'; 
import './About.css'
import Header from '../../components/header/Header';
import go_down from '../../res/img/go_down.svg'
import Scroll from 'react-scroll';


function About() { 
    return (
    <>
    <header>
        <Header />
    </header>
    <div className="container">
        <div id="text">
            <p id="title">"About 양심 머시기"</p>
            <p id="sub_title">보이지 않는 무언가를 찾아서</p>
            <p id="content">보이지 않는 그 무언가<br />
            우리 가슴 속 깊은곳에 자리잡은<br />
            옳고 그름을 판단하는 도덕적 의식.<br />
            당신의 양심은 안녕하십니까?<br />
            <br />
            “양심 머시기”는 양심이 필요한 분들에게<br />
            양심을 판매하고 있는 서비스 입니다.<br />
            </p>
        </div>
        <div id="frame-1">
            <img id="go-down" src={go_down} onClick={ScrollBottom} />
        </div>
        <div id="frame-2">
            <div id="text">
                <p id="title">"대표 이준호"</p>
                <p id="content">안녕하십니까<br />
                    세계 유일 양심 상점 “양심 머시기”의 대표<br />
                    이준호 입니다.<br />
                </p>
            </div>    
        </div>
    </div>
    </>
    ); 
} 

export default About;

function ScrollBottom() {
    Scroll.animateScroll.scrollToBottom()
}