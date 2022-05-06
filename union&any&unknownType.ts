//1️⃣ Union type : 타입 2개 이상 합친 새로운 타입 만들기
let member : number | string = 123

//숫자 or 문자가 가능한 array / object 타입 지정은?
let membersList : (number | string)[]= [ 1,'2',3 ]
let obj : { a : string | number } = { a : '123' }

//2️⃣ any type : 모든 자료형 허용 (타입쉴드 해제 문법으로 봐야함)

let a :any
a = 123
a = '123'

//3️⃣ unknown type : 모듬 자료형 허용, any보다 안전함
let b :unknown
b = 123
b = {}

//💡 any type보다 안전한 이유 : 타입 쉴드 작동
// let c :string = b //에러 -> 타입 쉴드 작동(변수 c는string만 가능)
let d :object = a// 허용 -> 타입 쉴드 해제

//⭐️ 타입스크립트의 엄격함 중시하기!
let ageMore :string | number //string, number를 허용하는 새로운 타입을 만든 것임
// ageMore + 1 //에러

let ageLess :unknown = 1
// ageLess - 1 //에러

//💡 Union type 연습

//Q1. 변수에 타입 지정하기
let who :string = 'kim'
let old :undefined|number = undefined
let married :boolean = false
let me :(string|undefined|number|boolean)[]= [who, old, married]

//Q2. school이라는 변수에 타입 지정하기
let school : {
  score : (number|boolean)[],
  teacher : string,
  friend : string|string[]
}
= {
  score : [100,97,84],
  teacher : 'Grace',
  friend : 'Anne'
}
school.score[4] = false
school.friend = ['Lee', school.teacher]


