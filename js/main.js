/* Grille de jeu */

document.querySelector(".container").innerHTML = 

       `
            <div class="gridContainer">
                <div class="square player" id="1"></div>
                <div class="square player" id="2"></div>
                <div class="square player" id="3"></div>
                <div class="square player" id="4"></div>
                <div class="square player" id="5"></div>
                <div class="square player" id="6"></div>
                <div class="square player" id="7"></div>
                <div class="square player" id="8"></div>
                <div class="square player" id="9"></div>
        </div>
            <div class="displayInfo">
            <p class="joueur" id="player1">player1 = "x" </p><br>
            <p class="joueur" id="player2">player2 = "o"</p>
            <div class="buttonPlay">
            <button>Play</button>
            </div>
            </div>
            `

let xGame = []/*  array des coups joués avec croix */
let oGame = []   /* array des coups joués avec ronds */
let button = document.querySelector(".buttonPlay")
let player1 = document.querySelector("#player1")
let player2 = document.querySelector("#player2")
let actualPlayer 

button.addEventListener("click", function(){
    player1.style.backgroundColor = "yellow";
    actualPlayer = player1
})

let squares = document.querySelectorAll(".square")
squares.forEach(square => square.addEventListener("click",function(e)
{
   
 if(e.target.classList.contains("player") && actualPlayer === player1)
 {
     e.target.classList.replace("player","playerX")
     xGame.push(square["id"])
     console.log(xGame.sort())
     actualPlayer = player2
     player1.style.backgroundColor = "";
     player2.style.backgroundColor = "yellow";
}

  if(e.target.classList.contains("player") && actualPlayer === player2){
        e.target.classList.replace("player","playerO")
        oGame.push(square["id"])
         console.log(oGame.sort()) 
        actualPlayer = player1
        player2.style.backgroundColor = "";
        player1.style.backgroundColor = "yellow";

       }
       else {
           e.target.classList.remove("player")
          }

          let squareId = square["id"]
          
          
          let squareClass = square.classList[1]


 function win()
    {
 /* win X   */  
if(xGame.includes("1") && xGame.includes("2") && xGame.includes("3"))
        {            
            alert("Player1  win")
        }
if(xGame.includes("4") && xGame.includes("5") && xGame.includes("6"))
        {
            alert("Player1  win")
        }
if(xGame.includes("7") && xGame.includes("8") && xGame.includes("9"))
        {
            alert("Player1  win")
        }
if(xGame.includes("1") && xGame.includes("4") && xGame.includes("7"))
        {
            alert("Player1  win")
        }
if(xGame.includes("2") && xGame.includes("5") && xGame.includes("8"))
        {
            alert("Player1  win")
        }
if(xGame.includes("3") && xGame.includes("6") && xGame.includes("9"))
        {
            alert("Player1  win")
        }
if(xGame.includes("1") && xGame.includes("5") && xGame.includes("9"))
        {
            alert("Player1  win")
        }
if(xGame.includes("3") && xGame.includes("5") && xGame.includes("7"))
        {
            alert("Player1  win")
        }


       /*  win O */
       if(oGame.includes("1") && oGame.includes("2") && oGame.includes("3"))
        {            
            alert("Player2  win")
        }
if(oGame.includes("4") && oGame.includes("5") && oGame.includes("6"))
        {
            alert("Player2  win")
        }
if(oGame.includes("7") && oGame.includes("8") && oGame.includes("9"))
        {
            alert("Player2  win")
        }
if(oGame.includes("1") && oGame.includes("4") && oGame.includes("7"))
        {
            alert("Player2  win")
        }
if(oGame.includes("2") && oGame.includes("5") && oGame.includes("8"))
        {
            alert("Player2  win")
        }
if(oGame.includes("3") && oGame.includes("6") && oGame.includes("9"))
        {
            alert("Player2  win")
        }
if(oGame.includes("1") && oGame.includes("5") && oGame.includes("9"))
        {
            alert("Player2  win")
        }
if(oGame.includes("3") && oGame.includes("5") && oGame.includes("7"))
        {
            alert("Player2  win")
        }

    } 
 win()  
}))

   



 function Morpion()
{
    let grid = document.querySelectorAll(".square")
    let X = "X"
    let O = "O"

}  
