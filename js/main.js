document.querySelector(".container").innerHTML = 

       `
            <div class="gridContainer">
                <div class="square" id="square1">1</div>
                <div class="square" id="square2">2</div>
                <div class="square" id="square3">3</div>
                <div class="square" id="square4">4</div>
                <div class="square" id="square5">5</div>
                <div class="square" id="square6">6</div>
                <div class="square" id="square7">7</div>
                <div class="square" id="square8">8</div>
                <div class="square" id="square9">9</div>
        </div>
            <div class="displayInfo">
            </div>
            `

let squares = document.querySelectorAll(".square")

/* console.log(squares)  */
squares.forEach(square => square.addEventListener("click",function(){
    let pionX = "X"
    let pionO = "O"
    square.innerHTML = pionX
    let squareId = square["id"]
    console.log(squareId)
    let squareDom = document.querySelector(`#${square["id"]}`)
    console.log(squareDom)
}))


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

fonction : joueur choisi pion
fonction  : si croix choisie - le second joueur aura le Rond
fonction : si croix jouée rond obligé et inversement
fonction : si case jouée : bloquée ou alert
fonction : si cases qui se touchent ont même symbole : gagné