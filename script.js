/*
	Homepage Script
	Shockersify
*/

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
	if(event.which == 13 && $("a.hovered").length) {
		$('form').attr('action', $("a.hovered").attr('href'));
	}
});