const numbers = [1, 2, 3, 4, 5, 6];
numbers
    .filter(function(n){
        return n % 2 === 0;
    })// 짝수만 통과
    .map(function(n){
        return n * 2;
    })// 2배 만들기
    .forEach(function(n) {
        console.log(`${n}`);
    });