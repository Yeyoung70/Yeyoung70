alt+shift+위아래 -> 복사하면서 올라가기 내려가기
alt+위아래 -> 이동

# CSS 정리 

`css 필수 속성 정리`

### css 코드의 특징
- 적용 우선 순위와 개별성 : css 선택자 종류마다 각각의 개별성 점수를 부여하고 부여된 개별성 점수로 css 코드의 적용 우선 순위를 정한다.
    - 참고 링크 : https://webstudynote.tistory.com/81
- css 속성에 !important 를 붙이면 우선 적용된다.
    
- 요약 정보 
    - 더 구체적으로 작성할수록 우선적으로 반영된다.
    - 점수가 같을 시에는 나중에 작성된 것이 적용된다.
- 상속성 : 텍스트와 같은 inline적인 내용의 경우 부모 태그에 대해서 적용된 css는 자식 또는 하위 태그에 대해서도 적용이 된다.
- 비상속성 : 박스와 관련된 block과 관련된 내용은 상속되지 않는다 --> 예시) border: 1px solid aquamarine;
 

### 크기 단위 정리
- 절대 단위 : 예시) font-size = 16px (웹 브라우저의 default 단위는 16px이다.)
- 상대 단위 
    - em : font_size = 1em : 부모의 font-size에 대한 배율
    - rem : font-size = 1rem : 최상위 html font-size에 대한 배율
    - % : font-size = 90% : 기본 픽셀 16px에 대한 배율

### 색상 표기법 정리
- rgb 표기법 : 예시) color : rgb(255,0,0)
- rgba 표기법 : 예시) color : rgb(255,0,0,0.6) ---> 0.6 의미 : rgb 수치에 대해서 60%를 적용하기
- 16진수 표기법 : 예시) color : #0000ff

`선택자(selector) 정리`
```css
/* 전체 선택자 */
* {
color:blue;
}

/* 태그 선택자 */
h2 {
color:red;
}

/* 다중 요소 선택자 (콤마 구분) */
h3, h4 {
color:greenyellow;
font-size:12px;
}

/* 클래스 선택자 */
.purple {
color:purple;
}

/* 아이디 선택자 */
#orange {
color:orange;
}

/* 후손 셀렉터(아래 있는 것 전부 해당-띄워쓰기로 구분) */
.box p {
color:green;
}

/* 자식 셀렉터(바로 아래에 있는 것 > 로 지정) */
.box>p {
font-size:15px;
}

/* 속성 셀렉터 [속성명=속성값] 또는 [속성명] */
h1, [class="prop"]  {
    color:blue
}

/*  인접 형제 선택자(+) : 예시) 앞선택자+뒤선택자
    앞선택자와 형제 관계이면서 뒤선택자인 것 하나만 적용하기
10. 일반 형제 선택자(~) : 예시) 앞선택자~뒤선택자
    앞선택자와 형제 관계이면서 뒤선택자인 것 모두 적용하기 */

/* 인접 형제 선택자 a + b (+) :
   a 선택자와 형제인 """b 선택자 하나만""" 적용하기 */
h2 + h3 {
    color:black;
}

/* 일반 형제 선택자 a~b (~) :
   a 선택자와 형제인 """b 선택자 모두""" 적용하기 */
h2 ~ h3 {
    color:black;
}
```
<br>

`가상 요소 선택자` 

- 홍길동 -> 저는 홍길동 입니다 로 변경해야 할 때 5번의 저는 과 입니다를 추가 입력하는 것은 비효율적이다.

```html
<div>홍길동</div>
<div>홍길동</div>
<div>홍길동</div>
<div>홍길동</div>
<div>홍길동</div>
```

```css
/* content -> 가상 요소를 활성화 시키기! */
/* 쉽게 생각하면 앞뒤로 추가해야할 것이 있을 때 뒤에 추가하려면 ::after ,
   앞에 추가하려면 ::before 사용하기 */
div::after {
    content : " 입니다" ;
    /* 추가한 content에 대한 css 작업이 가능하다 */
}

div::before {
    content : "저는 " ;
    /* 추가한 content에 대한 css 작업이 가능하다 */
}

/* 출력 결과  */
저는 홍길동 입니다
저는 홍길동 입니다
저는 홍길동 입니다
저는 홍길동 입니다
저는 홍길동 입니다
```

