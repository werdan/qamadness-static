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

(function ($, window, document, undefined) {

	$(document).ready(function(){	
		if (getParameterByName("thanks")) {
			alert("Thank you, we'll get back to you soon!");
		}
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