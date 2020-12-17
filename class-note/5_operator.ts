//유니온 타입

//유니온 타입 장점 ->(타입가드) 타입이 어떤거냐에 따라 뒤에 붙는 api가 연관지어 뜬다.
function logMessage(value:string | number){
  if(typeof value ==='string'){
    value.toLowerCase
  }
  if(typeof value ==='number'){
    value.toLocaleString()
  }
  throw new TypeError('value must be string or number!')
}
logMessage('hello')
logMessage(100)

//유니온 타입(|)은 공통된 속성만 쓸 수 있다.(값을 나눠서 보낼수 있음)
interface Developor{
  name:string,
  skill:string
}
interface Person{
  name:string,
  age:number
}
function askSomeone(value: Developor|Person){
  value.name
  //value.skill 사용 못함
  //value.age 사용 못함
}

//인터섹션(&) 타입 -> 좋아보이지만 실무에서는 유니온을 더 많이 씀(얘는 값을 전부다 보내줘야함)
function askSomeone2(value: Developor&Person){
  value.name
  value.age //age 쓸 수 있음
  value.skill //skill 쓸 수 있음
}
