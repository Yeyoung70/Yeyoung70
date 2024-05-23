`탭 사이즈 설정하는 법`

vscode -> 우측 하단 -> 언어 클릭 -> configure base setting -> [언어] : tabsize 설정

`block 요소와 inline 요소`

- block 요소 예시 -> 두 번 썼을 때 ""줄바꿈""이 생기는 것
```html
<p> 나의 첫 번째 html</p> 
<p> 나의 첫 번째 html</p> 

<h1>h1 tag</h1>
<h2>h2 tag</h2>
<h3>h3 tag</h3>
<h4>h4 tag</h4>
<h5>h5 tag</h5>
<h6>h6 tag</h6>
```

- inline 요소 예시 -> 두 번 썼을 때 줄이 바뀌지 않고 옆에 쓰여지는 것

```html
<span>span_tag</span>
<span>span_tag</span>
```

`글로벌 속성 : 태그와 상관없이 공통적으로 사용할 수 있는 속성들`

1. class 속성 : 한 페이지에서 속성값이 중복되어도 괜찮다.
2. id 속성 : 한 페이지에서 속성값이 중복되어서는 안되고 고유(unique)해야 한다.
3. style 속성 : css를 적어주기 위해서 사용하는 속성
4. title 속성 : 커서를 올렸을 때 툴 킷으로 보여준다.
5. hidden 속성 : html 요소를 화면에서 가려준다. hidden = "hidden" 또는 hidden 으로 작성 가능
6. lang 속성 : 태그에서 사용된 주 언어를 규정하는 속성
7. data- : html에서 사전 정의된 속성이 아닌 속성을 커스텀하고자 할 때

- 7번(data-) 속성 예시
```html
<p data-custom-classifier = "red">data- 를 활용해서 분류하기</p>
```

`멀티미디어 관련 태그 : 음악 또는 영상과 같은 것`

- audio 태그 : 음악 리소스 추가하기
- controls 속성을 추가해야만 뮤직바(기본 제공)가 화면에 노출된다
- 예시 
 ```html 
 <audio src="오디오파일 경로" controls></audio>
 ```
   

- video 태그 : 영상 리소스 추가하기
- controls 속성을 추가해야만 영상바(기본 제공)가 화면에 노출된다
```html
<video src="영상파일 경로" controls></video>
```
    - controls 속성을 추가해야만 영상바(기본 제공)가 화면에 노출된다

- audio 태그와 video 태그를 사용할 때 주의 사항
    - 브라우저에서 지원하지 않는 파일 포맷일 경우 반영이 안될 수 있다.
```html
<audio src="'./Bourree - Joel Cummins.mp3" controls></audio>
<video src="./sample.mp4" controls></video> 
```
만약 사용 브라우저에서 mp4를 지원하지 않는다면 반영이 되지 않을 수 있다.    
따라서 브라우저마다 지원되는 형식을 지정해야 할 필요성이 존재하는데 이것을 쉽게 하는 것이
source 태그이다.

- source 태그 : 해당 브라우저에서 지원하는 파일 형식을 선택해서 보여준다.
- 사용방법 
    - source 태그를 사용할 때는 audio/video 태그의 자식 태그로 사용
    - source 태그를 사용하면 audio/video 태그에서 src 속성은 삭제한다.

```html
<audio controls>
    <source src="'./Bourree - Joel Cummins.mp3" type = "audio/mp3">
    <source src="'./Bourree - Joel Cummins.wav" type = "audio/wav">
    지원하지 않는 브라우저 입니다.
</audio>
```


`form(폼)과 관련된 태그`

- form 태그     
html에서 form과 관련된 요소는 모두 ""form 태그 안에서"" 작성해야 한다.
```html
<form>
폼과 관련된 태그를 적는 공간
</form>
```

- form 태그는 단독 사용도 가능하지만 action = "", method = "" 속성과 함께 사용 가능
- action : form으로 작성할 것을 받을 """서버 주소""" 입력
- method : 전송하는 과정에서 어떤 방식으로 전송을 할 것인지 입력
```html
<form action="작성된 것을 받을 서버 주소" method = "get/post"></form>
```

