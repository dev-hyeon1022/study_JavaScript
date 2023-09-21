

// 프로토타입으로 설계한다.
function User(name, age, point){
  this.name = name;
  this.age = age;
  this.point = point;
}

let mart = new Object();

const lsh = new User("임수현", 22, 58000);
const hgd = new User("홍길동", 50, 1500);
const kim = new User("김철수", 99, 99999);

mart.user1 = lsh;
mart.user2 = hgd;
mart.user3 = kim;

console.log(mart);


















