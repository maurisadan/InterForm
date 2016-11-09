

/*$(function () {
	'use strict';
	
	$.each($('.weekday'), function (index, value) {
		console.log($('.weekday').prop('checked'));
	})
})*/

/*$(function () {
	'use strict';
	$('#weekday1').on('change', function dayClick() {
		if ($('#weekday1').prop('checked') === true) {
			$('.sunday').css('visibility', 'visible');
			} else {	
			$('.sunday').css('visibility', 'hidden');
			}
	})
})*/

	

var daychecked = document.getElementsByClassName('weekday');
function OnChangeCheckbox() {
	for (var i = 0; i<daychecked.length; i++) {
		if(daychecked[i].checked === true) {
			var ischecked = daychecked[i].value;
			var thisDay = document.getElementsByClassName(ischecked);
			$(thisDay).css('visibility','visible');
		}
		else if (('weekday'[0].checked === false) && (document.getElementsByClassName('sunday').style.visibility ='visible')) {
			$(thisDay).css('visibility', 'hidden');
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
