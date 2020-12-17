

//값을 설정해주지 않으면 기본 값:0, 
//만약 값을 1이라고 설정했으면 다음은 2, 그 다음은 3 이렇게 올라감
enum Shoes{
  Nike,//0
  Adidas,//1
}

const myShoes= Shoes.Nike;
console.log(myShoes) //0


//예제(구체적인 값들로 제안하는게 이넘(42강 1:57초))

enum Answer{
  Yes='yes',
  No='no'
}

function askQuestion(answer:Answer){
  if(answer===Answer.Yes){
    console.log('정답입니다.')
  }
  if(answer===Answer.No){
    console.log('오답입니다.')
  }
}

askQuestion(Answer.Yes)