- input 태그 
- 단일 태그이면서 type=""에 ctrl + spacebar를 누르면 input 유형 종류를 볼 수 있다.
```html
<input type="text"> -> 그냥 글자 자체를 보여준다
<br>
<input type="password"> -> 비밀번호이기 때문에 안보이게 만들어준다
<br>
<input type="checkbox"> -> 체크 표시를 할 수 있게 만들어준다. 중복이 가능하다
<br>
<input type="radio"> -> 동그라미 선택 표시를 할 수 있게 만들어준다. 중복이 불가능 하다
```

- label 태그(input 태그의 용도를 설명하기 위한 태그, input 태그와 같이 사용된다.)
- label 태그를 명시적으로 사용하는 방법
- label 태그 for속성 + input 태그 id속성 --> 둘 과의 연결 관계를 보여준다.
- input 태그 name 속성 : 데이터가 어떤 이름으로 전달될지 결정
- input 태그 value 속성 : 초기값 설정 -> 입력하지 않아도 기본적으로 입력되는 값
- input 태그 placeholder 속성 : 안내 텍스트 역할

```html
<label for = "id">아이디 : </label> 
<input type="text" name="입력값이름" id = "id" value="초기값">
label 태그의 for='id' 지정 + input 태그의 id = "id" 지정 = 아이디 선택 시 입력창 선택
```
- label 태그를 암묵적으로 사용하는 방법
```html
<label for = "id">
    아이디 : 
    <input type="text" name="입력값이름" id = "id" placeholder="안내텍스트">
</label>
label 태그안에 input 태그를 묶어주는 방식으로 구현
```

- form 태그안에 그룹화와 명칭을 지정하는 fieldset 태그 / legend 태그
- fieldset 태그 : 그룹화해서 보여준다
- legend 태그 : 그룹화한 것의 이름을 알려준다
```html
<fieldset>
    <legend>필수 입력 사항</legend>
    <label>아이디 : <input type="text"></label>
    <br>
    <br>
    <label>비밀번호 : <input type="password"></label>
</fieldset>
        
<fieldset>
    <legend>선택 입력 사항</legend>
    <label>가족 관계<input type="text"></label>
    <br>
    <label>생년월일<input type="text"></label>
</fieldset>
```

- 여러줄을 입력할 수 있게 하는 textarea 태그
- rows와 cols 속성은 사용하지 않는 것이 바람직. css에서 처리하기 때문에
```html
<textarea></textarea>
```

- 특정 항목을 선택하게 만드는 select 태그 / option 태그
- select 태그 : 선택모드
    - 같이 사용할 수 있는 속성
    - a. size : 몇 개의 값을 보여줄 것인지 결정
    - b. multiple : 속성명만 입력하고 몇개를 선택할 수 있게 만들지 결정

- option 태그 : 무엇을 선택할 것인지 나타내기
    - 같이 사용할 수 있는 속성
    - selected : 속성명만 사용, 가장 먼저 보여지는 option을 결정하기

- option 태그를 그룹화하는 optgroup 태그        
- label 속성과 함께 사용하며 선택의 유형이 무엇인지를 알려주기

```html
<select size = 1 multiple>
    <optgroup label = "계절">
        <option value="spring">봄</option>
        <option value="summer">여름</option>
        <option value="fall">가을</option>
        <option value="winter" selected>겨울</option>
    </optgroup>
</select>
```


- button을 만들기 위한 button 태그
```html
<button>구독 가입하기</button>
<br>
<button disabled>구독 가입하기</button>
```
 

- form에서 유용한 속성 태그와 매칭하기
    - a. 모든 form 태그 안에서 공통으로 사용 가능한 속성
        - disabled 속성 : 비활성화 모드
    - b. 한 줄짜리 입력창과 쓰이는 속성 
        - readonly : 사용자 입력 못하고 볼 수만 있게 하기
        - placeholder 속성 : 어떤 것을 입력하는 창인지 알려주기
    - c. 한 줄짜리 입력요소 또는 여러 줄 입력 요소와 쓰이는 속성
        - maxlength 속성 : 최대 입력 길이 설정 --> 예시 : maxlength = 23 
    - d. checkbox / radio input 태그 에서 사용할 수 있는 속성
        - checked : 체크가 된 checkbox 보여주기
