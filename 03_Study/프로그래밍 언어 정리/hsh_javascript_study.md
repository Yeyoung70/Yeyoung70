# 변수를 만드는 방법
`var 변수 = 데이터`
- 문제점 : 변수가 고정되지 않아서 협업 과정에서 바뀔 수 있다.(실무에서 사용 금지)
- 재할당 가능   

`let 변수 = 데이터` 
- 변수가 고정되지는 않지만 중복되었을 경우 이미 선언되었다고 알려준다. 
- 재할당 가능

`const 변수 = 데이터`
- 재할당이 불가능하다. 중요한 변수일 때 사용한다. 
- 선언과 할당이 동시에 이루어져야 한다.

🤪예제 코드🤪
```javascript
var num = 10 + 20;
console.log(num) // 30

let num = 20;
console.log(num) // 20


const num = 10 ;
console.log(num) // 10
```

---

# 자료형 

`문자열` 
- " " 또는 '' 로 둘러싸여진 문자
- 두 가지 방식이 모두 사용되었을 때는 + 연결 연산자로 연결하거나 \ 이스케이프 문자를 활용하거나 ` 백틱으로 감싸는 방법으로 해결

- 문자열과 변수를 동시에 사용하는 방법(백틱, ${})
    - 예시 ) \`안녕하세요 나의 이름은 ${name} 입니다\`

`숫자형`

`논리형`
- (true ,false)

`undefined 자료형`
- javascript는 변수를 설정하는 과정에서 ""선언 과정 + 할당 과정""이 존재한다.
- 예시)

🤪예제 코드🤪
```javascript
const num ; //-> 선언 과정 
num = 10 //-> 할당 과정

// 이때 선언 과정만 이루어졌다면 num의 자료형은 undefined이다
// 상자는 만들어졌는데 왜 안에 내용물이 없어??의 의미
```


`null 자료형`
- 상자는 만들어놨으나 ""일부로 비워놨다는""" 느낌으로 임의로 지정을 한다

`객체 자료형`
- let x = {데이터} 처럼 중괄호({}) 안에 작성되는 것

`배열 자료형`
- [] 리스트 등등 -> 인덱싱 가능 / 데이터 타입 : object 

🤪예제 코드🤪
```javascript
let name = '한상혁'

let self_introduction = `안녕하세요 나의 이름은 ${name} 입니다`
console.log(self_introduction)

const num = 0.1 + 0.2
console.log(num) // 0.3000000004

let x ;
console.log(x) // undefined : 따로 지정할 필요 없음

let y = null;
console.log(y) // null : 

let z = {};
console.log(z)

let w = [10, 20, 'a'] ;
console.log(typeof w)
console.log(w[0])
```


---


# 연산자 

`할당 연산자( = )`

`산술 연산자 ` 
- +, -, *, **(제곱), %(나머지), /(나누기)

`복합 대입 연산자` 
- += , -=, %= (파이썬과 비슷) 

`true/false 관련 연산자`
- 대소 비교 : <,>
- 일치 관련 : ==, != (자료형이 다를 때 하나의 자료형으로 일치시킨다), ===, !==(고유의 자료형까지 신경써서 일치 여부 판단)

`논리 연산자` 
- && : and 연산자 : 둘 다 참이어야 참
- || : or 연산자 : 하나만 참이면 참
- ! : 부정 연산자 : !true -> false, !false -> true

`삼항 연산자`
- 파이썬의 조건 표현식과 유사
- 형태 : 조건 ? 참일 때 값 : 거짓일 때 값

`증가 연산자(++)` 
- 전치 : ++변수   ---> 할당을 하기 '''전''' 값을 1 증가시킬게  
- 후치 : 변수++   ---> 할당을 한 '''후''' 값을 1 증가시킬게

🤪예제 코드🤪
```javascript
// true/false 관련 연산자 - 일치 관련
let num = 10 ;
let num1  = '10' ;
let result = num === num1 ;
console.log(result)

// 논리연산자
let result1 = true && true
let result2 = true && false
let result3 = true || true
let result4 = true || false
let result5 = false || false
let result6 = !true
console.log(result1, result2)
console.log(result3, result4)
console.log(result5, result6)

// 삼항연산자
let result7 = 10 < 20 ? '참 입니다' : '거짓 입니다'
console.log(result7)

// 증가연산자
let x = 10 ;
let y = x++
console.log(`x :${x}  y : ${y} `)

