player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;
number_1 = 0
number_2 = 0

document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML =  "Question Turn -" + player1_name ;
document.getElementById("player_answer").innerHTML =  "Answer Turn -" + player2_name ;

var ans

function send() 
{ 
      get_number_1 = document.getElementById("number_1").value; 
      check_button = "<br><br><button class='btn btn-surrender' onclick='check()'>Check</button>";
      row = number_1 + x + number_2 ; 
      document.getElementById("output").innerHTML = row;
      document.getElementById("word").value = ""; 
}