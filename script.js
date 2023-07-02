

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
        if (player==="rock" && computer==="Rock"){
        console.log("its a tie try again")
        return 0
        }
        else if (player==="rock" && computer==="Paper"){
        console.log("You lost Paper beats rock")
        return 2
        }
        else if (player==="rock" && computer==="Scissor"){
        console.log("You Win Rock beats Scissors")
        return 1
        }
        else if (player==="paper" && computer==="Rock"){
        console.log("You Win "+player+" beats "+computer+". ")
        return 1
        }
        else if (player==="paper" && computer==="Paper"){
        console.log("its a tie try again")
        return 0
        }
        else if (player==="paper" && computer==="Scissor"){
        console.log("You lost Scissors beats Paper")
        return 2
        }
        else if (player==="scissor" && computer==="Rock"){
        console.log("You lost Rock beats Scissors")
        return 2
        }
        else if (player==="scissor" && computer==="Paper"){
        console.log("You Win Scissors beats Paper")
        return 1
        }
        else if (player==="scissor" && computer==="Scissor"){
        console.log("its a tie try again")
        return 0
        
        }
        else{
        console.log("You put undefined input so you lose by default "+ player)
        return 2
        }
    }
    
    /*console.log(playRound("rock",getComputerChoice()))*/
    function game(playersel){
        let counC=0;
        let counP=0;
        for (let i=0; i<5;i++){
            //let playersel=prompt('chose paper,rock or scissors')
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
    }//console.log(game())
let scop=0;
let scoc=0;



window.addEventListener('click',function(e){
    if(e.target.className === 'paper' || e.target.className==='rock' ||e.target.className==='scissor'){
        let val=getComputerChoice()
        let winner= playRound(e.target.className,val)
        const win =document.querySelector('.footer')
        const scorep =document.querySelector('.playerSCO')
        const scorec =document.querySelector('.computerSCO')
        const className=e.target.className
        //for the red player buttons
        const paperButton = document.querySelector('.paper');
        const rockButton = document.querySelector('.rock');
        const scissorButton = document.querySelector('.scissor');
        paperButton.classList.remove('playeradd')
        rockButton.classList.remove('playeradd')
        scissorButton.classList.remove('playeradd')
        if(className==='paper'){
            paperButton.classList.add('playeradd')
        }else if(className==='rock'){
            rockButton.classList.add('playeradd')
        }else if(className==='scissor'){
            scissorButton.classList.add('playeradd')
        }
        //for the blue computer buttons
        const papercButton = document.querySelector('.paperc');
        const rockcButton = document.querySelector('.rockc');
        const scissorcButton = document.querySelector('.scissorc');
        papercButton.classList.remove('compadd')
        rockcButton.classList.remove('compadd')
        scissorcButton.classList.remove('compadd')
        if (val==='Paper'){
            papercButton.classList.add('compadd')
        }
        else if(val==='Rock'){
            rockcButton.classList.add('compadd')
        }
        else if(val==='Scissor'){
            scissorcButton.classList.add('compadd')
        }
        if (winner===1){
           
            win.textContent='You win'
            scop=scop+1;
            scorep.textContent='score = '+scop

        }else if(winner===2){
            
            win.textContent='You lose'
            scoc=scoc+1;
            scorec.textContent='score = '+scoc
        }else if(winner===0){
            win.textContent="it's a tie"
        }
        if(scop>=5 ){
            scop=0;
            scoc=0;
            win.textContent="congratulations, You are the overall winner"
            scorec.textContent='score = 0'
            scorep.textContent='score = 0'
        }else if(scoc>=5){
            scop=0;
            scoc=0;
            win.textContent="Sorry, you are the overall losser. try again"
            scorec.textContent='score = 0'
            scorep.textContent='score = 0'
        }
    }
   
    


})


    
    