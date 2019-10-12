function hide(course){
	
	//#var inputValue = document.getElementById("searchInput").value.toLowerCase();
	//console.log(inputValue);
	course = course.toLowerCase();
	console.log(course);
	//console.log(inputValue.includes("phys"));
	
	if (course == "physics"){
		
		var x = document.getElementsByClassName("cardMath");
		var y = document.getElementsByClassName("cardChem");

		var i;
		for (i = 0; i < x.length; i++) {
		  x[i].style.display = "none";
		}
		for (i = 0; i < y.length; i++) {
		  y[i].style.display = "none";
		}
		console.log("PHYSICS");
		
	}
	
	else if (course == "mathematics"){
		
		var x = document.getElementsByClassName("cardPhysics");
		var y = document.getElementsByClassName("cardChem");

		var i;
		for (i = 0; i < x.length; i++) {
		  x[i].style.display = "none";
		}
		for (i = 0; i < y.length; i++) {
		  y[i].style.display = "none";
		}
		console.log("MATH");
		
	}
	
	else if (course == "chemistry"){
		
		var x = document.getElementsByClassName("cardMath");
		var y = document.getElementsByClassName("cardPhysics");

		var i;
		for (i = 0; i < x.length; i++) {
		  x[i].style.display = "none";
		}
		for (i = 0; i < y.length; i++) {
		  y[i].style.display = "none";
		}
		console.log("CHEM");
		
	}
	
	return false;
}