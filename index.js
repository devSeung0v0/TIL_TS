//1️⃣ 변수 타입 지정
//문자열
var 이름 = 'Kim';
//숫자로 된 배열
var 나이 = [20];
//객체(name은 옵션)
var people = { name: 'Lee' };
//다양한 타입이 들어올 수 있게 하려면 | (or 연산자)
var time = '6시';
var height = 170;
//함수에 타입 지정
var func = function (x) {
    console.log(x);
};
var Jene = [1, true];
var anne = { name: 'Lee' };
//5️⃣ class 타입 지정
var user = /** @class */ (function () {
    function user(name) {
        this.name = name;
    }
    return user;
}());