`가상 클래스 선택자`
- 특정 조건이 만족했을 때만 css로 꾸미고 싶은 경우에 사용
- 가상 클래스 선택자 정리 사이트 : https://developer.mozilla.org/ko/docs/Web/CSS/Pseudo-classes

```css
/* 대표적인 것 실습 */
/* 링크를 만드는 경우 */

/* LVHA 순서 실습*/

/* 방문하지 않은 링크 */
a:link {
  color: blue;
}

/* 방문한 링크 */
a:visited {
  color: purple;
} 

/* 마우스를 올린 링크 */
a:hover {
  background: yellow;
} 

/* 활성화한 링크 : 누르고 뗄 때까지 */
a:active {
  color: red;
} 

/* 입력창 관련 */
/* 요소를 클릭 또는 탭하거나, 키보드 Tab 키로 선택했을 때 발동합니다. */
input:focus {
  color: red;
}

```

`배치(display-전시) 유형을 결정하는 display 속성 + width/height`
```css
selector {
    /* 줄 바꿈이 생기고 width와 height의 적용을 받는다. */
    display:block;

    /* 줄 바꿈이 생기지 않고, width와 height의 적용을 받지 않는다. 자기 자신의 영역만 차지한다. */
    display:inline;

    /* 줄 바꿈이 생기지 않고, width와  height의 적용을 받는다. */
    display:inline-block;

    /* 가려지고 공간 자체에서 완전 삭제 */
    display:none;

    /* flex 모드 진입 ---> 추가 속성과 함께 */
    display:flex;
    
    /* grid 모드 진입 ---> 추가 속성과 함께 */
    display:grid;
}
```







`css 속성 : justify-content (가로에 대한 움직임, start : 왼쪽)`
- flex-start: 요소들을 컨테이너의 왼쪽으로 정렬합니다.(default)
- flex-end: 요소들을 컨테이너의 오른쪽으로 정렬합니다.
- center: 요소들을 컨테이너의 가운데로 정렬합니다.
<br>

- space-between: 요소들 사이에 동일한 간격을 둡니다. 끝에 있는 것은 끝으로 붙입니다
- space-around: 요소들 주위에 동일한 간격을 둡니다. 끝 공간 또한 동일한 간격을 둡니다.
- space-evenly : 요소들 주위에 균등한 간격

```css
selector {
    justify-content:flex-start;
    justify-content:flex-end;
    justify-content:center;

    justify-content:space-between;
    justify-content:space-around;
    justify-content:space-evenly;
}
```

`css 속성 : align-items (세로에 대한 움직임, start : 위, 뭉텅이에 대한)`
- 컨테이너 안에서 어떻게 모든 요소를 정렬하는지 결정

- flex-start: 요소들을 컨테이너의 꼭대기로 정렬합니다.
- flex-end: 요소들을 컨테이너의 바닥으로 정렬합니다.
- center: 요소들을 컨테이너의 세로선 상의 가운데로 정렬합니다.

- baseline: 요소들을 컨테이너의 시작 위치에 정렬합니다.
- stretch: 요소들을 컨테이너에 맞도록 늘립니다.(default)

```css
selector {
    align-items:flex-start;
    align-items:flex-end;
    align-items:center;
    /* 글자의 아래쪽으로 정렬한다! */
    align-items:baseline;
    align-items:stretch;(default)
}
```

`css 속성 : align-self (세로에 대한 움직임, start : 위, 개별요소에 대한)`
- align-items와 속성 동일

`css 속성 : flex-direction`
- row: 요소들을 텍스트의 방향과 동일하게 정렬합니다.
- row-reverse: 요소들을 텍스트의 반대 방향으로 정렬합니다.
    - justify-content/align-items의 start 또한 바뀝니다
- column: 요소들을 위에서 아래로 정렬합니다.
    - justify-content : 기존 가로 방향 --> 세로 방향으로 바뀜 
    - align-items : 기존 세로 방향 --> 가로 방향으로 바뀜
- column-reverse: 요소들을 아래에서 위로 정렬합니다.
    - justify-content/align-items의 start 또한 바뀝니다

```css
selector{
    flex-direction:row;
    flex-direction:row-reverse;
    flex-direction:column;
    flex-direction:column-reverse;
}
```


