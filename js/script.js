var daychecked = document.getElementsByClassName('weekday');
function OnChangeCheckbox() {
	for (var i = 0; i<daychecked.length; i++) {
		if(daychecked[i].checked === true) {
			var ischecked = daychecked[i].value;
			var thisDay = document.getElementsByClassName(ischecked);
			$(thisDay).css('visibility','visible');
		}
	}
}

/*var daychecked = document.getElementsByClassName('weekday');
function OnChangeCheckbox() {
	for (var i = 0; i<daychecked.length; i++) {
		if(daychecked[i].checked === true) {
			var ischecked = daychecked[i].value;
			var thisDay = document.getElementsByClassName(ischecked);
			$(thisDay).toggleClass('unhiddy');
		}
		else if (daychecked[i].checked === false) {
			$(thisDay).addClass('hiddy');
		}
	}
}*/
