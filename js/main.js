$(function(){
	var log = console.log;

	// divGenerator Syntax
	// skapad av Migsj älv
	// createTop - createMiddle - createBottom
	//
	//
	// 1-div x 12-col bred = 12 columner
	//
	//
	// 	Exempel:
	// 	createTop('1','12') 	-- 1x12 col Full
	// 	createMiddle('2','6') 	-- 2x6 col
	// 	createBottom('3','4')	-- 3x4 col
	//
	//	max Div width 1,2,3,4,6,12

	
	function createTop(build,colSize) {
		//console.log("TOP: create " + build +", col-lg-" + colSize + " divs after each other");
		for (var i = 0; i < build; i++) {
			$('.topDiv').append('<div id="topDiv'+i+'" class="well'+
				' col-sx-'+colSize+
				' col-sm-'+colSize+
				' col-md-'+colSize+
				' col-lg-'+colSize+' divBox topDiv'+i+' ">'+
				'<p class="badge">Top Div</p>'+
				'<p>My classname is .topDiv'+i+'</p>'+
				'</div>' 

			);
			/*var myJson = "style.json";
				var div = document.createElement("div");
				div.innerHTML = JSON.parse(myJson);
				console.log("json", myJson, "from json:",myJson.text);
				$('.topDiv').append(div)*/
		}
	}createTop('6','2');

	function createMiddle(build,colSize) {
		//console.log("MIDDLE: create " + build +", col-lg-" + colSize + " divs after each other");
		for (var i = 0; i < build; i++) {
			$('.middleDiv').append('<div id="middleDiv'+i+'" class="well'+
				' col-sx-'+colSize+
				' col-sm-'+colSize+
				' col-md-'+colSize+
				' col-lg-'+colSize+' divBox middleDiv'+i+'">'+
				'<p class="badge">Middle Div</p>'+
				'<p>My classname is .middleDiv'+i+'</p>'+
				'</div>'
			);
		}
	}createMiddle('12','1')
	
	function createBottom(build,colSize) {
		//console.log("MIDDLE: create " + build +", col-lg-" + colSize + " divs after each other");
		for (var i = 0; i < build; i++) {
			$('.bottomDiv').append('<div id="bottomDiv'+i+'"class="well'+
				' col-sx-'+colSize+
				' col-sm-'+colSize+
				' col-md-'+colSize+
				' col-lg-'+colSize+' divBox bottomDiv'+i+'">'+
				'<p class="badge">Bottom Div</p>'+
				'<p>My classname is .bottomDiv'+i+'</p>'+
				'</div>'
			);
		}
	}createBottom('3','4')

	function clean() {
		$('.topDiv').html('');
		$('.middleDiv').html('');
		$('.bottomDiv').html('');
	}

	$('#reset').on('click',function () {
		
		clean();
		createTop('6','2')
		createMiddle('12','1')
		createBottom('3','4')
	});

	// kan tar bort vid klick
	$('.divBox').on('click',function (data) {
		log("this is:",data);
		//var bytaDiv = prompt("antal nya divar");
		$(this).remove();
		//log("done");
	})

	$('#cleanAll').on('click',function () {
		clean();
	});

	$('#demo1').on('click',function() {
		clean();
		createTop('2','6');
		createTop('1','12');
		createMiddle('3','4');
		createMiddle('2','6');
		createBottom('1','12');
		createBottom('3','4');
	});

	$('#demo2').on('click',function() {
		clean();
		createTop('12','1');
		createMiddle('3','4');
		createBottom('1','12');
	});

	$('#demo3').on('click',function() {
		clean();
		createTop('9','1');
		createMiddle('2','2');
		createBottom('6','2')
	});

	$('#buildPage').on('click',function () {
		clean();
		var divTop = prompt("how many div in top? 1,2,3,4,6 or 12");
		var divMiddle = prompt("how many div in middle? 1,2,3,4,6 or 12");
		var divBottom = prompt("how many div in bottom? 1,2,3,4,6 or 12");
		buildPage(divTop,divMiddle,divBottom);
	})

	function buildPage(divTop,divMiddle,divBottom) {
			
		switch(divTop){
			case "1": //log("build col-12");
				var build = "1";
				var colSize = "12"; 
				createTop(build,colSize)
				break;

			case "2": //log("build col-lg-6");
				var build = "2";
				var colSize = "6";
				createTop(build,colSize)
				break;

			case "3": //log("build col-lg-4");
				var build = "3";
				var colSize = "4";
				createTop(build,colSize)
				break;

			case "4": //log("build col-lg-3");
				var build = "4";
				var colSize = "3";
				createTop(build,colSize)
				break;

			case "6": //log("build col-lg-2");
				var build = "6";
				var colSize = "2";
				createTop(build,colSize)
				break;

			case "12": //log("build col-lg-1");
				var build = "12";
				var colSize = "1";
				createTop(build,colSize)
				break;

			default:
				break;
		}

		switch(divMiddle){

			case "1": //log("build col-12");
				var build = "1";
				var colSize = "12"; 
				createMiddle(build,colSize)
				break;

			case "2": //log("build col-lg-6");
				var build = "2";
				var colSize = "6";
				createMiddle(build,colSize)
				break;

			case "3": //log("build col-lg-4");
				var build = "3";
				var colSize = "4";
				createMiddle(build,colSize)
				break;

			case "4": //log("build col-lg-3");
				var build = "4";
				var colSize = "3";
				createMiddle(build,colSize)
				break;

			case "6": //log("build col-lg-2");
				var build = "6";
				var colSize = "2";
				createMiddle(build,colSize)
				break;

			case "12": //log("build col-lg-1");
				var build = "12";
				var colSize = "1";
				createMiddle(build,colSize)
				break;

			default: 
				break;
		}

		switch(divBottom){

			case "1": //log("build col-12");
				var build = "1";
				var colSize = "12"; 
				createBottom(build,colSize);
				break;

			case "2": //log("build col-lg-6");
				var build = "2";
				var colSize = "6";
				createBottom(build,colSize);
				break;

			case "3": //log("build col-lg-4");
				var build = "3";
				var colSize = "4";
				createBottom(build,colSize);
				break;

			case "4": //log("build col-lg-3");
				var build = "4";
				var colSize = "3";
				createBottom(build,colSize)
				break;

			case "6": //log("build col-lg-2");
				var build = "6";
				var colSize = "2";
				createBottom(build,colSize)
				break;

			case "12": //log("build col-lg-1"); 
				var build = "12";
				var colSize = "1";
				createBottom(build,colSize)
				break;

			default: 
				break;
		}
	}

});