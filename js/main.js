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

let xGame = []
let oGame = []
let button = document.querySelector(".buttonPlay")
let player1 = document.querySelector("#player1")
let player2 = document.querySelector("#player2")
let actualPlayer 

button.addEventListener("click", function(){
    player1.style.backgroundColor = "yellow";
    actualPlayer = player1
})

let squares = document.querySelectorAll(".square")
squares.forEach(square => square.addEventListener("click",function(e){
   
 if(e.target.classList.contains("player") && actualPlayer === player1){
     e.target.classList.replace("player","playerX")
     xGame.push(square["id"])
     console.log(xGame.sort())
     actualPlayer = player2
     player1.style.backgroundColor = "";
     player2.style.backgroundColor = "yellow";
    }
    /* else {
        e.target.classList.remove("player")
       } */

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
/*      / console.log(squareId)
          console.log(squareClass)  */
 

function win()
    {
        let win1 = [squares["0"]["id"], squares["1"]["id"], squares["2"]["id"]]
        let win2 = [squares["3"]["id"], squares["4"]["id"], squares["5"]["id"]]
        let win3 = [squares["6"]["id"], squares["7"]["id"], squares["8"]["id"]]
        let win4 = [squares["0"]["id"], squares["3"]["id"], squares["6"]["id"]]
        let win5 = [squares["1"]["id"], squares["4"]["id"], squares["7"]["id"]]
        let win6 = [squares["2"]["id"], squares["5"]["id"], squares["8"]["id"]]
        let win7 = [squares["0"]["id"], squares["4"]["id"], squares["8"]["id"]]
        let win8 = [squares["2"]["id"], squares["4"]["id"], squares["6"]["id"]]

         /* console.log(win1)  */ 
        if(xGame [["0"], ["1"], ["2"]] == win1[["0"], ["1"], ["2"]]
        || xGame[["0"], ["1"], ["2"]] == win2[["0"], ["1"], ["2"]]
        || xGame[["0"], ["1"], ["2"]] == win3[["0"], ["1"], ["2"]]
        || xGame[["0"], ["1"], ["2"]] == win4[["0"], ["1"], ["2"]]
        || xGame[["0"], ["1"], ["2"]] == win5[["0"], ["1"], ["2"]]
        || xGame[["0"], ["1"], ["2"]] == win6[["0"], ["1"], ["2"]]
        || xGame[["0"], ["1"], ["2"]] == win7[["0"], ["1"], ["2"]]
        || xGame[["0"], ["1"], ["2"]] == win8[["0"], ["1"], ["2"]]
        )

        {
            
            alert("Player 1 win")
        }
    } 
 win() 
  
}))

   


/* console.log(squares)  */
/* squares.forEach(square => square.addEventListener("click",function(){

    const playerActuel = "X"
    square.innerHTML = playerActuel
    let squareId = square["id"]
    console.log(squareId)
    let squareDom = document.querySelector(`#${square["id"]}`)
    console.log(squareDom) */
    
  




/* squares.addEventListener("click",function(event){
    let squareId = document.querySelector(`#${square["id"]}`)
    event.target.squareID
    console.log(squareID)
}) */

 function Morpion()
{
    let grid = document.querySelectorAll(".square")
    let X = "X"
    let O = "O"

}  
/* 
fonction : joueur choisi pion
fonction  : si croix choisie - le second joueur aura le Rond
fonction : si croix jouée rond obligé et inversement
fonction : si case jouée : bloquée ou alert
fonction : si cases qui se touchent ont même symbole : gagné */

/* Donner la croix ou le rond en fonction de la parite du coup */

