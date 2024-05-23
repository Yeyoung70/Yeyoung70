# 라우트란 무엇인가       
- 라우트 : 요청에 맞는 것을 보여준다! 
- 라우트 설정 장소 : react는 index.js 파일을 우선적으로 읽기 때문에 index.js 파일에 입력 또는 컴포넌트 형태로 가지고 온다.

`Routes 설정을 위한 import`
```jsx
import React from "react"; // 1. react를 사용하기 위한 import
import { Routes, Route } from "react-router-dom"; // 2. Routes, Route import
import { BrowserRouter } from 'react-router-dom'; // 3. Routes를 감싸는 BrowserRouter

import Home from "../pages/Home"; // import 페이지정보이름 from 연결할 페이지 경로
import Asset from "../pages/Asset";
```
`Routes 설정 방법`

- Route : path와 element 지정이 필요하다
    - path : /Home, /Asset 과 같이 URL 상에 보일 경로를 적어준다.
    - element : 해당 경로에 어떤 것을 넣을지 지정해준다.
      - element 지정 방식 : element = {<페이지이름/>}


```jsx
const AllRoutes = () => { // const AllRoutes 함수 설정 부분
    return (
        // Route를 묶어줄 Routes 및 개별 Route 설정
      <BrowserRouter>  
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/asset" element={<Asset />} />
        </Routes> 
      <BrowserRouter>  
    )
}

export default AllRoutes;
```















# 화면을 이동하는 2가지 방법 useNavigate, Link

- Link : 클릭 시 단순 화면 이동만 필요할 때 + 프로젝트 내에서 페이지 전환하는 경우
- useNavigate : 어떤 조건에 따라서 화면 이동이 필요할 때 
    - 예시 : 로그인 버튼 클릭 시
        - 회원가입이 되어있는 사용자 : main page 이동
        - 회원가입이 되어있지 않은 사용자 : 회원가입 page 이동

`useNavigate, Link를 사용하기 위한 import문`   
```jsx
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
```

`Link 사용 방법 예시`
```jsx
const Login = () => {
  return ( // Route를 만들 때 설정한 path 경로를 to 속성값으로 지정
    <div>
      <Link to="/signup">회원가입</Link> 
    </div>
  );
}

export default Login;
```

`useNavigate 사용 방법 예시`
```jsx
const Login = () => {
  const navigate = useNavigate(); // 1. '함수안'에서 먼저 navigate를 만들어준다

  const goToMain = () => { // 2. navigate("/Route의 path에 설정한 경로")
    navigate("/main");
  };
  return (
    // onClick : 클릭 시 어디로 이동할지 지정
    <div>
      <button className="loginBtn" onClick={goToMain}> 
        로그인
      </button>
    </div>
  );
}

export default Login;
```
`추가 Tip`
- <button className="loginBtn" onClick={() => {navigate("/main")}}> : 익명함수로 바로 선언하기
- navigate(-1) : 이전 페이지로 이동


















# 바뀌는 값을 관리하는 useState
`useState import문`
```jsx
import { useState } from 'react';
```

`선언 방식`
```jsx
const [state, setstate] = useState('기본값')
// state : 현재 상태
// setstate : 상태를 변경하기 위한 함수
// '기본값' : 초기 설정값
```

`useState 활용 방법 - 단일값 상황`
```jsx
function example() {
    const [name, setname] = useState('홍길동')

    return (
        <div>
            <h1>이름 : {name}</h1>
            <button onClick={() => {setname('홍길순')}}>이름 변경</button>  
        </div> 
        // 이름 변경이라는 버튼을 누르면 -> 
        // setname 이라는 함수를 통해서 '''name을''' 홍길순으로 변경한다. 
    )
} 
```

`useState 활용 방법 - 딕셔너리 상황`
- 딕셔너리로 묶는 것은 단순히  요소가 많을 때가 아닌 '''연관 관계가 높은 것들이 여러 개 존재할 때''' 사용하는 것이 좋다.
```jsx
function UserCardSquashed() {
  const [user, setUser] = useState({
    name: "홍길동",
    age: 20,
    school: "민국대학교",
  });

  return (
    // user라는 변수안에 name, age, school이 한번에 지정 --> user.name과 같은 형태로 사용
    <div>
      <h1>이름: {user.name}</h1>
      <h2>나이: {user.age}</h2>
      <h3>학교: {user.school}</h3>
      <button
        onClick={() => {
          setUser({
            name: "홍길순",
            age: 22,
            school: "한국대학교",
          });
        }}
      >
        사람 변경
      </button>
    </div>
  );
}
```

`주의 사항`
- 컴포넌트 최상단에서 선언해야 한다.
- react 함수형 컴포넌트 내부에서만(class 형 불가) 선언이 가능하다.







# URL 속 파라미터에 대한 정보페이지를 구성하는 useParams 
`사용 상황`
- 예시 : 특정 제품을 클릭 시 제품의 세부 정보를 보여주는 페이지로 이동해서 특정 제품의 정보를 보여주고 싶은 경우
- 딕셔너리 안에 있는 id를 이용해서 

`useParams import문`
```jsx
import {useParams} from "react-router-dom";
```
`useParams 사용 방법`

