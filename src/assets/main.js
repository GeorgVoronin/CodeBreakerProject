let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if(answer!='' && attempt!=''){

      setHiddenFields(answer);
    }
}

//implement new functions here

function setHiddenFields(a, at){
  at = 0;
  a = Math.floor(Math.random()*10000);
  a = answer.toString();

  while (a.length<4) {a = '0' + a;}
}
