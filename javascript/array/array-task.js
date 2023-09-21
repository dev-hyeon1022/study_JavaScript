// 1~10까지 Array객체에 담은 후 짝수만 출력
// let datas = new Array(10).fill(0);
// datas.forEach((v, i, ar) => {
//   ar[i] = i + 1;
// });
// datas = datas.map((data, i) => i + 1);
// datas.forEach((data) => {
//   if (data % 2 == 0) {
//     console.log(data);
//   }
// });
// console.log(datas.filter((data) => data % 2 == 0));

// 한글을 숫자로
// const hangle = "공일이삼사오육칠팔구".split("");
// const input = "일공이사".split("");
// console.log(parseInt(input.map((c) => hangle.indexOf(c)).join("")));

// 숫자를 한글로
// const hangle = "공일이삼사오육칠팔구";
// let input = "1024".split("");
// console.log(input.map((num) => hangle[num]).join(""));
// let result = "";

// while (input != 0) {
//   result = hangle[input % 10] + result;
//   input = parseInt(input / 10);
// }

// console.log(result);

// 1~100까지 합 출력
const datas = new Array(100).fill().map((v, i) => i + 1);
let result = 0;
const total = datas.reduce((x, y) => x + y);
console.log(total);
// datas.forEach((v) => (result += v));
// console.log(result);
