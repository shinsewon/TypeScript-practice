interface User{
  age:number;
  name:string;
}

//변수에 활용한 인터페이스
const seho:User={
  age:29,
  name:'세호'
}

//함수에 인터페이스 활용
function getUser(user:User){
  console.log(user)
}
const capt={
  name:'캡틴신',
  age:29
}
getUser(capt)

//함수의 스펙(구조)에 인터페이스를 활용 

interface SumFunction{
  (a:number,b:number) :number
}

let sum:SumFunction
sum=function(a:number,b:number):number{
return a+b
}

//인덱싱
interface StringArray{
  [index:number]:string;
}

const arr:StringArray=['a','b','c'];

//딕셔너리 패턴

interface StringRegexDictionary{
  [key:string] : RegExp
}

const obj:StringRegexDictionary ={
  cssfile:/\.css$/
}

//인터페이스 확장

interface Person{
  name:string,
  age:number,
}

interface Developer extends Person{
  language:string;
}

const reader:Developer={
  name:'세원',
  age:29,
  language:'korea'
}