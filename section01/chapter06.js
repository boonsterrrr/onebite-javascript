//1. 묵시적 형 변환
//->자바스크립트 엔진이 알아서 형 변환 하는 것

let num = 10; //진짜 숫자
let str = "20"; //숫자모양?의 문자

const result = num + str;
// console.log(result); >>출력: 1020

//2.명시적 형 변환
//->프로그래머 내장함수 등을 이용해서 직접 형 변환을 명시
//-> 문자열->숫자

let str1 = "10"; //문자 10
let strToNum1 = Number(str1); //Number=문자에서 숫자로 변환
//console.log(strToNum1); >>출력 10(숫자)

let str2 = "10개";
let strToNum2 = parseInt(str2); //parseInt =숫자값이 아닌 문자를 포함하는 문자열도 숫자를 출력함. 단, 문자가 앞에 있으면 출력이 안됨
//console.log(strToNum2);>>출력 10

//숫자->문자열
let num1 = 20;
let numToStr1 = String(num1); //String: 숫자->문자로 변환
//console.log(numToStr1+"입니다"); >>출력: 20입니다
