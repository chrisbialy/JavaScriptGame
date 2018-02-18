/////// JavaScript Challenge - Reactions Tester ///////
		
		
		// random color
		
		function getRandomColor() {
			var letters = '0123456789ABCDEF'.split(''); // splits string into array
			var color = "#";
			for (var i=0; i<6; i++) {
				color += letters[Math.round(Math.random() * 15)];	
				// 15 means, it "mixing" form all array elements. 
				// if *3 it will use only 0,1,2,3 etc.
				// we take color string and adding to it, form the letters  
			}
			return color;
		}
		
		
		var clickedTime; var createdTime; var reactionTime;
		
		Date.now();
		
		// create box 	
			
		function makeBox() {
		
			// measure creation time
			createdTime=Date.now();
			
			// setting box apperaence 0-5 seconds
			var time=Math.random();
				
			time=5000*time;
			
			setTimeout(function() {
			
				// Math.random() produces random number between 0 and 1, if we split 
				//that in half then it will either happen or not 50% of the time
				if (Math.random()>0.5) {
				
					// display circle
					document.getElementById("box").style.borderRadius="100px";
				} else {
					// need to set borderRadius back to 0 if the random number is not 
					//greater than 0.5. Otherwise we will get circles all the time
					document.getElementById("box").style.borderRadius="0";
				}
				
				var top=Math.random();
				top=top*300;
				
				var left=Math.random();
				left=left*500;
				
				
				document.getElementById("box").style.top=top+"px";
				
				document.getElementById("box").style.left=left+"px";
				
				// displaying box random color
				document.getElementById("box").style.backgroundColor=getRandomColor();
				
				// displaying box
				document.getElementById("box").style.display="block";
			}, time);		
		
		}
	
		
		
		
		// box disapear by clicking box
		
		document.getElementById("box").onclick=function() {
		
			// measure clicked time
			clickedTime=Date.now();
			
			// measure reaction time
			reactionTime=(clickedTime-createdTime)/1000;
			
			
			// Display reaction time
			document.getElementById("time").innerHTML=+reactionTime;
			
			//alert(reactionTime);
			
			// hiding box
			//document.getElementById("box").style.display="none";
			this.style.display="none"; // another way
		
			// call create box function, needed after click
			makeBox();
			
		}
		
			// call create box function, // needed on page load
			makeBox();