```jsx
// 1. Route 구성 시 ":값" 으로 구성된 것은 자동으로 useParams에 "값" 으로 저장된다.
function App() {
  
  return (
  // :id --> 이 부분은 세부 페이지의 정보를 담은 id를 나타내는 부분
  <div className="App">
      <Routes>
        <Route path="/detail/:id" element={<Detail/>}/>
      </Routes>
  </div>
  // <Route path="/detail/:id" element={<Detail/>}/> --> :id 이 부분을 useParams()는 Params에 담는다.
  // const Params.id = useParams();  == const {id} = useParams(); 와 같다. (구조분해할당)
  )};

function Product() {
  
  const productList =[
  {id : 0, name : "Jorden1 Chicago", color: "red"},
  {id : 1, name : "Jordan1 Oreo", color: "black"}, 
  {id : 2, name : "Jorden1 Smokegrey", color: "grey" },
  ]
  
  const {id} = useParams(); // id와 같은 딕셔너리에 있는 내용을 바탕으로 화면을 구성한다.
  return (
  	<div className="product-list">
    	<h3> productList[id].name </h3>
      	<p> productList[id].color </p>
    </div>
  )
  };

  // 만약 detail/1 이면 id 는 1이 할당되고 productList 에서 2번쨰 딕셔너리에 대한 정보를 가지고 온다.
```







# Props 설정하고 받아오기

`사용 상황`
- 컴포넌트를 구성하고 컴포넌트에 어떤 변수/상수/함수 등을 해당 컴포넌트의 특징으로 부여하고자 할 때 
- 1. 컴포넌트 안에서 특징을 부여하기 
- 2. 컴포넌트를 {인자} 로 받아오기

`예시 코드`
```jsx
// App.jsx

import React from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';

import Props from "./pages/Props";

const App = () => { 
  
  const prop_amount = "컴포넌트를 통해서 Prop을 받아왔습니다.";
 
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/props" element={<Props exam_prop = {prop_amount}/>}/>
          {/* exam_prop이라는 특징을 Props 컴포넌트에 부여 */}
        </Routes>
      </div>
    </BrowserRouter>
  )
}
export default App;


// Props.jsx

const Props = ({exam_prop}) => { // 컴포넌트에서 부여한 exam_prop을 받아오기 
  return (
    <div>
      <div>Props 페이지 입니다</div>
      <div>{exam_prop}</div> {/* --> 컴포넌트를 통해서 Prop을 받아왔습니다. */}
    </div>
    
  )
}
export default Props;
```



# React-icon 사용하는 방법
`1. React-icon 설치를 위한 터미널 창 입력`
```
npm install react-icons --save
```

`2. React-icon 사이트에 들어가서 원하는 아이콘 import 문 COPY 후 Component 로 사용하기`
```jsx
import React from 'react'
import { FaBeer } from 'react-icons/fa';
// React-icon 홈페이지에서 원하는 icon import 문 복사하기
const Props = ({exam_prop}) => {
  return (
    <div>
      <div>Props 페이지 입니다</div>
      <div>{exam_prop}</div>
      <div><FaBeer/></div>
      {/* 컴포넌트 형태로 활용하기 */}
    </div>
    
  )
}
export default Props;
```



# 삼항 연산자 활용하기
`삼항 연산자 기본 형태`
```
조건 ? 참일 때 반환 값 : 거짓일 때 반환값
```


`예제 코드`


```jsx
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import TotalAsset from "./Asset/TotalAsset"
import RollingAsset from "./Asset/RollingAsset"
import FindLoan from "./Asset/FindLoan"
import "./Asset.css"

const Asset = () => {
  const navigate = useNavigate();
  const [assetPage, setAssetPage] = useState(0); // default

  return (
    <div className='Asset'>
      <div className='app-bar'>
        {/*뒤로 가기 버튼*/}
        <div onClick={() => {navigate(-1)}}>
          <FaArrowLeft size={24}/>
        </div>

        <div>편집</div>
      </div>
      
      {/*자산 탭 , 자산 굴리기 탭, 대출 찾기 탭 */}
      <div className='menu-bar'>
        {/* 삼항 연산자 활용 예시  */}
        <div className={assetPage === 0 ? 'active' : ''}
              onClick={ () => {setAssetPage(0);} }>자산</div>
        <div className={assetPage === 1 ? 'active' : ''}
              onClick={ () => {setAssetPage(1);} }>자산 굴리기</div>
        <div className={assetPage === 2 ? 'active' : ''}
              onClick={ () => {setAssetPage(2);} }>대출 찾기</div>
      </div>

      {
        {/*assetPage의 3가지 값에 따라서 하단에서 보여줄 페이지를 결정 - 삼항 연산자 활용*/}
        assetPage === 0 ? <TotalAsset /> :
        assetPage === 1 ? <RollingAsset /> : <FindLoan />
      }
      
    </div>
  )
}

export default Asset
```



# useEffect(부수적인 것을 따로 관리하는 도구!)
`useEffect import 문`
```jsx
import { useEffect } from "react";
```
`useEffect 사용방법`
```jsx
// 1. 실행 조건 설정하기

useEffect(() => {
  // 매 렌더링마다 실행
});

useEffect(() => {
  // 컴포넌트가 처음 렌더링된 이후 실행
}, []);

useEffect(() => {
  // 컴포넌트가 처음 렌더링된 이후 실행
  // a나 b가 변경되어 컴포넌트가 재렌더링된 이후 실행
}, [a, b]);

// 2. clear 하기
useEffect(() => {
    // 조건에 맞는 렌더링 시 실행
    return () => {};
    // 2번 랜더링 시 부터 실행 -> 부수적인 효과를 시행하기 전 return 함수를 먼저 실행 후 다시 실행
  }, nothing, [], [a,b]);
```






















 


