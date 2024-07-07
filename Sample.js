// js
console.log("\nWelcome To Tik Toe eee Game !")
var lst = ["-","-","-",
	   "-","-","-",
	   "-","-","-"]
selfCounter = 0
dic = {}
var compMove
var currentPlayer = ""
var Winner = "-"
const prompt = require('prompt-sync')();
currentPlayer = prompt("Select Symbol [O  X]:")
currentPlayer = currentPlayer.toUpperCase()
if(currentPlayer=== "X" || currentPlayer=="O"){
	Name1 = prompt("Player1 Name ?:")
	dic[currentPlayer] = Name1
	Name2 = prompt("Player2 Name ?:")
	if(currentPlayer=="X"){
		dic["O"] = Name2
	}else{
		dic["X"] = Name2
	}
	listPlayers()
	StartGame()

}else{
	console.log("[!] Enter The Possible Symbol [O X][!]")
}
function withComputer(){
	selfCounter+=1
	compMove = Math.floor(Math.random()*8)
	console.log(`${selfCounter}. ${compMove}`)
	compMove = parseInt(compMove)
	console.log(typeof compMove)
	if(lst[compMove]==="-"){
		return compMove
	}else{
		withComputer()
	}
}
function listPlayers(){
	console.log(`[1] ${dic["X"]} -------- > X`)
	console.log(`[2] ${dic["O"]} -------- > O`)
}
function Print(){
	console.log("\n"+lst[0]+" | "+lst[1]+" | "+lst[2]+"\t")
	console.log("\n"+lst[3]+" | "+lst[4]+" | "+lst[5]+"\t")
	console.log("\n"+lst[6]+" | "+lst[7]+" | "+lst[8]+"\t")

}

function ChangePlayer(){
	if(currentPlayer=="X"){
		currentPlayer = "O"
	}else{
		currentPlayer = "X"
	}
}
function isGameTie(){
	for(let i=0;i<=lst.length;i+=1){
		if(lst[i]=="-"){
			return false

		}
	}
	return true
}
function inputSelection(){
	GetPos = prompt(`${dic[currentPlayer]} [0-8]:`)
	if(lst[GetPos]=="-"){
		lst[GetPos] = currentPlayer
	}else if(GetPos == "EXIT"){
		Winner = " "
	}
	else{
		console.log("Already Filled")
	}
}

function checkDiagnol(){
	if(lst[0]==lst[4] && lst[0]!="-"){
		if(lst[0]==lst[8]){
			Winner = lst[0]
			return true
		}
	}
}
function CheckDiagonalRight(){
	if(lst[2] === lst[4] && lst[2]!="-"){
		if(lst[2] === lst[6]){
			Winner = lst[2]
			return true
		}
	}
}
function checkRow(){
	if(lst[0] === lst[1] && lst[0] !="-"){
		if(lst[2]===lst[0]){
			Winner = lst[0]
			return true
		}
	}else if(lst[3]===lst[4] && lst[3]!="-"){
		if(lst[3]===lst[5]){
			Winner = lst[3]
			return true
		}
	}else if(lst[6]===lst[7] && lst[6]!="-"){
		if(lst[6]===lst[8]){
			Winner = lst[6]
			return true
		}
	}
}

function CheckCol(){
	if(lst[0]===lst[3] && lst[0]!="-"){
		if(lst[0]===lst[6]){
			Winner = lst[0]
			return true
		}
	}else if(lst[1]===lst[4] && lst[1]!="-"){
		if(lst[1]===lst[7]){
			Winner = lst[1]
			return true
		}
	}else if(lst[2]===lst[5] && lst[2]!="-"){
		if(lst[2]===lst[8]){
			Winner=lst[2]
			return true
		}
	}

}
function checkWinner(){
	if(Winner!="-"){
		console.log("\n- - - - - - -- - - -Congradulations ! - - - - - - - - - - - - - - - - -")
		Print()
		console.log("\n- - - - - - -- - - - - - - - - - - - - - - - - - - - - - - - - - ")
		console.log("\n                                                                  ")
		console.log(" \n                                                                 ")
		console.log("\nWinner :",`${dic[Winner]}`)
		console.log("\n                                                                  ")
		console.log("\n- - - - - - -- - - - - - - - - - - - - - - - - - - - - - - - - -  ")
	}

}
function isWinner(){

	if(checkDiagnol()){
		return true
	}else if(CheckCol()){
		return true

	}else if(checkRow()){
		return true
	}else if(CheckDiagonalRight()){
		return true
	}
}

// While Cond
function StartGame(){
	while(Winner=="-"){
		Print()
		inputSelection()
		Print()
		if(isWinner()){
			checkWinner()
			console.log("Game ! Over !",dic[Winner]);
			break
		}
		if(isGameTie()){
			Print()
			console.log("Game Got Tie ! OOps No Winner or Loser !")
			break
		}
		ChangePlayer()
		inputSelection()
		if(isWinner()){
			checkWinner()
			console.log("Game Over ! ",dic[Winner])
		}
		if(isGameTie()){
			Print()
			console.log("Game Got Tie ! OOps No Winner or Loser !")
			break
		}
		ChangePlayer()
	}
}