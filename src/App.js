/*eslint-disable*/

import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {

    //let post = '강남 우동 맛집';
    //let [postTitle_1, setPostTitle_1] = useState('남자 코트 추천');
    //let [postTitle_2, setPostTitle_2] = useState('강남 우동 맛집');
    //let [postTitle_3, setPostTitle_3] = useState('파이썬 독학');
    let [logo, setLogo] = useState('Ralph\'s React work page 1')
    /*a: state에 저장한 자료, b : state 변경을 도와주는 함수*/

    /*array ok*/
    let [postTitles, fn_postTitles] =
        useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학'])

    /*Destructuring 문법
    let num = [1, 2]; 1과 2가 너무 유용해서 변수로 빼기
    let a = num[0];
    let b = num[1];
    -->
    let[a, b] = [1, 2];*/

    /*왜 state를 써야 하나? (변수도 있는데?)
    변수는 html 자동 렌더링 되지 않는다.
    -> 수정이 발생하는 경우 - 변수의 내용 변경이 발생하는 경우!
        (강남 우동 맛집이 강북 우동 맛집으로 변경되는 경우)*/

    let [like, fn_like] = useState(0);

  return (
    <div className="App">
      <div className="black_nav">
          <h4>{ logo }</h4>
      </div>

    <button>
        가나다순 정렬
    </button>

    <button onClick={() => {
        let copy = [...postTitles];
        copy[0] = '여자 코트 추천';
        fn_postTitles(copy);
    }}> 추천 변경 </button>


    <div className="list">
        <h4>{ postTitles[0] }
            <span onClick={() => { fn_like(like + 1) }}>👍🏻</span>
            { like } </h4>
        <p>2월 17일 발행</p>
    </div>
    <div className="list">
        <h4>{ postTitles[1] }</h4>
        <p>2월 17일 발행</p>
    </div>
    <div className="list">
    <h4>{ postTitles[2] }</h4>
    <p>2월 17일 발행</p>
    </div>

    </div>
  );
}

export default App;
