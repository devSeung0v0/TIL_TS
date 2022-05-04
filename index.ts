//1️⃣ 변수 타입 지정

//문자열
let 이름 :string = 'Kim'
//숫자로 된 배열
let 나이 :number[] = [20]
//객체(name은 옵션)
let people :{ name? : string } = { name : 'Lee'}

//다양한 타입이 들어올 수 있게 하려면 | (or 연산자)
let time :string | number = '6시'

//2️⃣ 타입 지정을 변수에 담아서 쓰기 Type alias
//타입명은 관습적으로 대문자로 시작
type MyType = string | number
let height = 170

//함수에 타입 지정
const func = (x:number)=>{
  console.log(x)
}

//3️⃣ array에 쓸 수 있는 tuple 타입
//타입의 순서, 길이 보장
type Member = [number,boolean] //무조건 첫 번째는 number, 두 번째는 boolean
let Jene:Member = [1, true]

//4️⃣ object에 타입 지정해야할 속성이 너무 많으면 key 
type User = {
  [key:string] : string,
}//문자열로 된 모든 object 속성의 타입은 :string
let anne : User = { name : 'Lee'}

//5️⃣ class 타입 지정
class user {
  name:string//미리 타입 지정해주고 써야함
  constructor(name :string){
    this.name = name
  }
}