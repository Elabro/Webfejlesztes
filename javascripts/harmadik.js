/*global document*/
var myHandler = (function () {
  "use strict";
  var kep, outputContainer;
  var counter = 0;

  function createNewOutput(msg) {
    var li = document.createElement('li');
    li.innerHTML = msg;
    outputContainer.appendChild(li);
  }

  function onClick() {
    if(counter%2==0){
    createNewOutput( ++counter + '. Damn you vile woman!');
  }else{
    createNewOutput( ++counter + '. I will kill you!');
  }
  }

  function setUp() {
    kep = document.getElementById('kep');
    outputContainer = document.getElementById('output');
    kep.addEventListener('click', onClick);
  }
  return setUp;
})();

document.addEventListener('DOMContentLoaded', myHandler);