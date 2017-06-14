$("button").click( function() {
 $.getJSON( "especialidades.json", function(obj) { 
  $.each(obj, function(key, value) { 
/*         $("ul").append("<li>"+value.name+"</li>");*/
			for(i=0;i< value.length;i++){
				$("p").append("'"+value[i].FIELD1+"', ");
			}
			
  });
 });
});