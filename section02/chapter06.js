//1.배열 순회
let arr = [1, 2, 3];

//1.1 배열 인덱스
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
//결과 1 2 3

//1.2 for of 반복문
for (let item of arr) {
  console.log(item);
}
//1. arr이라는 이름의 반복 가능한 객체배열을 가져온다
//2. arr의 첫번째 요소부터 마지막 요소까지 순서대로 접근한다
//3. 각 요소를 순환할때마다 해당 요소의 값이 item이라는 변수에 할당된다
//대충 저런 느낌쓰 먼느알?

//2. 객체 선언
let person = {
  name: "정지현",
  age: 22,
  hobby: "게임",
};

//2.1 Object.keys 사용
//->객체에서 key값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);
//=> 'Object.keys'라는 것이 person에서의 'name','age','hobby'를 뽑는다는 뜻!!!

for (let key of keys) {
  const value = person[key]; //person[key]는 정지현,22,게임을 의미
  console.log(key, value);
}

//2.2 Object.values(값)
let values = Object.values(person);
//->객체에서 value 값들만 뽑아서 새로운 배열로 반환

for (let value of values) {
  console.log(value);
}

//2.3 for in
for (let key in person) {
  const value = person[key];
  console.log(key, value);
}
//key가 목록들이고 person[key]는 값들임
