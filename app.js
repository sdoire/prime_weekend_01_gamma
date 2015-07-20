//I realize this was not the most efficient way to solve the problem. My plan was to get it to work and then add functions
//where necessary to make for cleaner code. Alas, once I committed to this method, adding functions later became a giant task.
//I ran out of the time necessary to clean it up completely. I also failed to figure out the correct method to alphabetize elements on the DOM,
//and also couldn't figure out how to use the array to help with the process. -SD

$(document).ready(function(){

	var employee = {};
	var employeeArray = [];

	$("#employees").on('click', function(event){
		event.preventDefault();


		var $inputs = $("#employees :input");

		$inputs.each(function(){
			employee[this.name] = $(this).val();
		});
	});

	
	//creates new employee on DOM with color-coded rating score
	$("body").on('click', '#btn', function(){
		$("body").append("<div class=\"new\"></div");
		var $el = $("body").children().last();
		var empString1 = "<p class=\"entryname\">" + 'Name: ' + employee.firstname + ' ' + employee.lastname + '</p>' + '<p class=\"entryother\">' + 'Employee Number: ' + employee.employeenumber + '</p>' + '<p class=\"entryother\">' + ' Title: ' + employee.title + '</p>'
		var empString2 = "<p class=\"entryother\">" + ' Salary: ' + employee.salary + '</p>' + '<button class=\"remove\">Remove</button>';
		switch(employee.lastreviewscore) {
			case "1":
			$el.append(empString1 + "<p class=\"entryrating1\">Review Score: *</p>" + empString2);
			break;
			case "2":
			$el.append(empString1 + "<p class=\"entryrating2\">Review Score: **</p>" + empString2);
			break;
			case "3":
			$el.append(empString1 + "<p class=\"entryrating3\">Review Score: ***</p>" + empString2);
			break;
			case "4":
			$el.append(empString1 + "<p class=\"entryrating4\">Review Score: ****</p>" + empString2);
			break;
			case "5":
			$el.append(empString1 + "<p class=\"entryrating5\">Review Score: *****</p>" + empString2);
			break;
			default:
			$el.remove();
			alert("Your employee rating is invalid.");
		}

		//resets form for next entry
		document.getElementById("employees").reset();
		
		//adds new entry to employee array
		var indEmployee = [employee.firstname, employee.lastname, employee.employeenumber, employee.title, employee.lastreviewscore, employee.salary];
		employeeArray.push(indEmployee);
	});

//removes employee when remove button clicked	
	$("body").on('click', '.remove', function(){
		$(this).parent().remove();
	});

//adds random employee to top of page
	$("body").on('click', '#random', function(){
		var $el = $("div").first();
		empRandom = employeeArray[randomNumber(0, employeeArray.length-1)];
			switch(empRandom[4]) {
			case "1":
			$el.before("<div class=\"new\">" + "<p class=\"entryname\">" + "Name: " + empRandom[0] + " " + empRandom[1] + "</p>" + "<p class=\"entryother\">" + "Employee Number: " + empRandom[2] + "</p>" + "<p class=\"entryother\">" + " Title: " + empRandom[3] + "</p>" + "<p class=\"entryrating1\">Review Score: *</p>" + "<p class=\"entryother\">" + " Salary: " + empRandom[5] + "</p>" + "<button class=\"remove\">Remove</button>" + "</div>");
			break;
			case "2":
			$el.before("<div class=\"new\">" + "<p class=\"entryname\">" + "Name: " + empRandom[0] + " " + empRandom[1] + "</p>" + "<p class=\"entryother\">" + "Employee Number: " + empRandom[2] + "</p>" + "<p class=\"entryother\">" + " Title: " + empRandom[3] + "</p>" + "<p class=\"entryrating2\">Review Score: **</p>" + "<pclass=\"entryother\">" +  " Salary: " + empRandom[5] + "</p>" + "<button class=\"remove\">Remove</button>" + "</div>");
			break;
			case "3":
			$el.before("<div class=\"new\">" + "<p class=\"entryname\">" + "Name: " + empRandom[0] + " " + empRandom[1] + "</p>" + "<p class=\"entryother\">" + "Employee Number: " + empRandom[2] + "</p>" + "<p class=\"entryother\">" + " Title: " + empRandom[3] + "</p>" + "<p class=\"entryrating3\">Review Score: ***</p>" + "<p class=\"entryother\">" + " Salary: " + empRandom[5] + "</p>" + "<button class=\"remove\">Remove</button>" + "</div>");
			break;
			case "4":
			$el.before("<div class=\"new\">" + "<p class=\"entryname\">" + "Name: " + empRandom[0] + " " + empRandom[1] + "</p>" + "<p class=\"entryother\">" + "Employee Number: " + empRandom[2] + "</p>" + "<p class=\"entryother\">" + " Title: " + empRandom[3] + "</p>" + "<p class=\"entryrating4\">Review Score: ****</p>" + "<p class=\"entryother\">" + " Salary: " + empRandom[5] + "</p>" + "<button class=\"remove\">Remove</button>" + "</div>");
			break;
			case "5":
			$el.before("<div class=\"new\">" + "<p class=\"entryname\">" + "Name: " + empRandom[0] + " " + empRandom[1] + "</p>" + "<p class=\"entryother\">" + "Employee Number: " + empRandom[2] + "</p>" + "<p class=\"entryother\">" + " Title: " + empRandom[3] + "</p>" + "<p class=\"entryrating5\">Review Score: *****</p>" + "<p class=\"entryother\">" + " Salary: " + empRandom[5] + "</p>" + "<button class=\"remove\">Remove</button>" + "</div>");
			break;
		}
	});


/*//working on alphabetization function - could not get to work properly
	$("body").on('click', '#alpha', function(){
		var mylist = $('div').first();
		var listitems = mylist.children().first('p').get();
		listitems.sort(function(a, b) {
   		var compA = $(a).text().toUpperCase();
   		var compB = $(b).text().toUpperCase();
   		return (compA < compB) ? -1 : (compA > compB) ? 1 : 0;
		})
	$.each(listitems, function(idx, itm) { mylist.append(itm); });
	});*/
});




function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}

