var kep, outputContainer;
var counter = 0;

function createNewOutput(msg) {
	"use strict";
	var li = document.createElement('li');
	li.innerHTML = msg;
	outputContainer.appendChild(li);
}

function onClick() {
	"use strict";
	if(counter%2===0){
		createNewOutput( ++counter + '. Damn you vile woman!');
	}else{
		createNewOutput( ++counter + '. I will kill you!');
	}
}

function setUp() {
	"use strict";
	kep = document.getElementById('kep');
	outputContainer = document.getElementById('output');
	kep.addEventListener('click', onClick);
}

document.addEventListener('DOMContentLoaded', setUp);