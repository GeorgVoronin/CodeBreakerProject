let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if(answer!='' && attempt!=''){

      setHiddenFields();
    }
}

//implement new functions here

function setHiddenFields(){
  attempt = 0;
  answer = Math.floor(Math.random()*10000);
  answer = answer.toString();

  while (answer.length<4) {answer = '0' + answer;}
}
