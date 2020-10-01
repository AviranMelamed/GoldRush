// main.js - your controller file: this will load the initial game and react to user input
const renderer = new Renderer()


$("#start").on("click", function() {
    const colInput= $("#col").val()
    const rowInput= $("#row").val()
    $("#Starts").empty()
    const board = new GoldRush(rowInput, colInput)

    renderer.renderBoard(board.print())
    renderer.renderScores1(board.player1.score)
    renderer.renderScores2(board.player2.score)



$(document).keypress(function (e) {

    if (e.which == 119) {
          board.movePlayer(1, "up")
          renderer.renderNewBoard(board.print())
          renderer.renderNewScores1(board.player1.score)


    }
    if (e.which == 115) {
        board.movePlayer(1, "down")
        renderer.renderNewBoard(board.print())
        renderer.renderNewScores1(board.player1.score)
        // console.log(GoldRush.player1.score)

    }
    if (e.which == 97) {
    board.movePlayer(1, "left")
    renderer.renderNewBoard(board.print())
    renderer.renderNewScores1(board.player1.score)


    }
    if (e.which == 100) {
    board.movePlayer(1, "right")
    renderer.renderNewBoard(board.print())
    renderer.renderNewScores1(board.player1.score)


    }
})

    // $(document).keydown(function (e){})

// if (e.which == 38) {
//     console.log("HII")

//       board.movePlayer(2, "up")
//       renderer.renderBoard(board.print())

// }})
// console.log(e.which)
// if (e.which == 40) {
    
//     console.log("HII2")
//     board.movePlayer(1, "down")
//     renderer.renderBoard(board.print())

// }
// if (e.which == 97) {
// board.movePlayer(1, "left")
// renderer.renderBoard(board.print())

// }
// if (e.which == 100) {
// board.movePlayer(1, "right")
// renderer.renderBoard(board.print())

// }

})
