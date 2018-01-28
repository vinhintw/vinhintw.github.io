
		function showVideo(location){
			document.getElementById('youtubeVideo').innerHTML = dictTime[location] + " " +dictDesc[location] + '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + dictYoutube[location] + '?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
		}

		var dictTime = {
			1:  "11:40am",
			2:  "11:44am",
			3:  "11:46am",
			4:  "",
			5:  "11:55am",
			6:  "11:57am",
			7:  "1:10pm",	
			8:  "1:12pm",	
			9:  "1:16pm",	
			10: "1:17pm",	
			11: "1:22pm",	
			12: "1:24pm",	
			13: "1:25pm",	
			14: "1:26pm",	
			15: "1:26pm",	
			16: "1:34pm",	
			17: "1:37pm",	
			18: "1:39pm"
		}
		var dictDesc = {
			1: "Walk and record along predefined route from Platform 3, up escalators, through barriers and onto Flinders/Swanston steps.",
			2: "Start of Cnr Flinders and Swanston at steps",
			3: "Under main dome",
			4: "",
			5: "ear barriers",
			6: "Approaching barriers",
			7: "At top of Platform 3 escalators",
			8: "At top of Platform 5 escalators",
			9: "Outside Baguette",
			10: "Outside NZ Natural ice-cream",
			11: "At top of Platform 8 escalator",
			12: "Outside barrier (facing Swanston St)",
			13: "Outside Taxi Rank (opposite NZ ice-cream)",
			14: "Near Busker (White Wedding Dress)",
			15: "Outside Relay Hub Convenience Store",
			16: "On Platform 3",
			17: "Platform 3 near subway entrance (stone steps)",			
			18: "In subway near platform 2/3 entrance"
		}

		var dictYoutube = {
			1: "a7gG0tIKkuY",
			2: "pTbWLeybnRA",
			3: "zmrERTfzuIk",
			4: "",
			5: "sSLgvlaHTT4",
			6: "InK6ql6NRqQ",
			7: "XYNNNJzAYSo",
			8: "F5UP-9N372Q",
			9: "L3i9-akFGB4",
			10: "Z0_Kaq91lt4",
			11: "yq-pfTnxj1Y",
			12: "I5aGoJxzgfI",
			13: "H9QFw0gcCZI",
			14: "vLU2JqArU84",
			15: "MUQgjWfAIv4",
			16: "3I9tY9d-UPE",
			17: "hUf7nWDwUXY",
		 	18: "SbomIdTWH8U"		
		}

// fit content to right-body div
$(function() {
    while( $('#right-body div').height() > $('#right-body').height() ) {
        $('#right-body div').css('font-size', (parseInt($('#right-body div').css('font-size')) - 1) + "px" );
    }
});