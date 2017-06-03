
$( document ).ready(function(){
  var Random=Math.floor(Math.random()*101+19)
  


  // Generate a random number between 19-120 at the start of the game
  
  $('#randomNumber').text(Random);
  
  // Append random number to the randomNumber id 
  
    var num1= Math.floor(Math.random()*11+1)
    var num2= Math.floor(Math.random()*11+1)
    var num3= Math.floor(Math.random()*11+1)
    var num4= Math.floor(Math.random()*11+1)
  


  // Create random number values between 1 - 12 for the crystals
  
    var userTotal= 0; 
    var wins= 0;
    var losses = 0;


  //  Declare variables for random crystal values to add to the score
    $('#numberWins').text(wins);
    $('#numberLosses').text(losses);



  //adds the wins to the userTotal
  function yay(){
    alert("You won!");
    wins++; 
  
  $('#numberWins').text(wins);
  reset();
}

//Add losses to the userTotal

function loser(){
  alert ("You lose!");
  losses++;
  $('#numberLosses').text(losses);
  reset()
}

//Setup click for jewels
  
  $('#one').on ('click', function(){
    userTotal = userTotal + num1;
    console.log("New userTotal= " + userTotal);
    
      $('#finalTotal').text(userTotal); 
          //sets win/lose conditions
        if (userTotal == Random){
          yay();
        }
        else if ( userTotal > Random){
          loser();
        }   
  })  
  
  $('#two').on ('click', function(){
    userTotal = userTotal + num2;
    console.log("New userTotal= " + userTotal);
      
      $('#finalTotal').text(userTotal); 
        if (userTotal == Random){
          yay();
        }
        else if ( userTotal > Random){
          loser();
        } 
  })  
  
  $('#three').on ('click', function(){
    userTotal = userTotal + num3;
    console.log("New userTotal= " + userTotal);
    
      $('#finalTotal').text(userTotal);
          if (userTotal == Random){
          yay();
        }
        else if ( userTotal > Random){
          loser();
        } 
  })  
  
  
  $('#four').on ('click', function(){
    userTotal = userTotal + num4;
    console.log("New userTotal= " + userTotal);
      
      $('#finalTotal').text(userTotal); 
          if (userTotal == Random){
          yay();
        }
        else if ( userTotal > Random){
          loser();
        }
  });   




  //resets the game

function reset(){
      Random=Math.floor(Math.random()*101+19);
      console.log(Random)
      $('#randomNumber').text(Random);
      num1= Math.floor(Math.random()*11+1);
      num2= Math.floor(Math.random()*11+1);
      num3= Math.floor(Math.random()*11+1);
      num4= Math.floor(Math.random()*11+1);
      userTotal= 0;
      $('#finalTotal').text(userTotal);
      } 
}); 
