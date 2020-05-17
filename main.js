const dice = document.querySelector('#dice')
const roll = document.querySelector('#roll')
const total = document.querySelector('#total-number')
const showAll = document.querySelector('#total-rolls')
const list = document.querySelector('#list')

let totalRolls = 0
let diceIndex = 0
let dieRolls = []
let reset = document.querySelector('#reset')
var sound = new Audio();
sound.src ='https://www.myinstants.com/media/sounds/shake-and-roll-dice-soundbible.mp3'


roll.addEventListener('click', function(){


    while (diceIndex < dice.value) {
    let randomRoll = Math.floor(Math.random() * 6) + 1;
    totalRolls += randomRoll

    console.log (randomRoll)
    diceIndex++;
    dieRolls.push(randomRoll)
}
total.innerText = 'Total:' +  totalRolls

console.log ( dieRolls)
sound.play()
})

showAll.addEventListener ('click', function(){

 while (dieRolls.length > 0){
     const listItems = document.createElement('li')
     listItems.innerHTML =+ dieRolls.pop([0])
     list.appendChild(listItems)
     diceIndex += 1
 }
})

reset.addEventListener ('click', function(){
dieRolls = []
dice.value = ''
total.innerHTML = ''
totalRolls = 0
list.innerHTML = ''
resetSound.play()

} )



