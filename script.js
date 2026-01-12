const board = document.querySelector('.board');
const StartButton = document.querySelector('.btn-start');
const modal = document.querySelector('.modals');
const StartGameModal=document.querySelector('.start-game');
const GameOverModal = document.querySelector('.game-over');
const RestartButton = document.querySelector('.btn-restart');
const HighScoreElement = document.querySelector('#high-score');
const ScoreElement = document.querySelector('#score');
const TimeElement = document.querySelector('#time');

const blockHeight = 50;
const blockWidth = 50;

let highScore = localStorage.getItem("highScore")||0; //highScore feth through local storage if unidifined then set 0 .
HighScoreElement.innerText=highScore; //HighScore Visualise

let score = 0;
let time = `00-00`;

const cols = Math.floor(board.clientWidth/blockWidth);
const rows = Math.floor(board.clientHeight/blockHeight);

const blocks = [];
let snake = [{
        x:1,
        y:5,
}];
let food = {x:Math.floor(Math.random()*rows), y:Math.floor(Math.random()*cols)}; // random food spwan logic
let direction ="down";


let IntervalId = null;
let TimerIntervalId=null;

// Create grid dynamically and visually represent blocks
for(let row = 0; row < rows; row++){
    for(let col = 0; col < cols; col++){
        const block = document.createElement('div');
        block.classList.add('block');
        board.appendChild(block);
        blocks[`${row}-${col}`] = block;
    }
}

function renderSnake(){
    // add food color logic
    blocks[`${food.x}-${food.y}`].classList.add("food");

    // snake moving logic with direction
    let head = null;
    if(direction === "left"){
        head ={x: snake[0].x, y: snake[0].y - 1};
    }else if(direction === "right"){
        head ={x: snake[0].x, y: snake[0].y + 1};
    }else if(direction==="down"){
        head ={x: snake[0].x + 1, y: snake[0].y};
    }else if(direction==="up"){
        head ={x: snake[0].x - 1, y: snake[0].y};
    }

    // wall collision logic
    if(head.x < 0 || head.y < 0 || head.x >= rows || head.y >= cols){
        clearInterval(IntervalId);
        modal.style.display="flex";
        StartGameModal.style.display="none";
        GameOverModal.style.display="flex";

        return;
    }

    // food consume & length increase logic
    if(head.x === food.x && head.y === food.y){
        blocks[`${food.x}-${food.y}`].classList.remove("food");
        food = {x:Math.floor(Math.random()*rows), y:Math.floor(Math.random()*cols)};
        blocks[`${food.x}-${food.y}`].classList.add("food");
        snake.unshift(head);

        score+=10;
        ScoreElement.innerText=score;

        if(score>highScore){
            highScore=score;
            localStorage.setItem("highScore",highScore.toString())
        }
    }

    //snake moving and tail moving logic
    snake.forEach(segment=>{
        blocks[`${segment.x}-${segment.y}`].classList.remove("fill");
    })

    // head going and tail removing logic
    snake.unshift(head);
    snake.pop();

    // snake arrival and color fill logic
    snake.forEach(segment=>{
        blocks[`${segment.x}-${segment.y}`].classList.add("fill");
    })
}

function restartGame(){

    // reset score & Time
    score=0;
    time=`00-00`;

    ScoreElement.innerText=score; // rest High Score
    TimeElement.innerHTML=time; // reset Time
    HighScoreElement.innerText=highScore; // Fetch HighScore Visualise


    // previous stage snake and food remove logic
    blocks[`${food.x}-${food.y}`].classList.remove("food");
    snake.forEach(segment=>{
        blocks[`${segment.x}-${segment.y}`].classList.remove("fill");
    })

    // after click restart button this odal remove and game screen appear logic
    modal.style.display="none";

    // snake & food random appear logic
    snake = [{
        x:Math.floor(Math.random()*rows),
        y:Math.floor(Math.random()*cols)
    }];
    food = {x:Math.floor(Math.random()*rows), y:Math.floor(Math.random()*cols)};

    direction ="down"; // add hard code after restart button snake go in down direction

    IntervalId=setInterval(() => {renderSnake()}, 300); // fps set in 1 second 3 frame appear 
}

StartButton.addEventListener("click",()=>{ //start button click through event listener
    modal.style.display="none"; // start display remove and game appear logic
    IntervalId=setInterval(() => {renderSnake()}, 300); // fps set in 1 second 3 frame appear
    
    TimerIntervalId=setInterval(() => { // time screening logic created
        let [min,sec]=time.split("-").map(Number);

        if(sec==59){
            min+=1;
            sec=0
        }else{
            sec+=1;
        }

        time =`${min}-${sec}`;
        TimeElement.innerText=time;

    }, 1000);
})

RestartButton.addEventListener("click",restartGame) // Restart button click through event listener

addEventListener("keydown",(event)=>{   // button click and snake move through keydown eventlistener
    if(event.key === "ArrowUp"){
        direction = "up";
    }else if(event.key === "ArrowDown"){
        direction = "down";
    }else if(event.key === "ArrowLeft"){
        direction = "left";
    }else if(event.key === "ArrowRight"){
        direction = "right";
    }
})