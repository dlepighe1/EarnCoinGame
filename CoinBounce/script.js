// Variables
let screenDiv = document.querySelector('.screen')
let gameDiv = document.querySelector('.play')
let circle = document.querySelector('.player-circle');

function start(){
    // Make the home page invisible and the game page visible
    screenDiv.style.display = 'none'
    gameDiv.style.display = 'block'

    // Call the game function
    play()
}

function play(){
    // Variables we need


    // Player's circle

    const onMouseMove = (e) =>{
        // Prevent the mouse from going out of the screen
        
        circle.style.left = e.pageX + 'px';
        circle.style.top = e.pageY + 'px';
        circle.style.display = "block"
    }

    document.addEventListener('mousemove', onMouseMove)

}

function exit(){

}
