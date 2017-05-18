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
	bgDiv.innerHTML = " <div class='popUpMenu'> <div class='callDiv'> <i class='times fa fa-times fa-2x' onclick='closePopUp();'></i> <h2>Cześć</h2> <p>Zawsze możesz do nas zadzwonić</p><h3>+48 664 340 449</h3> <i class='phone fa fa-phone-square fa-5x'></i> </div><div class='replyDiv'> <i class='times fa fa-times fa-2x' onclick='closePopUp();'></i> <h2>Zostaw nam wiadomość</h2> <hr> <form> <button class='button-clear' onclick='formClear();' >Wyczyść</button> <button class='button-send' >Wyślij</button> <label for='name'>Imię</label> <br><input id='name' name='name' type='text' > <br><label for='surname'>Nazwisko</label> <br><input id='surname' name='surname' type='text' > <br><label for='phone'>Telefon</label> <br><input id='phone' name='phone' type='tel' placeholder='790 654 321...'><br><label for='message' >Wiadomość</label> <br><textarea id='message' name='message' placeholder='Napisz nam coś...'> </textarea> </form> </div></div>"
	document.getElementsByTagName('nav')[0].appendChild(bgDiv);

	console.log('popup working');
}

function closePopUp(){
	console.log('closing triggered');
	// document.body.className = '';
	document.getElementsByClassName('backgroundDiv')[0].outerHTML = '';

}

function formClear(){

	var inputs = document.getElementsByTagName('input');

	for(var i=0; i<inputs.length; i++){

		document.getElementsByTagName('input')[i].value = '';

	}

	document.getElementsByTagName('textarea')[0].value = '';

}