//1️⃣ 함수의 타입 지정하기 -> 파라미터, return값 타입 지정 가능
function multi(x) {
    return x * 2;
}
//2️⃣ 함수에서 void 타입 활용 -> return 막아줌
function plus(x) {
    1 + 1;
}
//3️⃣ 자바스크립트와 다른 점
//타입 지정된 파라미터는 꼭 넣어줘야 함!
// multi() //에러
multi(2);
//4️⃣ 파라미터가 옵션일 경우 -> 물음표 , 파라미터변수? : type
//⭐️ 물음표의 의미 -> | undefined 로 Union type 만들어 주는 것과 같음
function multi2(x) {
    return x * 5;
}
