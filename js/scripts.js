// BACK END //
function Player1(name, score){
  this.name = name;
  this.score = score;
}
function Player2(name, score){
  this.name = name;
  this.score = score;
}

Player1.prototype.scoring = function () {
  var die = Math.floor(Math.random() * 6 + 1);
  
};


// FRONT END //
$(document).ready(function(){
  $("#form1").submit(function(event){
    event.preventDefault();
    var name1 = $("#name1").val();
    var name2 = $("#name2").val();
    var score1 = 0;
    var score2 = 0;
    var playerOne = new Player1(name1, score1);
    console.log(playerOne);
    playerOne.scoring();
    console.log(playerOne.scoring());


  });
});