`css 속성 : flex-wrap(한 줄 모으기, 여러 줄로 펼치기, 여러줄에 반대로 펼치기)`
- nowrap: 모든 요소들을 한 줄에 정렬합니다.
- wrap: 요소들을 여러 줄에 걸쳐 정렬합니다.
- wrap-reverse: 요소들을 여러 줄에 걸쳐 반대로 정렬합니다.
```css
selector{
    flex-wrap:nowrap;
    flex-wrap:wrap;
    flex-wrap:wrap-reverse;
}
```

`css 속성 : 자주 같이 쓰이는 flex-direction & flex-wrap 한번에 쓰기! : flex-flow`
- 2가지 속성의 값을 조합해서 쓰기
- 예시 코드
```css
selector {
    flex-flow : wrap column;
}
```


`css 속성 : order`

- ABC 순으로 서있을 때 ACB 순으로 순서를 바꾸고 싶다면 어떻게 해야 할까? 
- order : 양수; --> 오른쪽이랑 순서바꾸기
- order : 음수; --> 왼쪽이랑 순서바꾸기
- 절댓값 -> 이동시킬 칸 수 
- 여러 요소에 대해서 적용이 될 경우 떨어져있더라도 합치고 순서를 정렬한다.
```css
/* ex:.b */
selector{
    order:1;
    order:-1;
}
```

`css 속성 : 여러 줄들 사이의 간격을 지정하는 align-content`
- 하나의 줄에는 적용이 되지 않는다.
- flex-start: 여러 줄들을 컨테이너의 꼭대기에 정렬합니다.
- flex-end: 여러 줄들을 컨테이너의 바닥에 정렬합니다.
- center: 여러 줄들을 세로선 상의 가운데에 정렬합니다.
- space-between: 여러 줄들 사이에 동일한 간격을 둡니다.
- space-around: 여러 줄들 주위에 동일한 간격을 둡니다.
- stretch: 여러 줄들을 컨테이너에 맞도록 늘립니다.


```css
selector{
    align-content:flex-start;
    align-content:flex-end;
    align-content:center;

    align-content:space-between;
    align-content:space-around;
    align-content:stretch;
}
```

`flex 관련 종합 정리`


1. display : flex; ---> 유연한 배치 설정 : 기본값 -> flex-direction:row

2. flex-direction으로 주 축을 설정하기
- flex-direction:row; --> display:flex; 의 기본축과 설정이 같다(|------>)
- flex-direction:row-reverse; ---> 오른쪽 끝에서 시작해서 왼쪽(<------|)
- flex-direction:column;  --> 위 끝에서 시작해서 아래
- flex-direction:column-reverse; --> 아래 끝에서 시작해서 위

3. flex-direction으로 축이 바뀌었을 때
- justify-content : 축과 동일한 방향에 대해서 영향을 미친다.
- align-items : 축과 수직 방향으로 영향을 미친다.


`SHAPE and Font and Color 관련 css속성`
```css
selector {
    /* content(글자)의 색깔  */
    color:violet;

    /* content(글자)의 영역 내 위치 나타내기 */
    text-align: center;
    /* text-align 종류 */
    /* right : 오른쪽 정렬   left : 왼쪽 정렬   center : 가운데 정렬  justify : 양쪽 맞춤 정렬(양끝 균등 분배) 
    start : 텍스트 방향에 따라서 왼쪽 또는 오른쪽 시작위치로 정렬
    end : 텍스트 방향에 따라서 왼쪽 또는 오른쪽 끝 위치로 정렬 */

    /* 영역의 색깔 */
    background-color: violet;
    
    /* content(글자)의 크기 */
    font-size:12px;
    
    /* 테두리 개별 표현 */

    /* 1. 테두리 굵기 */
    border-width: 2px;
    /* 2. 테두리 스타일 */
    border-style: dashed;
    /* 3. 테두리 색깔 */
    border-color: red;

    /* 테두리 종합 표현 -> 테두리 크기, 테두리 스타일, 테두리 색깔 */
    border: 1px solid aquamarine;
    
    /* 테두리 종류 */
    /* solid :	실선  dotted : 짧은 점선  dashed : 긴 점선  double : 두줄 실선  outset : 안쪽 어둡게
    inset :	outset 반대  groove : 파인선  ridge :	불룩한 선  */

    /* 영역의 너비 결정 */
    width: 70px;

    /* 영역의 높이 결정 */
    height : 70px;

    /* width와 height에 포함되는 것을 결정하는 box-sizing */
    
    /* width와 height에 content만 포함이 되고, border와 padding은 밖에 추가 */
    box-sizing: content-box;
    /* width와 height에 content, padding, border를 모두 포함. 전체 크기를 지정할 때 유용. */
    box-sizing: border-box;

    
    
    /* 영역(상자)의 모서리 모양 결정 */

    /* 모든 모서리에 10px 반경 */
    border-radius: 10px; 
    /* 시계 방향 */
    border-radius: 10px 20px 30px 40px; 
    /* 수평 반경 50px /  수직 반경 25px --> 타원형 만들기 */
    border-radius: 50px / 25px; 

    /* 정리해야 할 내용 */
    display
} 
```


