//5가지 요소 순회 및 탐색 메서드
//1. forEach
//모든 요소를 순회하면서, 가각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr) {
  //arr1배열의 값 순회 1,2,3
  // idx는 무조건 0부터 시작.
  console.log(idx, item * 2);
});
//0 2
//1 4
//2 6

let doubledArr = [];

arr1.forEach((item) => {
  doubledArr.push(item * 2);
});
//2,4,6

//2.includes
//배열에 특정 요소가 있는지 확인하는 그런 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(10);
console.log(isInclude);
//결과 false

//3. indexOf
//특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [2, 2, 2];
let index = arr3.indexOf(2); //-> 찾고자 하는 요소가 가장 처음으로 나타나는 인덱스를 반환. 따라서 0
let index2 = arr3.indexOf(20); //-> 값이 아예 없기때문에 -1 출력

let objectArr = [{ name: "이정환" }, { name: "홍길동" }];
console.log(objectArr.indexOf({ name: "이정환" }));
// 결과 -1
// 왜냐하면 indexOf()메서드는 객체나 배열 같은 참조 타입의 값을 비교할때, 메모리 주소가 동일한지를 확인함.
// 코드에서 {name:"이정환"}이라고 다시 작성하는 순간, 메모리에 새로운 객체가 생성되면서 내용물은 같더라고 다른 주소를 가지고 있어 -1을 반환

console.log(objectArr.findIndex((item) => item.name === "이정환"));
//결과 0
//findIndex()메서드는 콜백 함수를 인자로 받음
//
