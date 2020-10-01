
class Renderer {
    renderBoard(matrixData){
     
        for(let i = 0; i< matrixData.length; i++ ){
            // for(let a = 0; a< matrixData[i].length; a++){
                $(".user-container").append(`<div class="${i} col s12">${matrixData[i]}</div>`)
                // console.log(matrixData[i])
        }
    
    }
    renderNewBoard(matrixData){
        for(let i = 0; i< matrixData.length; i++ ){
                $(`div.${i}`).replaceWith(`<div class="${i}">${matrixData[i]}</div>`)
                // console.log(matrixData[i])
        }
    }
   
    renderScores1(score){
        let S1 = score.toString()
        $(".user-scores1").append(`<div class="score1"> Player 1 Score: ${S1}</div>`)
        console.log(`${S1}`)

    }
    renderScores2(score){
        let S2 = score.toString()
        $(".user-scores2").append(`<div class="score2"> Player 2 Score: ${S2}</div>`)
    }

    renderNewScores1(score){
        let S1 = score.toString()
        $("div.score1").replaceWith(`<div class="score1"> Player 1 Score: ${S1}</div>`)
        console.log(S1)
    }
    renderNewScores2(score){
        let S2 = score.toString()
        $("div.score2").replaceWith(`<div class="score2"> Player 2 Score: ${S2}</div>`)
    }
    renderGameOver(){
        

    }
}

