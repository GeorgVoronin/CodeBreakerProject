let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if(answer==='' || attempt==='') {setHiddenFields();}

    if (validateInput(input.value)) {attempt.value++;} else {return;}

    if (getResults(input.value)) {setMessage('You Win! :)');}else if (attempt.value>=10) {setMessage('You Lose! :(');} else {setMessage('Incorrect, try again.');}
}



//
//implement new functions here
//

function setHiddenFields(){
  attempt.value = '0';
  answer.value = Math.floor(Math.random()*10000).toString();
  while (answer.value.length<4) {answer.value = '0' + answer.value;}
}

function setMessage(a){
  document.getElementById('message').innerHTML=a;
}

function validateInput(a){
  if (a.length===4) {return true;} else {setMessage("Guesses must be exactly 4 characters long."); return false;}
}

function getResults(input){
  var corGues = 0;
  let html = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">';
  for (var i = 0; i <input.length; i++){
    if (input.charAt(i)===answer.value.charAt(i)) {corGues++; html += '<span class="glyphicon glyphicon-ok"></span>';}
    else if (answer.value.indexOf(input.charAt(i))>-1) {html += '<span class="glyphicon glyphicon-transfer"></span>';}
    else {html += '<span class="glyphicon glyphicon-remove"></span>';}
  }
  html += '</div></div>';
  document.getElementById('results').innerHTML+=html;

  if (corGues===4){return true;} else {return false;}
}

function showAnswer(p){
  document.getElementById('code').innerHTML=answer.value;
  if (p) {document.getElementById('code').className = " success";} else {document.getElementById('code').className = " failure";}
}
