//변수에 타입 지정 = 변수에 일종의 쉴드 씌우는 것
let 이름2 :string = 'Elen'
let 밥드셨나요 :boolean = true

//array 자료형
let members :string[] = ['Minji','Nayeon']

//object 자료형
let users : { [key:number] : string } = { 1 : 'Hyun', 2 : 'Jin'}

//타입지정은 원래 자동으로 된다. -> 타입지정 문법 생략 가능

//연습문제

//Q1. 이름, 나이, 출생지역
let myName :string = 'Tammy'
let age:number = 30
let bornIn:string = 'California'

//Q2. Object 자료형
type SongType = {
  song:string,
  singer:string
}
let song :SongType = {
  song : 'SE SO NEON',
  singer : 'Long dream'
}

// Q3. Object 타입 지정
let project : {member:string[], days:number, started:boolean} = {
  member : ['kim', 'park'],
  days : 30,
  started : true
}