```html
<input type="text" readonly>
<br>
<textarea maxlength = 20></textarea>
<br>
<input type="checkbox" checked>
<br>
<input type="text" placeholder = "아이디를 입력하세요">
```

`표 만들기와 관련된 태그 정리`
- table 태그 : table 만들기 모드 선언 : 테이블 관련 태그를 감싸는 태그
- 사용되는 속성 : border : 테이블 형태를 잡아주는 테두리 생성
- 실무에서는 사용하지 않으나 학습 과정에서 표를 확인하는 용도로 사용
```html
<table border = 1>
    테이블 관련 태그들
</table>
```

- caption 태그 : 내가 만들고자 하는 table의 이름을 지정
```html
<table border = 1>
    <caption>가격표</caption>
</table>
```



- 행과 열 관련 태그
    - tr 태그 : 하나의 ""행""을 생성
    - th/td 태그 : 하나의 ""열""을 생성
        - th 태그 : table header
        - td 태그 : table details

- 셀을 병합하는 속성 -> th, td 태그에 적용
    - rowspan 속성 : 행을 병합할 때 사용 (세로 방향)
        - 예시 : rowspan = 2 -> 2개의 셀을 행 기준(세로)으로 병합
        - 이때 범위 안에 있는 행의 값은 지워줘야 함.

    - colspan 속성 : 열을 병합할 때 사용 (가로 방향)
        - 예시 : colspan = 2 -> 2개의 셀을 열 기준(가로)으로 병합
        - 이때 범위 안에 있는 열의 값은 지워줘야 함.

- 테이블을 헤더/바디/푸터로 그룹화 하는 태그
    - thead 태그 : 헤더로 그룹화(구조화)하는 태그, 보통 th 태그를 감싸는 경우 다수
    - tbody 태그 : 바디로 그룹화(구조화)하는 태그
    - tfoot 태그 : 푸터로 그룹화(구조화)하는 태그  -> 없는 경우도 있을 수 있음
        - 단 무조건 tfoot 태그가 tbody 태그보다 먼저 나와야 한다.

```html
<table border = 1>
        <caption>가격표</caption>
        <col style = "width : 80px">
        <colgroup span = 2 style = "width : 150px"></colgroup>
        <thead>
            <tr>
                <th>번호</th>
                <th>상품명</th>
                <th>수량</th>
                <th>가격</th>
            </tr>
        </thead>
        
        <tfoot>
            <tr>
                <td>총 금액</td>
                <td colspan = 2></td>
                <td>379만원</td>
            </tr>
        </tfoot>
        
        <tbody>
            <tr>
                <td>1</td>
                <td>아이폰14promax</td>
                <td>3</td>
                <td>159만원</td>
            </tr>
            <tr>
                <td>2</td>
                <td>아이폰14 mini</td>
                <td>2</td>
                <td rowspan = 2>110만원</td>
            </tr>
            <tr>
                <td>3</td>
                <td>갤럭시 S24</td>
                <td>2</td>
                <!-- <td >110만원</td> -->
            </tr>
        </tbody>
```

- 각 열(column)의 스타일을 결정하는 col태그 / colgroup태그 
    - 위치 : caption 뒤, thead,tbody,tfoot 태그 앞 : caption > colgroup & col > thead,tbody,tfoot
    - col 태그는 colgroup 태그 안에 위치하거나 각각 따로 사용될 수 있다.
    - col 태그에서 열의 너비(width), 배경색(background-color), 테두리(border) 속성 사용 가능
    - col 태그 : 왼쪽 기준 하나의 열 
    - colgroup 태그 : span 속성을 통해서 왼쪽 기준 몇 개의 열을 그룹화 할지 지정 

