'use strict()'

$(function(){

	addEventListeners();




	
})

function addEventListeners(){
		//Loop for attaching onclick fn to buttons
	for(var i=0; i<document.getElementsByName('contactButton').length; i++){
		
		document.getElementsByName('contactButton')[i].onclick = function(){
			popUp();
		}
	}
}

function popUp(){

	// document.body.className = 'blur';

	var bgDiv = document.createElement('div');
	bgDiv.className = 'backgroundDiv';
	document.getElementsByTagName('nav')[0].appendChild(bgDiv);

	var popUpMenuDiv = document.createElement('div');
	popUpMenuDiv.className = 'popUpMenu';
	document.getElementsByClassName('backgroundDiv')[0].appendChild(popUpMenuDiv);

	var callDiv = document.createElement('div');
	callDiv.className = 'callDiv';          
	callDiv.innerHTML= '<h2>Hello</h2><p>Lorme ipsum</p><i class="fa fa-telephone fa-2x"></i>';
	document.getElementsByClassName('popUpMenu')[0].appendChild(callDiv);

	var replyDiv = document.createElement('div');
	replyDiv.className = 'replyDiv';
	document.getElementsByClassName('popUpMenu')[0].appendChild(replyDiv);

	document.getElementsByClassName('backgroundDiv')[0].onclick = function(){
			closePopUp();
	}

	console.log('popup working');
}

function closePopUp(){
	// document.body.className = '';
	// document.getElementsByClassName('backgroundDiv')[0].outerHTML = '';

}

function formClear(){

	var inputs = document.getElementsByTagName('input');

	for(var i=0; i<inputs.length; i++){

		document.getElementsByTagName('input')[i].value = '';

	}

	document.getElementsByTagName('textarea')[0].value = '';


}