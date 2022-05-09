let hands = ["rock", "paper", "scissors"]
let randomNumber = Math.floor(Math.random() * 3) 
let randomNumber2 = Math.floor(Math.random() * 3)
function game() {
    console.log("You Have " + hands[randomNumber] + " and I Have " + hands[randomNumber2])
}
function result() {
    if(hands[randomNumber] === "rock" && hands[randomNumber2] === "scissors") {
    console.log("You Win") 
    } else if(hands[randomNumber] === "rock" && hands[randomNumber2] === "rock") {
        console.log("Tie")
    } else if(hands[randomNumber] === "paper" && hands[randomNumber2] === "rock") {
        console.log("You Win")
    } else if(hands[randomNumber] === "paper" && hands[randomNumber2] === "paper") {
        console.log("Tie")
    } else if(hands[randomNumber] === "scissors" && hands[randomNumber2] === "scissors") {
        console.log("Tie")
    } else if(hands[randomNumber] === "scissors" && hands[randomNumber2] === "paper") {
        console.log("You Win")
    } else {
        console.log("I Win")
    }
}
game()
result()