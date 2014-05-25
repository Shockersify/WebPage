/*
	Homepage Script
	Shockersify
*/

$(document).ready(function() {
    $('#category').bind('touchstart touchend', function(e) {
        e.preventDefault();
        $(this).toggleClass('hovered');
    });
});

$(document).keyup(function() {
	var name = $("#search").val();
	var pattern = name.toLowerCase();
	var targetId = "";

	var divs = $("a");
	for (var i = 0; i < divs.length; i++) {
		var index = divs[i].textContent.toLowerCase().indexOf(pattern);
		targetId = divs[i].id;
		listId = divs[i].parentNode.parentNode.parentNode.id;
		if (index != -1 && name != "" && targetId != 'category') {
			targetId = divs[i].id;
			listId = divs[i].parentNode.parentNode.parentNode.id;
			$("#" + targetId).addClass("hovered");
			$("#" + listId).addClass("hovered");
			break;
		} else {
			$("#" + targetId).removeClass("hovered");
			$("#" + listId).removeClass("hovered");
		}
	}  
});

$(document).keypress(function(event) {
	var pattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
	if(event.which == 13 && $("a.hovered").length) {
		$('form').attr('action', $("a.hovered").attr('href'));
	} else if(event.which == 13 && pattern.test($("#search").val())) {
		$('form').attr('action', "http://" + $("#search").val());
	}
});