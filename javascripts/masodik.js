var myHandler = {
	kep: null,
	outputContainer: null,
	counter: 0,
	
	createNewOutput: function (msg) {
		var li = document.createElement('li');
		li.innerHTML = msg;
		myHandler.outputContainer.appendChild(li);
	},
	onClick: function() {





		if(myHandler.counter%2==0){
			myHandler.createNewOutput( ++myHandler.counter + '. Damn you vile woman!');
		}else{
			myHandler.createNewOutput( ++myHandler.counter + '. I will kill you!');
		}


	},
	setUp: function() {
		myHandler.kep = document.getElementById('kep');
		myHandler.outputContainer = document.getElementById('output');
		myHandler.kep.addEventListener('click', myHandler.onClick);

	}
}

document.addEventListener('DOMContentLoaded', myHandler.setUp);