- colgroup 안에 col 태그가 위치 할 때 작동 예시
```html
<col style = "width : 80px"> -> 1번 쨰 열에 대한 그룹화
<colgroup span = 2 style = "width : 150px"></colgroup> -> 2,3번 째에 대한 그룹화
```
- colgroup과 col 태그가 각각 사용될 때 작동 예시
```html
<colgroup>
    <col style="width: 80px">
    <col style="width: 150px">
</colgroup>
```
- 종합 예제 코드
```html
<table border = 1>
    <caption>가격표</caption>
    <col style = "width : 80px">
    <colgroup span = 2 style = "width : 150px"></colgroup>
    <thead>
        <tr>
            <th>번호</th>
            <th>상품명</th>
            <th>수량</th>
            <th>가격</th>
        </tr>
    </thead>
    
    <tfoot>
        <tr>
            <td>총 금액</td>
            <td colspan = 2></td>
            <td>379만원</td>
        </tr>
    </tfoot>
    
    <tbody>
        <tr>
            <td>1</td>
            <td>아이폰14promax</td>
            <td>3</td>
            <td>159만원</td>
        </tr>
        <tr>
            <td>2</td>
            <td>아이폰14 mini</td>
            <td>2</td>
            <td rowspan = 2>110만원</td>
        </tr>
        <tr>
            <td>3</td>
            <td>갤럭시 S24</td>
            <td>2</td>
            <!-- <td >110만원</td> -->
        </tr>
    </tbody>

</table>
```


- 자신과 연관이 있는 셀의 범위를 지정하는 ""속성""
    - scope 속성 : th 태그에 붙어서 해석 방향을 설명하는 속성
    - scope = "col" : 열(세로) 방향으로 의미가 있음
    - scope = "row" : 행(가로) 방향으로 의미가 있음
    - scope = "colgroup" : 2개 이상의 열이 열(가로) 방향으로 의미가 있음
    - scope = "rowgroup" : 2개 이상의 행이 행(가로) 방향으로 의미가 있음
```html

<hr>

<table border = 1>
    <caption>성적표</caption>
    <tr>
        <th scope = "col">구분</th>
        <th scope = "col">중간고사</th>
        <th scope = "col">기말고사</th>
    </tr>
    <tr>
        <th scope = "row">전공</th>
        <td>A+</td>
        <td>B+</td>
    </tr>
    <tr>
        <th scope = "row">교양</th>
        <td>C+</td>
        <td>B</td>
    </tr>
</table>
<br>
<table border = 1>
    <caption>성적표</caption>
    <tr>
        <th scope = "col" rowspan = 2 >구분</th>
        <th scope = "colgroup"  colspan = 2>1학년</th>
    </tr>
    <tr>
        <th scope = "col">중간고사</th>
        <th scope = "col">기말고사</th>
    </tr>
    <tr>
        <th scope = "rowgroup" rowspan = 2>전공</th>
        <td>A+</td>
        <td>B+</td>
    </tr>
    <tr>
        <td>C+</td>
        <td>B</td>
    </tr>
```
<!-- <table border = 1>
    <caption>성적표</caption>
    <tr>
        <th scope = "col">구분</th>
        <th scope = "col">중간고사</th>
        <th scope = "col">기말고사</th>
    </tr>
    <tr>
        <th scope = "row">전공</th>
        <td>A+</td>
        <td>B+</td>
    </tr>
    <tr>
        <th scope = "row">교양</th>
        <td>C+</td>
        <td>B</td>
    </tr>
</table>
<br>
<table border = 1>
    <caption>성적표</caption>
    <tr>
        <th scope = "col" rowspan = 2 >구분</th>
        <th scope = "colgroup"  colspan = 2>1학년</th>
    </tr>
    <tr>
        <th scope = "col">중간고사</th>
        <th scope = "col">기말고사</th>
    </tr>
    <tr>
        <th scope = "rowgroup" rowspan = 2>전공</th>
        <td>A+</td>
        <td>B+</td>
    </tr>
    <tr>
        <td>C+</td>
        <td>B</td>
    </tr> -->

<hr>


` 정리할 것`
- a 태그(링크이동), a태그 href에 #~~ 을 주면 id속성을 이용해서 페이지 내 이동이 가능/ jsvascript:void(0)을 아무것도 적용 x
- button(onclick 속성으로 내가 원하는 기능 추가 가능 더 자율성 높음)     
- img 태그 

`자바스크립트 연결하는 법`
```html
<!-- body 태그 가장 마지막에 추가한다. -->
<script src="연결할 js 파일(bootstrap.bundle.min.js)"></script> 
```


