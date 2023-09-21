// 두 정수의 곱셈을 구한 뒤 결과에 2를 곱해서 출력
 function mul(num1, num2, callback){
    if(callback){
      callback(num1 * num2)
    }
 }

 function printMul(reslut){
  console.log(reslut * 2)
 }
 

 mul(2,2,printMul)

// 성과 이름을 전달받아서 풀네임을 만든 뒤 "000님" 출력

function nameMake(firstname, secondname, callback){
  if(callback) {
    callback(firstname + secondname)
  }
}

function printname(reslut) {
  console.log(`${reslut}님`)
}
nameMake("임","수현",printname)
nameMake("임","수현",function(reslut){console.log(`${reslut}님 환영합니다`)})
nameMake("임","수현", reslut => {console.log(`${reslut}님 환영합니다`)})
 

function productPrice(price, pay, callback){
  if(callback){
    callback(pay / price)
  }
}

function checkCount(count){
  console.log(count <= 5)
}

productPrice(500,5000,checkCount)
productPrice(100,200,count => {console.log(count <= 5)})


function product(name, ispayment, callback) {
  if(callback) {
    callback(name,ispayment);
  }
}

function checkPayment(name, ispayment) {
  if(ispayment) {
    console.log(`${name} 결제 완료`);
  } else {
    console.log(`${name} 결제 취소`)
  }
}


product("감자",true, checkPayment);












