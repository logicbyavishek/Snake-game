const board = document.querySelector('.board');
const blockHeight = 50;
const blockWidth = 50;

const cols = Math.floor(board.clientWidth/blockWidth);
const rows = Math.floor(board.clientHeight/blockHeight);

const blocks = [];
const snake = [{
        x:1,
        y:4,
},{
        x:1,
        y:3,
},{
        x:1,
        y:2,
    }];


// Create grid dynamically and visually represent blocks
for(let row = 0; row < rows; row++){
    for(let col = 0; col < cols; col++){
        const block = document.createElement('div');
        block.classList.add('block');
        board.appendChild(block);
        block.innerText = `${row}-${col}`;
        blocks[`${row}-${col}`] = block;
    }
}

function renderSnake(){
    snake.forEach(segment=>{
        blocks[`${segment.x}-${segment.y}`].classList.add("fill")
    })
}

setTimeout(() => {
    renderSnake();
}, 300);