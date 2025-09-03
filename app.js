let gameSeq=[];
let userSeq=[];

let btns=["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("Game is started");
        started = true;

        levelUp();
    }
    
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);

}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250);

}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`

    //random btn choose

    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(`${randIdx}`);
    // console.log(`${randColor}`);
    // console.log(`${randBtn}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);

}


function checkAns(idx){
    // console.log("curr level : ", level);
    // let idx = level-1;
    if(userSeq[idx] === gameSeq[idx]){
        // console.log("Same Value");
        if(userSeq.length===gameSeq.length){
            setTimeout(levelUp, 1000);

        }
    }else{
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

//Buttons Event Listeners
function btnPress(){
    // console.log("btn was pressed");
    // console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    // console.log(userColor);

    checkAns(userSeq.length-1);
}



let allBtns = document.querySelectorAll(".btn");
for(btnss of allBtns){
    btnss.addEventListener("click", btnPress);
}


function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