`margin 과 padding`
- margin : 영역 밖의 공간을 조절
- padding : 영역 내의 공간을 조절

```css
selector {
    margin:1rem;
    padding:.5rem;


    /* 상하, 좌우  */
    margin: 10px 15px;
    padding: 10px 5px;

    /* 상, 좌우, 하  */
    margin: 10px 15px 13px;
    padding: 10px 5px 13px;

    /* 시계방향 : 상, 우, 하, 좌  */
    margin: 10px 15px 13px 17px;
    padding: 10px 5px 13px 17px; 


    margin-top: 10px;   /* 위쪽 여백 10px */
    margin-right: 15px; /* 오른쪽 여백 15px */
    margin-bottom: 20px;/* 아래쪽 여백 20px */
    margin-left: 25px;  /* 왼쪽 여백 25px */

    padding-top: 10px;    /* 위쪽 내부 여백 10px */
    padding-right: 15px;  /* 오른쪽 내부 여백 15px */
    padding-bottom: 20px; /* 아래쪽 내부 여백 20px */
    padding-left: 25px;   /* 왼쪽 내부 여백 25px */
}
```





`공간 상의 가시성을 조절하는 visibility 속성`
```css
selector {
    visibility : visible;(default 기본값)
    
    /* hidden : 화면 상에서 가리지만, 차지하는 영역은 보존시킨다.  */
    visibility : hidden;
    
    /* collapse : 1. 테이블 요소에서 사용 : 화면 상 가리고, 영역도 제거 2. 비테이블 요소에서 사용 : hidden과 동일  */
    visibility : collapse;

}
```

`요소의 화면 상 위치를 결정하는 position속성 + 위치값 : top/bottom/right/left`
- 종류 : static, relative, absolute, fixed, sticky

    - static -> default : 위치값의 영향을 받지 않는다.

    - relative -> 나의 """현 위치"""를 중심으로 위치값을 적용한다.

    - absolute -> 부모와의 연결이 끊기기 때문에 고유 영역에서 사라지고, 자기 자신의 크기만 가진다. 빠진 영역은 다른 요소가 채운다.
        - 1. 위치값을 주지 않을경우 : 자동으로 부모와 연결되었을 때의 start 값으로 이동
        - 2. 위치값이 주어진 경우 
            - 부모의 position이 static인 경우 : 화면 왼쪽 상단 끝(body) 기준으로 위치값을 적용한다. 
            - 부모의 position이 static이 아닌 경우 : 부모의 영역의 왼쪽 상단 끝 기준으로 위치값을 적용한다.

    - fixed -> 부모와의 연결이 끊기기 때문에 고유 영역에서 사라지고, 자기 자신의 크기만 가진다. 빠진 영역은 다른 요소가 채운다.
        - 위치값이 주어지지 않은 경우 : 원래 자신의 고유 위치에 위치하고 화면에 고정(스크롤 무시)
        - 위치값이 주어진 경우 : 화면 왼쪽 상단 끝(body)를 기준으로 위치값을 적용하고 화면에 고정(스크롤 무시)
    - sticky 
        - 부모 요소 내에서만 고정이 된다.
        - 자기 자신을 담고 있는 것의 가장 위 또는 왼쪽에 위치
        - 자기 자신이 ""보일 때만"" 화면에서 고정된다. 

```css
selector {
    position: static;
    position: relative;
    position: absolute;
    position: fixed;
    position: sticky;
    /* 위치값 */
    top:0px;
    bottom:0px;
    left:0px;
    right:0px;
}
```

`반응형 웹페이지 만드는 법`
```css
/* 기본 속성 지정 */
selector {
}

/* 576px 이상일 때 적용할 css 속성 */
@media (min-width : 576px) {
    selector {
    }
}
```



# Bootstrap

