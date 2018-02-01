function getdata(){
		for(var i=4; i<=6; i++){
			$.get("https://pokeapi.co/api/v2/pokemon/"+i+"/", function(res){
				console.log(res);
				$('body').append("<img src='"+res.sprites.front_shiny+"'>")
			}, "json");
		}
	}
function capitalize(str){
	return str[0].toUpperCase() + str.slice(1)
}

$(document).ready(function(){
	for(var i=1; i<=151; i++){
		$('#imgs').append("<img src='http://pokeapi.co/media/sprites/pokemon/shiny/"+i+".png' id="+i+">")
	}
	$(document).on('click','img',function(){
		$.get("https://pokeapi.co/api/v2/pokemon/"+$(this).attr("id")+"/", function(res){
				console.log(res);
				$('#name').html("<h1>"+capitalize(res.name)+"</h1>")
				$('#sprite').html("<img src='"+res.sprites.front_shiny+"'>")
				if(res.types.length==2){
					$('#types').html("<h2>Types</h2><li>"+ capitalize(res.types[1].type.name) +"</li><li>"+  capitalize(res.types[0].type.name) +"</li>")
				}
				else{
					$('#types').html("<h2>Types</h2><li>"+ capitalize(res.types[0].type.name) +"</li>")
				}
				$('#height').html("<h2>Height</h2><p>"+res.height+"</p>" )
				$('#weight').html("<h2>Weight</h2><p>"+res.weight+"</p>")
			}, "json");
		console.log($(this).attr("id"))
	})

})

	


		
	
