// 지역변수
// for(let i=0; i<10; i++){
//   console.log(i)
// }

// 지역변수를 영역 밖에서 사용할 수 없다.
// console.log(i)

// 전역변수
// let i = 0;
// for(i=0; i<10; i++){
//   console.log(i)
// }
// 전역변수는 모든 영역에서 사용 가능하다.
// console.log(i)


// Node.js에서는 전역변수들을 모두 global 객체에서 관리한다.
// 브라우저에서는 window객체에서 전역변수를 관리한다.
// 따라서 어디에서 사용될 지 모를 때에는 globalThis객체를 사용하면 된다.

globalThis.x = 10;
// let x = 10;

function f(){
  let x = 20;
  global.x = 30;
  console.log(x)  
}
f()
console.log(global.x)