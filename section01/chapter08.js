//1. null 병합 연산자
//->존재하는 값을 추려내는 기능
//-> null, undefined가 아닌 값을 찾아내는 연산자

let var1;
let vae2 = 10;
let var3 = 20;

let var4 = var1 ?? var2; //??=null변환 연산자
// var1은 undefined, var2=10, ??연산자가 10을 찾아서 var4에 넣음
//var4=10이 됨

let var5 = var1 ?? var3; //>출력 20 null이나 undifined가 아닌 값을 찾아내는 연산자
let var6 = var2 ?? var3; //>출력 10 , 둘다 아니면 맨 앞의 숫자를 반영

let userName = "이정환";
let userNick = "Cheese";
let displayName = userName ?? userNickName; //유저네임이 존재하면 유저네임, 없으면 닉네임을 저장.

//2. typeof 연산자
//-> 값의 타입을 문자열로 반환하는 기능을 하는 연산자

let var7 = 1;
var7 = "hello";

let t1 = typeof var7; //>출력 string

//3. 삼항 연산자
//->항을 3개 사용하는 연산자
//->조건식을 이용해서 참, 거짓일때의 값을 다르게 반환
let var8 = 10;
//요구사항: 변수 res에 var8의 값이 짝수->"짝", 홀수->"홀"
let res = var8 % 2 === 0 ? "짝수" : "홀수"; //?기준 앞에는 조건식, 이후 : 전자에는 참일경우, :기준 뒤는 거짓일 경우
//>출력 짝
