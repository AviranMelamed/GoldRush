// here you'll create your new matrix, it should extend from Matrix
// const Matrix = require(`./Matrix.js`)

class GoldRush extends Matrix {

    constructor(row, col) {
        super(row, col)
        this.player1 = {score: 0}
        this.player2 = {score: 0}
        this.generateMatrix()


    }
    async movePlayer(num, direction) {
        // this.alter((this.findCoordinate(num).x) , (this.findCoordinate(num).y), num)
        const coords =  this.findCoordinate(num)
        // console.log(coords)
        if (direction === "down" && this.matrix[coords.x + 1][coords.y] === ".") {
            this.alter(coords.x +1, coords.y , num)
            this.alter(coords.x, coords.y, `.`)
            
        }
        if(direction === "down" && this.matrix[coords.x +1][coords.y] === "c"){
            this.alter(coords.x +1, coords.y , num)
            this.alter(coords.x, coords.y, `.`)
            if(num == 1){
                this.player1.score += 10
                    if(this.player1.score === 50) {
                       this.gameOver("1")
                    }
            }
                
            if(num == 2){this.player2.score += 10
                if(this.player2.score === 50) {
                    this.gameOver("2")
                }
            }
        }
            

            
        if (direction === "right" && this.matrix[coords.x][coords.y + 1] === ".") {
            this.alter(coords.x, coords.y +1, num)
            this.alter(coords.x, coords.y, `.`)
       
        }
        if(direction === "right" && this.matrix[coords.x][coords.y + 1] === "c"){
            this.alter(coords.x, coords.y +1, num)
            this.alter(coords.x, coords.y, `.`)
        
            if(num == 1){
                this.player1.score += 10
                if(this.player1.score === 50) {
                    this.gameOver("1")
                }
            }
                if(num == 2){this.player2.score += 10
                    if(this.player2.score === 50) {
                        this.gameOver("2")
                    }
                }

            }
        if (direction === "left" && this.matrix[coords.x][coords.y - 1] === ".") {
            this.alter(coords.x, coords.y -1, num)
            this.alter(coords.x, coords.y, `.`)
            
        }
        if(direction === "left" && this.matrix[coords.x][coords.y -1] === "c"){
            this.alter(coords.x , coords.y -1 , num)
            this.alter(coords.x, coords.y, `.`)

            if(num == 1){
                this.player1.score += 10
                if(this.player1.score === 50) {
                    this.gameOver("1")
                }
            }
                
            if(num == 2){this.player2.score += 10
                if(this.player2.score === 50) {
                   this.gameOver("2")
                }
            }
        }
        if (direction === "up" && this.matrix[coords.x - 1][coords.y] === ".") {
            this.alter(coords.x - 1, coords.y , num)
            this.alter(coords.x, coords.y, `.`)
   
        }
        if(direction === "up" && this.matrix[coords.x -1][coords.y] === "c"){
            this.alter(coords.x -1, coords.y , num)
            this.alter(coords.x, coords.y, `.`)
         
            if(num == 1){
                {this.player1.score += 10
                if(this.player1.score === 50) {
                    console.log("HII")}}
                }
            if(num == 2){this.player2.score += 10
                if(this.player2.score === 50) {
                    this.gameOver("2")
                }
            }

        }

        // //    console.log(board.findCoordinate(num))
    }
    gameOver(player){
        $("body").empty()
        $("body").append(`<div > player ${player} win</div>`)
    }
    

}



// board.movePlayer(1, "down")
// // console.log(board.player1.score) //prints 0
// board.print()
// board.movePlayer(1, "down")
// // console.log(board.player1.score) //prints 0
// board.print()
// board.movePlayer(1, "down")
// board.print()

// console.log(board.player1.score) //prints 0
// board.print()