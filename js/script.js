function getParameterByName(name)
{
  name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  var regexS = "[\\?&]" + name + "=([^&#]*)";
  var regex = new RegExp(regexS);
  var results = regex.exec(window.location.search);
  if(results == null)
    return "";
  else
    return decodeURIComponent(results[1].replace(/\+/g, " "));
}

function CheckSize(){
	if ($(window).height() < 655) {
		$('#site-footer').css('position', 'relative');
	} else {
		$('#site-footer').css('position', 'fixed');
	}
}
(function ($, window, document, undefined) {

	$(document).ready(function(){
		CheckSize();
		if (getParameterByName("thanks")) {
			alert("Thank you, we'll get back to you soon!");
		}
	});
	
	$(window).resize(function(){
		CheckSize();
	});
	
	$('input').live('focus', function(){
		if ($(this).attr('placeholder').length > 0){
			$tmp = $(this).attr('placeholder');
			$(this).attr('placeholder', '');
		}
	});
	
	$('input').live('blur', function(){
		if ($(this).attr('value').length < 1){
			$(this).attr('placeholder', $tmp);
		}
	});
	
	$('.target, #we-support-content .item').live('click', function(){
		$('input').eq(0).focus();
	});
	
})(jQuery, this, this.document);