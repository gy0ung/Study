// console에 값을 출력
console.log(5454545);
console.log("lalala");
console.log("안녕하세요");

// 변수 : 자바 스크립트에서의 변수는 숫자, 문자열 다 같은 변수로 생성 가능하다.
//        주로 const를 사용하며, 때에 따라서 let으로 생성한다.
//      - const : 상수 즉, 수정이 불가능한 변수
//      - let : 수정이 가능한 변수
//      - var : 과거에 사용하던 변수로, 현재는 잘 사용하지 않음 (수정가능)

// 변수가 const로 생성되면 업데이트가 되지않는 값
// 변수가 let으로 생성되면 업데이트가 될수도있는 값

// 코드만 보고 변수값이 바뀔지 안바뀔지 한번에 파악가능하여 작성자의 의도 파악가능

// const
const a = 5;
const b = 2;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

// a = 4;
// const로 생성하면 다른값으로 대입할수 없다. (자바에서 final과 동일)
// 자바와 달리, 편집기에서는 오류가 발생해보이지않지만, 콘솔창에서는 오류발생
// Uncaught TypeError: Assignment to constant variable.

// let
let myName = "nico";
console.log(myName);
console.log("hello " + myName);

myName = "nicolas";
console.log(myName);

// boolean에서의 true는 문자가 아니기때문에 "true" 라고 작성하지않는다.
const amIFat = true;
console.log(amIFat);

// null은 아무것도없다. 아무것도없는것으로 채워졌다. (비어있다고 의도적으로표현)
const amIFat2 = null;
console.log(amIFat2);

// 값을 넣지않으면 "unfined" 라고 출력 (변수는 생성되었으나, 정의되지않았다.)
let something;
console.log(something);

// 파이썬에서는 null → none / true → True / false → False