`필수 태그 정리`
- <strong>h1 - h6 태그</strong> 
    - 제목이나 주제와 같은 성격의 텍스트를 나타낼 때 사용(1:가장 굵고 크다 ~ 6: 가장 얇고 작다 실무에서는 h4 태그까지만 사용한다)
    - seo 상에서 키워드로 인식되는 태그이기 때문에 매우 신중하게 쓰여야 한다.
    - 하나의 html 태그에서는 한 개의 h1 태그만을 사용하는 것을 권장한다
    - 블록 요소이기 때문에 두 번 이상 사용할 경우 줄바꿈으로 표시된다.
```html
<h1>h1 tag</h1>
<h2>h2 tag</h2>
<h3>h3 tag</h3>
<h4>h4 tag</h4>
<h5>h5 tag</h5>
<h6>h6 tag</h6>
```

- <strong>p 태그</strong>
    - 단락(문단, 문장)을 의미하는 태그 
    - 블록 요소이기 때문에 두 번 이상 사용할 경우 줄바꿈으로 표시된다.
```html
<p>p 태그는 html 상에서 가장 normal하게 쓰이고 블록요소이기 때문에 <br> 두 번 이상 쓸 경우 줄바꿈으로 표시된다.</p>
<p>p 태그는 html 상에서 가장 normal하게 쓰이고 블록요소이기 때문에 <br> 두 번 이상 쓸 경우 줄바꿈으로 표시된다.</p>
```

- <strong>br 태그</strong>  
    - 줄바꿈을 사용하기 위해서 사용하는 코드이다.
    - content없는 문법이다. 

- <strong>blockquote 태그</strong> 
    - 어떤 긴 인용문을 사용하기 위한 태그
    - 기본 형태 : \<blockquote>인용할 내용을 작성\</blockquote> 
    - cite = "출처url" 라는 속성으로 출처를 표시할 수 있다.
    - 문단 단위와 같이 ""긴 내용""을 인용하고자 할 때 사용하는 태그

- <strong>q 태그</strong> 
    - 어떤 짧은 인용문을 사용하기 위한 태그
```html
<blockquote cite = "https://ko.wikipedia.org/wiki/%EC%9C%84%ED%82%A4%EB%B0%B1%EA%B3%BC">긴 인용문 사용할 때</blockquote> 
<q cite = "https://ko.wikipedia.org/wiki/%EC%9C%84%ED%82%A4%EB%B0%B1%EA%B3%BC">짧은 인용문 사용할 때 </q>
```

- <strong>ins 태그</strong> 
    - 어떤 내용을 새롭게 삽입할 때 사용하는 태그(밑줄이 생긴다.)
    - inline 요소이다

- <strong>del 태그</strong>  
    - 어떤 내용을 삭제할 때 사용하는 태그(삭제선이 생긴다.)
    - inline 요소이다
```html
<ins>새롭게 추가되는 내용이다</ins>

<del>기존에 있었지만 삭제되는 내용</del>
```

- <strong>sub 태그</strong> 
    - 아래첨자를 표현하고자 할 때 사용하는 태그 
- <strong>sup 태그</strong>  
    - 윗첨자를 표현하고자 할 때 사용하는 태그
```html
<p>공기의 원소 기호는 H<sup>2</sup>O 입니다</p>
<p>4<sup>2</sup>은 16입니다</p>
```


그룹을 짓기 위해서 사용하는 태그
- <strong>div 태그</strong> 
    - 큰 단위에서 그룹을 짓고 싶을 때 사용
- <strong>span 태그</strong> 
    - inline 요소 안에서 그룹을 짓고 싶을 때 사용
```html
<div class = "movie-and-tv">
    <H2>영화 소개</H2>
    <P>영화를 <span>소개하는</span> 페이지입니다</P>

    <H2>TV 프로그램 소개</H2>
    </P>TV 프로그램을 소개하는 페이지입니다</P>
</div>
```

목록과 관련된 태그

- <strong>ul 태그(unordered list)</strong> 
    - 앞에 동그라미가 붙어져서 나오는 목록처럼 보이게 한다. 순서를 나타내지 못한다
