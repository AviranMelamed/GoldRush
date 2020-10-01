// file to hold your base Matrix data structure
// Feel free to use a class you've already written in the past


class Matrix {
    constructor(row, col) {
        this.row = row
        this.col = col
        this.matrix = []
        this.num = 1
    }
    generateMatrix() {
        for (let r = 0; r < this.row; r++) {
            this.matrix.push([])
            for (let c = 0; c < this.col; c++) {
                this.matrix[r].push(`.`)

            }
            
        }
        this.matrix[0][0] = this.num
        this.matrix[this.row - 1][this.col - 1] = this.num + 1

      const randomC = Math.floor(Math.random() * (this.col*this.row -2))
                for (let i = 0; i < randomC; i++){
                    const randomCol = Math.floor(Math.random() * this.col)
                    const randomRow = Math.floor(Math.random() * this.row)
                    const Random = this.matrix[randomRow][randomCol]
                    if(Random == ".")
                    {this.alter(randomRow, randomCol, "c")}
                    
                }
                for (let i = 0; i < randomC; i++){
                    const randomCol = Math.floor(Math.random() * this.col)
                    const randomRow = Math.floor(Math.random() * this.row)
                    const Random = this.matrix[randomRow][randomCol]
                    if(Random == ".")
                    {this.alter(randomRow, randomCol, "B")}
                    
                }
        
        
    }
    printRow(rowNum) {
        for (let i = 0; i < this.matrix[rowNum].length; i++) {
            console.log(this.matrix[rowNum][i])
        }
    }
    printColumn(colNum) {
        for (let i = 0; i < this.matrix.length; i++) {
            console.log(this.matrix[i][colNum])
        }
    }
    get(rowNum, colNum) {
        return this.matrix[rowNum][colNum]
    }
    alter(rowNum, colNum, updateNum) {
        this.matrix[rowNum][colNum] = updateNum
    }

    findCoordinate(number) {
        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix[i].length; j++) {
                if (this.matrix[i][j] === number) {
                    return ({ x: i, y: j })
                }
            }
        }
    }
    print() {
        
        // return this.matrix
        return(this.matrix)
        
    }



}
// const board = new Matrix(5, 5)
// board.print()

// module.exports = Matrix