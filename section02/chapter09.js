//5가지 배열 변형 메서드
//1. filter
//기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
  { name: "정지현", hobby: "게임" },
  { name: "이정환", hobby: "테니스" },
];

const tennisPeople = arr1.filter((item) => item.hobby === "게임");

//2.
