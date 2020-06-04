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


class Morpion
{
    

    constructor()
    {
        this.player1 = document.querySelector("#player1");
        this.player2 = document.querySelector("#player2");
        this.actualPlayer 
        this.xGame = [];
        this.oGame = [];
        this.button = document.querySelector(".buttonPlay");
        this.squares = document.querySelectorAll(".square")
    }

   start(){
    this.button.addEventListener("click", () => {
        this.player1.style.backgroundColor = "yellow";
        this.actualPlayer = this.player1
        
    })
    this.play()
   }

   play()
   {
    this.squares.forEach(square => square.addEventListener("click", (e) => {
        if(e.target.classList.contains("player") && this.actualPlayer === this.player1)
            {
                e.target.classList.replace("player","playerX")
                this.xGame.push(square["id"])
                this.actualPlayer = this.player2
                this.player1.style.backgroundColor = "";
                this.player2.style.backgroundColor = "yellow";
                this.win()
            }
        if(e.target.classList.contains("player") && this.actualPlayer === this.player2)
            {
                e.target.classList.replace("player","playerO")
                this.oGame.push(square["id"])
                this.actualPlayer = this.player1
                this.player2.style.backgroundColor = "";
                this.player1.style.backgroundColor = "yellow";
                this.win()
        
            }
            else {
                   e.target.classList.remove("player")
                  }
        })
        ) 
    }
    win()
    {
         if(this.xGame.includes("1") && this.xGame.includes("2") && this.xGame.includes("3"))
                {            
                    alert("Player1  win")
                }
        if(this.xGame.includes("4") && this.xGame.includes("5") && this.xGame.includes("6"))
                {
                    alert("Player1  win")
                }
        if(this.xGame.includes("7") && this.xGame.includes("8") && this.xGame.includes("9"))
                {
                    alert("Player1  win")
                }
        if(this.xGame.includes("1") && this.xGame.includes("4") && this.xGame.includes("7"))
                {
                    alert("Player1  win")
                }
        if(this.xGame.includes("2") && this.xGame.includes("5") && this.xGame.includes("8"))
                {
                    alert("Player1  win")
                }
        if(this.xGame.includes("3") && this.xGame.includes("6") && this.xGame.includes("9"))
                {
                    alert("Player1  win")
                }
        if(this.xGame.includes("1") && this.xGame.includes("5") && this.xGame.includes("9"))
                {
                    alert("Player1  win")
                }
        if(this.xGame.includes("3") && this.xGame.includes("5") && this.xGame.includes("7"))
                {
                    alert("Player1  win")
                }


            if(this.oGame.includes("1") && this.oGame.includes("2") && this.oGame.includes("3"))
                {            
                    alert("Player2  win")
                }
        if(this.oGame.includes("4") && this.oGame.includes("5") && this.oGame.includes("6"))
                {
                    alert("Player2  win")
                }
        if(this.oGame.includes("7") && this.oGame.includes("8") && this.oGame.includes("9"))
                {
                    alert("Player2  win")
                }
        if(this.oGame.includes("1") && this.oGame.includes("4") && this.oGame.includes("7"))
                {
                    alert("Player2  win")
                }
        if(this.oGame.includes("2") && this.oGame.includes("5") && this.oGame.includes("8"))
                {
                    alert("Player2  win")
                }
        if(this.oGame.includes("3") && this.oGame.includes("6") && this.oGame.includes("9"))
                {
                    alert("Player2  win")
                }
        if(this.oGame.includes("1") && this.oGame.includes("5") && this.oGame.includes("9"))
                {
                    alert("Player2  win")
                }
        if(this.oGame.includes("3") && this.oGame.includes("5") && this.oGame.includes("7"))
                {
                    alert("Player2  win")
                }

            } 

        replay()
        {
            if(this.win()){

                this.xGame = [];
                this.oGame = [];;
                this.squares = document.querySelectorAll(".square")
            }
        }
   
}
const game = new Morpion;
game.start()

