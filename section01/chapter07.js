//1. 대입연산자
let var1 = 1;

//2. 산술연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 / 2;
let num4 = 3 * 2;
let num5 = 3 % 2;

let num6 = 1 + 2 * 10; //사칙 연산대로 선 곱하기 후 더하기. 21출력

//3. 복합 대입 연산자 (산술, 대입이 복합)
let num7 = 10;
//num7 = num7 + 20; <-방식이 너무 귀찮
num7 += 20; //>출력:30
//=산술자 앞에 어느 연산자가 올 수 있음.(+= -= *=..)

//4.중간 연산자
let num8 = 10;
num8++; //1만 증가 (후위 연산: 나중에 계산)
//++num8과는 다르니 주의(전위 연산: 먼저계산)

//5.논리 연산자
let or = true || false; //> 출력 true
let and = true && false; //> false
let not = !true; //> false

//6. 비교 연산자
let comp1 = 1 === 2; //> false
let comp2 = 1 !== 2; //> true
let comp3 = 1 === "1"; //>false
//let cpm1= 1=='1' 이면 자료형이 다른데 값은 같으니 ==는 값 자체만 비교하므로 true가 뜸
let comp4 = 2 > 1; //>true
let comp5 = 2 >= 1; //>true
