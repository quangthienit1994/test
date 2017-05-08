
function showPopup(html){
	var container = $('.popup');
	container.css('z-index', '100').removeClass('hidden fadeOut animated').addClass('animated fadeIn');
	container.find('.content').html(html);
	
}
function hidePopup(time = ''){
	var container = $('.popup');
	if(time == '')
		container.css('z-index', '-1').removeClass('fadeIn animated').addClass('animated fadeOut');
	else{
		setTimeout(function (){
			container.css('z-index', '-1').removeClass('fadeIn animated').addClass('animated fadeOut');
		}, time);
	}
}
jQuery(document).ready(function($) {
	$('.popup .container').click(function(event) {
		hidePopup();
	});
});


function Ajax_http(data = "", func = "", uri = 'req.php', sync = false){
	uri =  (uri == "" ? 'req.php' : uri);
	$.ajax({
		url: __host_name+uri,
		type: 'POST',
		dataType: 'text',
		async: sync,
		data: data,
		success: function (res){
			setTimeout( function (){
				func(res);
			}, 1000);
		}
		})
		.done(function() { })
		.fail(function() {
			text = '<p class="text-center">Can\'t connect to server, please connect again!</p>';
			showPopup(text);
			setTimeout( function (){
				hidePopup();
			}, 2000);
		})
		.always(function() { });	
}
function callFunctionByName(strFun, strParam){
	var funcCall = strFun + "('" + strParam + "');";
	//Call the function
	var ret = eval(funcCall);
}

function get_time(){
	var time = new Date();
	return time.getFullYear()+'/'+( time.getMonth() + 1 )+'/'+time.getDate()+'/'+time.getHours()+':'+time.getMinutes()+':'+time.getMilliseconds();
}
function round(n){
	return Math.round(n * 1000)/1000;
}
function ajax(options) {
  return new Promise(function (resolve, reject) {
    $.ajax(options).done(resolve).fail(reject);
  });
}
function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