let z = 10 ;
let w = ++z
console.log(`x :${z}  y : ${w} `)
```

---


# 조건문


## if 문

`if 문 형태 `
```js
if (조건) {
    참일 때 실행할 코드 입력
}
```


`if + else 문`
```js
if (조건) {
    참일 때 실행할 코드 입력
} else {
    거짓일 때 실행할 코드 입력
}
```

`if + else if 문`
```js
if (조건) {
    참일 때 실행할 코드 입력
} else if () {
    첫 조건에 대해서는 거짓이나 두 번째 조건에 대해서는 참일 때 실행할 코드
} else {
    2가지 조건에 대해서 모두 거짓일 때 실행할 코드
}
```


## switch 문

`switch 문 기본 형태`
```js
switch (key) {   // key는 조건의 의미라기 보다는 case와의 일치 여부를 따지기 위함 (x<10) 이런 형태는 불가하다.
    case value:   //--> key가  value 하고 일치하면 ! 
        key가 value이면 실행할 코드
        break;  //---> break가 없으면 case가 여러 개 있을 때 맞는 case가 나와도 break이 있는 곳 까지 모든 코드를 다 실행하기 때문에 꼭 break 처리 해야 함.
    
    default:
        key가 case에 해당이 되지 않을 때 실행할 코드
        break;
}
```

`if문  주의사항`

- (80<=score<90) 이런 조건은 안된다. --> (score < 90 && score >= 80) 이런식으로 논리 연산자를 이용해서 표현해야 한다.


🤪예제 코드🤪
```js
// if 조건문 관련
let x = 100 ;
if (x + 10 > 200) {
    console.log(`x의 값은 ${x+10}이고 200보다 큽니다.`)
} else {
    console.log(`x의 값은 ${x+10}이고 200보다 작습니다.`)    
}

// switch 문 관련
let food = "melon" ;

switch (food) {
    case 'melon':
    case 'apple':
        console.log('fruit')
        break;
    case 'carrot':
        console.log('vegetable')
        break;
    
    default:
        console.log('아무것도 아니야')
        break;
}

// 중첩 반목문 예제
let y = 100 ;
if (y + 10 < 200) {
    console.log(`y의 값은 ${y+10}이고 200보다 작습니다.`)
    if (y > 10) {
        console.log(`y는 10보다 큽니다`)
    }
}
```



---



# 반복문

`while 반복문`  : 
```js
while (조건) { //조건이 참일 때만 실행
    true이면 실행할 코드
}
```


`do while 반복문`  
```js
do { // 일단 한번 실행 후 조건에 대해 참이면 실행
    일단 한번 실행하고 조건이 참일 때 실행할 코드
} while (조건) 
```

`for 반복문`  
- 다중 반복문으로 자주 쓰인다.
```js
for(초기값; 조건식; 증감식){
    조건식에 대해서 참일 때까지 실행할 코드
}
```

`for let in 반복문`
```js
for(let 인덱스/키 in 배열/객체__딕셔너리){
    실행할 코드 
}
```

`break와 continue `
- break : 조건문 반복문 완전 종료
- continue : 해당 루프만 건너뛰기

`Tip`
- {실행할 코드}가 단일 문장이라면 {} 를 생략하고 코드를 작성할 수 있다.


🤪예제 코드🤪
```js
//  while 반복문
let i = 20 ;
while (i < 100) {
    console.log(i);
    i++;
}

// do while 반복문
do{
    console.log('일단 한번은 실행합니다')
} while(false);


// for 반복문
for(let i = 0; i < 5 ; i++){
    console.log(i)
}

// 중첩 for 반복문
for(let i = 0; i < 5 ; i++){
    console.log(i)
    for(let k= 0; k < 5; k++){
        console.log(k)
    }
}

// 예제 코드
const arr = ['바나나', '사과', '오렌지']; // array(배열)에는 arr.length라는 메서드 존재 : 파이썬 len(arr)와 동일
for(let i = 0; i <arr.length ; i++){
    console.log(arr[i])
}

// 예제 코드
const arr = ['바나나', '사과', '오렌지'];
let i = 0;
while(i<arr.length){
    console.log(arr[i]);
    i++
}

// for let in 반복문 with 배열(파이썬 리스트 비슷)
const arr = ['바나나', '사과', '오렌지'];

for(let idx in arr ){
    console.log(arr[idx])
};


// for let in 반복문 with 객체(파이썬 딕셔너리 비슷)
const dic = {
    name : '철수',
    age : '23세'
}

for(let key in dic ){
    console.log(dic[key])
}
```

---


# 함수 사용하기

`함수 기본 형태 - 1`
```js
function 함수명(선택사항){
    실행할 코드
}
```

`함수 기본 형태 - 2 : 화살표 함수`
```js
const 함수명 = (인자-선택사항) => {
    실행할 코드 
}
```
`Tip`
- 파이썬과 비슷하게 인자에는 기본값 할당이 가능




🤪예제 코드🤪
```js

// 구구단 일반화 함수 예제 with 직접 함수
function make_gugudan(layer){
    let layers = layer;
    for(let i = 1; i<10; i++){
        console.log(`${layers} * ${i} = ${layers * i}`)
    }
}

for(let i=1;i<3;i++){
    make_gugudan(i)
}

// 구구단 일반화 함수 예제 with 화살표 함수 , 기본값 할당
const make_gugudan = (layer=3) => {
    let layers = layer;
    for(let i = 1; i<10; i++){
        console.log(`${layers} * ${i} = ${layers * i}`)
    }
}

for(let i=1;i<3;i++){
    make_gugudan(i)
}

//기본값 할당
make_gugudan();
```
