//Type이 확정되지 않았을 때(Union type) , Type Narrowing 사용해야함
//1️⃣ typeof 연산자가 대표적
function narrowType(x) {
    if (typeof x === 'string') {
        return x + '1';
    }
    else {
        return x + 1;
    }
}
console.log(narrowType(123));
//2️⃣ assertion 문법(타입 덮어쓰기)
function assertion(x) {
    var arr = [];
    //typeOf 연산자 사용 
    //   if(typeof x === 'number'){
    //     arr[0] = x
    //   }else{
    // }
    //assertion 문법 -> if문 안써도 돼서 코드 간결해짐
    arr[0] = x;
    console.log(x);
}
assertion(123);
//💡 assertion 사용시 주의점
///1. Narrowing 할 때만
var hi = 'kim';
// hi as number //에러!
///2. 무슨 타입이 들어올지 확실할 때만 -> 그 타입으로 덮어버리는 것이기 때문(버그 추척 못함) ⭐️디버깅용, 비상용(남의 코드 고칠 때, 알 수 없는 타입에러날 때 )
//숙제1
var dirtyArr = [1, '2', 3];
function cleanArr(arr) {
    var cleanFin = [];
    arr.forEach(function (i) {
        typeof i === 'string' ?
            cleanFin.push(parseInt(i))
            :
                cleanFin.push(i);
    });
    return cleanFin;
}
console.log(cleanArr(dirtyArr));
