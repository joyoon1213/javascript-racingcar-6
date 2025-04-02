function wait(ms){
    return new Promise((resolve) => setTimeout(resolve, ms));
}
async function run(){
    console.log("1.시작");

    await wait(1000);
    console.log("2. 1초 후 실행");

    await wait(500);
    console.log("3. 그 후 0.5초 후 실행");
}

run();