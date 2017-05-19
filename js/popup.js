'use strict()'

var popUpHTML = "<div class='popUpMenu show'> <div class='callDiv'> <i class='times fa fa-times fa-2x' onclick='closePopUp();'></i> <h2>Infolinia</h2> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p><a href='tel:+48664340449'> <h3>+48 664 340 449</h3> <i class='phone fa fa-phone-square fa-5x'></i></a></div><div class='replyDiv'> <i class='times fa fa-times fa-2x' onclick='closePopUp();'></i> <h2>Zostaw nam wiadomość</h2> <hr> <form action='https://formspree.io/s.polec@clickcommiunity.com' method='POST'><input type='submit' value='Wyślij' class='button-send' > <button class='button-clear'>Wyczyść</button>  <label for='name'>Imię i Nazwisko</label> <br><input id='name' name='name' type='text' > <br><label for='phone'>Telefon</label> <br><input id='phone' name='phone' type='tel' placeholder='790 654 321...'> <br><label for='dropdown' >Wybierz opcję z listy</label><br><select name='dropdown' id='dropdown'> <option value='-'>-</option> <option value='lorem1'>lorem1</option> <option value='lorem2'>lorem2</option> <option value='lorem3'>lorem3</option> </select> <br><label for='message' >Wiadomość</label> <br><textarea id='message' name='message' placeholder='Napisz nam coś...'></textarea> </form> </div></div>";

var popUpMessageOnlyHTML = " <div class='popUpMenu'> <div class='replyDiv'> <i class='times fa fa-times fa-2x' onclick='closePopUp();'></i> <h2>Złóż zapytanie ofertowe</h2> <hr> <form action='https://formspree.io/s.polec@clickcommiunity.com' method='POST'><input type='submit' value='Wyślij' class='button-send' > <button class='button-clear'>Wyczyść</button>  <label for='name'>Imię i Nazwisko</label> <br><input id='name' name='name' type='text' > <br><label for='phone'>Telefon</label> <br><input id='phone' name='phone' type='tel' placeholder='790 654 321...'> <br><label for='dropdown' >Wybierz opcję z listy</label><br><select name='dropdown' id='dropdown'> <option value='-'>-</option> <option value='lorem1'>lorem1</option> <option value='lorem2'>lorem2</option> <option value='lorem3'>lorem3</option> </select> <br><label for='message' >Wiadomość</label> <br><textarea id='message' name='message' placeholder='Napisz nam coś...'></textarea> </form> </div></div>";

//BODY ONLOAD FUNCTION//

function scriptOnLoad(){

	addEventListeners();

}

////////////////////////


function addEventListeners(){

	var contactButtons = document.getElementsByName('contactButton');
	for(var i=0; i<contactButtons.length; i++){
		
		contactButtons[i].onclick = function(e){
			e.preventDefault();
			popUp(false);
		}
	}

	var zapytanieOfertowe = document.getElementsByName('zapytanieOfertowe');
	for(var i=0; i<contactButtons.length; i++){
		
		zapytanieOfertowe[i].onclick = function(e){
			e.preventDefault();
			popUp(true);
		}
	}
}

function popUp(showOnlyMessagePopUp = false){

	var bgDiv = document.createElement('div');
	bgDiv.className = 'backgroundDiv';
	//sorry nie znalazłem szybszego rozwiązania :D

	if(showOnlyMessagePopUp){ 
		bgDiv.innerHTML = popUpMessageOnlyHTML;
	}else{ 
		bgDiv.innerHTML = popUpHTML;
	}

	document.getElementsByTagName('nav')[0].appendChild(bgDiv);
	
	document.getElementsByClassName('button-clear')[0].onclick = function(event){
			event.preventDefault();
			formClear();
	};

	document.getElementsByClassName('button-send')[0].onclick = function(event){
			//event.preventDefault();
			formSend();
	};	

	console.log('popup working');
}


function closePopUp(){
	console.log('popup closed');	

	document.getElementsByClassName('popUpMenu')[0].className = 'popUpMenu hide';

	setTimeout(function() {
		document.getElementsByClassName('backgroundDiv')[0].outerHTML = '';
    }, 600);
}


function formClear(){
	
	var inputs = document.getElementsByTagName('input');

	for(var i=0; i<inputs.length; i++){

		inputs[i].value = '';

	}

	document.getElementsByTagName('input')[0].value = "Wyślij";

	document.getElementsByTagName('option')[0].selected = 'selected';

	document.getElementsByTagName('textarea')[0].value = '';

	console.log('Form cleared successfully!');

}

function formSend(){

	console.log('Sending form...');

	//debug under process analysis

}