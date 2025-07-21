//함수선언

// function greeting() {
//   console.log("안녕하세요!");
// } //function 함수 이름(){}

// greeting(); //함수 호출

// function getArea(){
//     let width =10;
//     let height=20;
//     let area=width*height;

//     console.log(area);
// }

// getArea();

// function getArea(width, height) {
//   //()안에는 매개변수
//   let area = width * height;

//   return area;
// }

// getArea(10, 20); //인수
// let area1 = getArea(30, 20);
// console.log(area1);

function getArea(width, height) {
  function another() {
    console.log("another");
  }
  another();
  let area = width * height;
  return area;
}

let area1 = getArea(10, 20);
console.log(area1);

//선언이 뒤에 일어나도 정상적으로 작동이됨
//자바스크립트의 '호이스팅'이라는 기능때문에 가능함
//호이스팅:끌어올리다 라는 뜻. 알아서 끌어올려서 실행을 함.
