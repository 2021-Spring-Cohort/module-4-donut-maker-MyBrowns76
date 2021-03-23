
let donutCount = 0;
let donutClickButton = document.querySelector("#donut-click-button");
let numberOfDonuts = document.querySelector(".number-of-donuts");


const buyAutoClickerButton = document.getElementById('button--buyAutoClicker');
const buyMultiplierButton = document.getElementById('button--buyMultiplier');
buyAutoClickerButton.disabled = true;
buyMultiplierButton.disabled = true;




donutClickButton.addEventListener("click", addDonut);
const donutCounterDisplay = document.getElementById('donutsCounterDisplay');

const autoClickersDisplay = document.getElementById('h3--autoclickers');
const multipliersDisplay = document.getElementById('h3--multipliers');

//let autoClickerIsRunning = false; 

document.getElementById('resetGame').addEventListener('click', resetGame);
function resetGame(){
  if(
      confirm("Are you sure you want to start over? You will lose every hard earned donut in your possession. ")
  ) {
  donutMaker.resetGameToStart();
  updateElements();
  }
 }

function addDonut() {
  if(buyAutoClickerButton.activate ){
    donutCount = donutCount + 100;
  }
  else if(buyMultiplierButton.activate){
    donutCount +=10;
  }
  else{
    donutCount +=1;
  }
  
  updateElements();
}

function resetButtonClick(){
  location.reload();
}
function activateMultipliers(){
  buyMultiplierButton.activate = true;
}
function activateAutoClicker(){
  buyAutoClickerButton.activate = true;
}
function updateElements() {
  numberOfDonuts.innerText =donutCount; 
  if(donutCount>=10){
    buyMultiplierButton.disabled = false;
    buyMultiplierButton.addEventListener("click", activateMultipliers)
  }
  else buyMultiplierButton.disabled = true;
  if(donutCount>99){
    buyAutoClickerButton.disabled = false;
    buyAutoClickerButton.addEventListener("click", activateAutoClicker)
  }
  else buyAutoClickerButton.disabled = true;

}



  