- <strong>ol 태그(ordered list)</strong> 
    - 순서를 나타내기 위해서 앞에 숫자가 붙는다
- <strong>li 태그(list item)</strong> 
    - ul 또는 ol 안에 있는 아이템들을 표현한다.
```html
<ul>
    <li>아이템 1</li>
    <li>아이템 2</li>
    <li>아이템 3</li>
    <li>아이템 4</li>
</ul>

<ol>
    <li>아이템 1</li>
    <li>아이템 2</li>
    <li>아이템 3</li>
    <li>아이템 4</li>
</ol>
```

- <strong>dl 태그(definiton list, description list)</strong> 
    - 설명한다는 것을 선언하기
- <strong>dt,dd태그(description term, description details)</strong> 
    - dl 태그의 아이템들을 표현한다.
```html
<dl>
    <dt>HTML</dt>
    <dd>HTML은 HyperText Markup Language의 약자이다</dd>

    <dt>CSS</dt>
    <dd>CSS는 Cacading Style Sheets의 약자이다</dd>
</dl>
```

링크와 관련된 태그
- <strong>a(anchor) 태그</strong>
    - 다른 문서 또는 내부의 다른 영역과 연결할 때 사용하는 태그
    - href 속성을 가지고 있어야 한다(어디와 연결할 것인지를 알려주기)
    - target이라는 속성은 a 태그와 자주 쓰인다 
    - \<a href="https://www.naver.com" target = "_blank">네이버</a> : 여기서 target = "_blank"은 새로운 창에서 열리는 역할을 한다
    - href에 #xxx 와 같이 id selector를 사용하면 동일 페이지 안에서 이동 가능.
```html
<!-- 해당 창에서 열기 -->
<a href="https://www.naver.com">네이버</a>

<!-- 다른 창에서 열기 -->
<a href="https://www.naver.com" target = "_blank">네이버</a>

<!-- 같은 페이지 안에서 다른 영역으로 이동하고 싶을 때 -->
<a href="#xxxx" target = "_blank">네이버</a>
```

이미지를 표현하는 태그
- <strong>img 태그</strong>
    - src,alt 필수로 지정 -> src : 삽입할 이미지의 경로, alt : 이미지 이름 지정
    - a 태그로 감싸면 이미지 클릭 시 실제 이미지 경로로 이동하게 만들 수 있다.
```html
<!-- 단독으로 사용할 때 -->
<img src ="사진 경로" alt = "사진 이름">

<!-- a 태그와 함께 사용 -> 이미지 클릭 시 이미지 링크로 이동 -->
<a href="사진 경로1" target = "_blank"><img src ="사진 경로1" alt = "사진 이름"></a>

```


강조를 표현하는 태그
- <strong>strong 태그 </strong>
    - 문장을 강조할 때 사용하는 태그 : 문장을 굵은 글씨로 보여준다
- <strong>em 태그 </strong>
    - 단어를 강조할 때 사용하는 태그 : 단어를 기울여서 강조한다.

똑같은 기능이지만 실무에서 쓰지 않는 태그
- b 태그(bold) : strong과 같이 강조 
- i 태그(italic) : em 태그처럼 강조

```html
<strong><em>경고 ! 관계자 외</em>출입금지.</strong>

<b><i>경고 ! 관계자 외</i>출입금지.</b>
```


`onclick 속성을 적용할 수 있는 태그 및 주 사용 방법`
| 태그      | 설명                                   |
|-----------|----------------------------------------|
| `<button>`| 클릭할 수 있는 버튼                    |
| `<a>`     | 하이퍼링크                             |
| `<div>`   | 블록 레벨 컨테이너                     |
| `<span>`  | 인라인 컨테이너                        |
| `<input>` | 입력 필드 (button, checkbox, radio 등) |
| `<img>`   | 이미지                                 |
| `<p>`     | 문단                                   |
| `<li>`    | 목록 항목 (ul, ol 내부)                |
| `<td>`    | 테이블 데이터 셀                       |
| `<th>`    | 테이블 헤더 셀                         |
| `<label>` | 입력 요소에 레이블                     |
| `<form>`  | 폼                                     |

