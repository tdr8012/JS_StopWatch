const display = document.getElementById("display");

let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start(){
    if(!isRunning){
        startTime =  Date.now() - elapsedTime;
        console.log(startTime, elapsedTime);
        timer = setInterval(update, 10);
        isRunning = true;
    }
        
}

function stop(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function reset(){
    clearInterval(timer);
    elapsedTime = 0;
    startTime = 0;
    isRunnning = 0;
    display.textContent = "00:00:00";
}

function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hour = Math.floor(elapsedTime / (1000 * 60 * 60)).toString().padStart(2, "0");
    let minute = Math.floor(elapsedTime / (1000 * 60) % 60).toString().padStart(2, "0");

    let second = Math.floor(elapsedTime / 1000 % 60).toString().padStart(2, "0");
    let milliseconds = Math.floor( elapsedTime % 1000 / 10).toString().padStart(2, "0");

    display.textContent = `${hour}:${minute}:${second}:${milliseconds}`;
}