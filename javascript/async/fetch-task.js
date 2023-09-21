// https://jsonplaceholder.typicode.com/users를 fetch로 요청하여
// zipcode만 추출하기

// fetch("https://jsonplaceholder.typicode.com/users")  외부에서 받아온 API을 promise객체로 변환하고
// .then((response) => {                                변환된 데이터가 성공했으면 
//   if(!response.ok) {                                 그 데이터중 ok키의 값이 false일때
//     throw new Error(`response : ${response.status}`) 해당 프로토타입으로 설계된 Error 객체를 밑에 catch로 넘겨준다
//   }
//   return response.json();                            위 ok가 true면 json으로 리턴해준다
// })
// .then((posts) => {                                   리턴받은 json데이터중
//   if(!posts || posts.length == 0) {                  해당 내용이 없거나 길이가 0이면 
//     throw new Error("정보가 없습니다.")               에러를 catch로 넘겨준다
//   }
//   return posts.map((post) => {                       그게 아니라면 map형태 {Key:value}로 리턴해준다
//     return {zipcode: post.address.zipcode}           받은 리턴값중 zipcode키의 값을 가지고있는 걸 zipcode프로퍼티에 담아 
//   })                                                 객체로 리턴해준다
// })
// .then(console.log)                                   위에서부터 받은 리턴값을 출력해준다
// .catch((error) => {                                  에러가 발생시 catch로 해당 에러를 받아서
//   console.log(error);                                출력해준다.
//   console.log("오류입니다");                             
// })


async function request(){                                     //비동기방식으로 함수 선언!
  return fetch("https://jsonplaceholder.typicode.com/users"); //promise 객체로 받아온 API를 리턴
}               

async function printZipcode(){                                //비동기방식으로 zipcode값 출력하는 함수 선언
  const response = await request();                           //response 변수에다 promise 객체로 받아온 데이터를 await 키워드를 사용하여 
                                                              //동기로 묶어 데이터로드가 다 될 때까지 기다렸다가 대입한다
  const users = await response.json();                        //json으로 변환한 후 동일하게 다 완료되면 zipcodes에 대입 후
  const zipcodes = users.map((user) => user.address.zipcode)  //{key:value} 형태로 변환해서
  console.log(zipcodes);                                      // 출력
}

printZipcode()