function getComputerChoice(){
    let opt1 =[1,2,3]
    let ind=Math.floor(Math.random()*opt1.length)
    let val= opt1[ind]
        if(val===1){
            return "Rock"
        }
        else if(val===2){
            return "Paper"
        }
        else if(val===3){
            return "Scissor"
        }
    }/*console.log(getComputerChoice())*/
    
    function playRound(player,computer){
        let con;
        if (player.toLowerCase()==="rock" && computer==="Rock"){
        console.log("its a tie try again")
        return 0
        }
        else if (player.toLowerCase()==="rock" && computer==="Paper"){
        console.log("You lost Paper beats rock")
        return 2
        }
        else if (player.toLowerCase()==="rock" && computer==="Scissor"){
        console.log("You Win Rock beats Scissors")
        return 1
        }
        else if (player.toLowerCase()==="paper" && computer==="Rock"){
        console.log("You Win "+player+" beats "+computer+". ")
        return 1
        }
        else if (player.toLowerCase()==="paper" && computer==="Paper"){
        console.log("its a tie try again")
        return 0
        }
        else if (player.toLowerCase()==="paper" && computer==="Scissor"){
        console.log("You lost Scissors beats Paper")
        return 2
        }
        else if (player.toLowerCase()==="scissor" && computer==="Rock"){
        console.log("You lost Rock beats Scissors")
        return 2
        }
        else if (player.toLowerCase()==="scissor" && computer==="Paper"){
        console.log("You Win Scissors beats Paper")
        return 1
        }
        else if (player.toLowerCase()==="scissor" && computer==="Scissor"){
        console.log("its a tie try again")
        return 0
        return 
        }
        else{
        console.log("You put undefined input so you lose by default")
        return 2
        }
    }
    
    /*console.log(playRound("rock",getComputerChoice()))*/
    function game(){
        let counC=0;
        let counP=0;
        for (let i=0; i<5;i++){
            let playersel=prompt('chose paper,rock or scissors')
            let round =playRound(playersel,getComputerChoice())
            if(round===1){
            counP++
            }else if(round===2){
            counC++
            }
        }
        if(counP>counC){
            return "Congra, You are the over all winner: computer "+counC+" YOU "+counP
        }
        else if(counP===counC){
            return "It's a tie "
        }else{
            return "You lost: computer "+counC+" YOU "+counP
        }
    }console.log(game())