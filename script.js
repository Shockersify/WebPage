/*
	Homepage Script
	Shockersify
*/

$(document).ready(function() {
    
    var d = new Date();
    var n = d.getHours();
    if (n >= 19 || n < 6) {
      // If time is after 7PM or before 6AM, apply night theme to �body�
      document.body.className = "night";
    }
    else if (n > 16 && n < 19) {
      // If time is between 4PM � 7PM sunset theme to �body�
      document.body.className = "sunset";
    }
    else {
      // Else use �day� theme
      document.body.className = "day";
    }
      
    $('#category').bind('touchstart touchend', function(e) {
        e.preventDefault();
        $(this).toggleClass('hovered');
    });
	/*Put in zip code or weather.com code(if you're not in US)
	$('#test').weatherfeed(['49931'], {
		unit: 'f',
		forecast: true,
		wind: false,
		link: false,
		showerror: false,
		image: false
	});
	$('#test').simpleWeather({
		location: '49931',
		woeid: '',
		unit: 'f',
		success: function(weather) {
			
		}
	})*/
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
	var sitePattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
	var wikiPattern = /^(wiki:)/;
	var youtPattern = /^(youtube:)/;
	var wolfPattern = /^(wolfram:)/;
	$("<img>").attr('src','images/11.svg');
	
	if(event.which == 13 && $("a.hovered").length) {
		$('form').attr('action', $("a.hovered").attr('href'));
	} else if(event.which == 13 && sitePattern.test($("#search").val())) {
		$('form').attr('method','POST');
		$('form').attr('action', "http://" + $("#search").val());
	} else if(event.which == 13 && wolfPattern.test($("#search").val())) {
		//$('form').attr('action', $("#search").val().substring(8);
	} else if(event.which == 13 && wikiPattern.test($("#search").val().substring(0,5))) {
		$('form').attr('method','POST');
		$('form').attr('action', "http://en.wikipedia.org/wiki/" + $("#search").val().substring(5));
	} else if(event.which == 13 && youtPattern.test($("#search").val().substring(0,8))) {
		$('form').attr('method','POST');
		$('form').attr('action', "http://www.youtube.com/results?search_query=" + $("#search").val().substring(8));
	}
});
