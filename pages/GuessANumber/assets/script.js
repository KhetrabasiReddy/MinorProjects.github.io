console.log('game initializing');

const checkBtn = document.querySelector('.btn-check');
const restartBtn = document.getElementById('restart');
let randNum = generateRandNum(1,100);
let count = 0;
function generateRandNum(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkNumber() {
    restartBtn.removeAttribute('disabled');
    count++;
    let num = Number(document.getElementById('number').value); 
    const promptPanel = document.querySelector('.prompt-panel');
    promptPanel.style.visibility = 'visible';
    if(num === randNum){
        promptPanel.textContent = 'correct ' + 'guessed in ' + count + ' chances';
    } else if(num <= randNum){
        promptPanel.textContent = 'greater than '+num;
    }else{
        promptPanel.textContent = 'less than '+num;
    }
}

function restartGame(){
    window.location.reload();
}



checkBtn.addEventListener('click', checkNumber);
restartBtn.addEventListener('click',restartGame);