`Bootstrap 기본 사용법`    
Bootstrap? => css 스타일을 미리 만들어놓고, 필요할 때 적용하는 것(class의 속성값으로 사전 정의된 css 스타일링 적용)
> Bootstrap 정리 사이트 : https://getbootstrap.com/

- 연결방법- 1  
    - 1. bootstrap 사이트 들어가서 필요한 css, js 파일 링크를 웹 상에 띄우고
    - 2. ctrl + s로 필요한 폴더에 저장하기
    - cdn 이용 시 저장하고 폴더에 옮길 필요 없다.

- 연결방법- 2
    - https://cdn..... 으로 구성된 것 연결하기    
    - CDN(Contents Delievery Network)이란?    
        - Bootstrap js,css 파일을 가져오는 것         
        - 정적 파일들(이미지, 동영상, css, js, html, pdf, hwp)을 전송하는 네트워크  
    - 장점 : cdn 상에서 불러오기 때문에 프로젝트 파일의 용량을 줄일 수 있다.
    - 아마존 AWS의 S3로 대체 가능

- 활용법
    - 사이드에 분류된 사이트 직접 들어가서 확인하기
    - selector에 지정된 색깔을 보는 방법 : https://getbootstrap.com/docs/5.3/customize/color/
    

`Bootstrap 반응형 옵션 관리`

| 화면 크기  | 설명         | 픽셀 기준    |
|------------|--------------|--------------|
| xs         | 초소형       | <576px       |
| sm         | 소형         | ≥576px       |
| md         | 중형         | ≥768px       |
| lg         | 대형         | ≥992px       |
| xl         | 초대형       | ≥1200px      |
| xxl        | 초초대형     | ≥1400px      |
- 0 ~xs~ 576 ~sm~ 768 ~md~ 992 ~lg~ 1200 ~xl~ 1400 ~ xxl
<hr>

| 화면 크기      | 클래스                                   | 해석                                | 나타나는 시점 (px) | 사라지는 시점 (px)  |
|---------------|------------------------------------------|------------------------------------|--------------------|---------------------|
| 모든 화면     | .d-none                                  | 모든 화면에서 숨기기                | -                  | -                   |
| xs에서 숨기기 | .d-none .d-sm-block                      | xs (초소형) 화면에서만 숨기기       | <576               | ≥576                |
| sm에서 숨기기 | .d-sm-none .d-md-block                   | sm (소형) 화면에서만 숨기기         | <768               | ≥768                |
| md에서 숨기기 | .d-md-none .d-lg-block                   | md (중형) 화면에서만 숨기기         | <992               | ≥992                |
| lg에서 숨기기 | .d-lg-none .d-xl-block                   | lg (대형) 화면에서만 숨기기         | <1200              | ≥1200               |
| xl에서 숨기기 | .d-xl-none .d-xxl-block                  | xl (초대형) 화면에서만 숨기기       | <1400              | ≥1400               |
| xxl에서 숨기기| .d-xxl-none                              | xxl (초초대형) 화면에서 숨기기      | -                  | ≥1400               |
| 모든 화면     | .d-block                                 | 모든 화면에서 표시하기              | -                  | -                   |
| xs에서 표시하기| .d-block .d-sm-none                      | xs (초소형) 화면에서만 표시하기     | <576               | ≥576                |
| sm에서 표시하기| .d-none .d-sm-block .d-md-none          | sm (소형) 화면에서만 표시하기       | 576-767            | ≥768 또는 <576      |
| md에서 표시하기| .d-none .d-md-block .d-lg-none          | md (중형) 화면에서만 표시하기       | 768-991            | ≥992 또는 <768      |
| lg에서 표시하기| .d-none .d-lg-block .d-xl-none          | lg (대형) 화면에서만 표시하기       | 992-1199           | ≥1200 또는 <992     |
| xl에서 표시하기| .d-none .d-xl-block .d-xxl-none         | xl (초대형) 화면에서만 표시하기     | 1200-1399          | ≥1400 또는 <1200    |
| xxl에서 표시하기| .d-none .d-xxl-block                    | xxl (초초대형) 화면에서만 표시하기  | ≥1400              | <1400               |

`픽셀 별 버전 관리`
- 576px 이하 : 모바일 버전( < sm )      
- 576~992px : 태블릿 버전( sm ~ lg )   
- 992px(lg) : 데스크탑 버전( lg > )   




 
