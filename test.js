function greet(name, age){
    console.log(`안녕하세요, ${name}님!`);
    if (age >= 20){
        console.log("성인이시군요!");
    } else{
        console.log("미성년자시군요!");
    }
}

const names = ["두리", "조윤"];
const ages = [10, 22];

for (let i=0; i<names.length;i++){
    greet(names[i], ages[i]);
}

console.log("모든 인사를 마칩니다.");