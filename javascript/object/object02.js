// JS 객체의 필드는 프로퍼티라고 부른다.
let lunch = new Object();
lunch.name = '햄버거';
lunch.price = 9000;

console.log(lunch);

lunch.pay = function(){}
lunch.pay = () => {console.log('결제 완료')}

lunch.pay();