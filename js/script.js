$(function () {
	'use strict';
	for (i=0; i<'.weekday'.length; i++) {
	$('.weekday'[i]).on('change', function dayClick()
		var $dayChoose = $('.weekday')[$i];
		if ($dayChoose.prop('checked') === true) {
			var $day = $dayChoose.value;
			($day).css('visibility', 'visible');
			} else {	
			($day).css('visibility', 'hidden');
			}
	)}
})

	

/*var daychecked = document.getElementsByClassName('weekday');
function OnChangeCheckbox() {
	for (var i = 0; i<daychecked.length; i++) {
		if(daychecked[i].checked === true) {
			var ischecked = daychecked[i].value;
			var thisDay = document.getElementsByClassName(ischecked);
			$(thisDay).css('visibility','visible');
		}
	}
}*/

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
