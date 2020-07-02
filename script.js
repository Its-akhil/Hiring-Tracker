$(document).ready(function(){

	localStorage.setItem("userName", "akhil");
	localStorage.setItem("password", "akhil123");


	var data = [
		{
			"requestID" : "1",
			"projectName" : "Project 1",
			"projectManager" : "Mr.X",
			"numberOfPositions" : "2",
			"statusOfRequest" : "open",
			"pointOfContact" : "Mr.Y",
			"hiringStatus" : "Pending",
			"hrComments" : "Waiting for Reply",
			"actions" : ""
		},
		{
			"requestID" : "1",
			"projectName" : "Project 1",
			"projectManager" : "Mr.X",
			"numberOfPositions" : "2",
			"statusOfRequest" : "open",
			"pointOfContact" : "Mr.Y",
			"hiringStatus" : "Pending",
			"hrComments" : "Waiting for Reply",
			"actions" : ""
		},
		{
			"requestID" : "1",
			"projectName" : "Project 1",
			"projectManager" : "Mr.X",
			"numberOfPositions" : "2",
			"statusOfRequest" : "open",
			"pointOfContact" : "Mr.Y",
			"hiringStatus" : "Pending",
			"hrComments" : "Waiting for Reply",
			"actions" : ""
		},
		{
			"requestID" : "1",
			"projectName" : "Project 1",
			"projectManager" : "Mr.X",
			"numberOfPositions" : "2",
			"statusOfRequest" : "open",
			"pointOfContact" : "Mr.Y",
			"hiringStatus" : "Pending",
			"hrComments" : "Waiting for Reply",
			"actions" : ""
		}

	];


	function hideAll(){
		$(".container").hide();
	}

	//hideAll();

	function showLogin(){
		hideAll();
		$(".login-container").show();
	}
	//showLogin();

	function showTable(){
		hideAll();
		$(".table-container").show();
		for(let i = 0; i < data.length; i++) {
			var rowData = data[i];
			$(".table-container tbody").append( /* script to load the row to the table */ );
		}
	}

	function showForm(){
		hideAll();
		showTable();
		$('.form-container').show();
	}


	showLogin();

	$('.loginBtn').click(function(event){
		var username = $('.username').val();
		var userpwd = $('.userpwd').val();

		if(username == localStorage.getItem("userName") && userpwd == localStorage.getItem("password")){
			showTable();
			return false;
		} else{
			showLogin();
			$('.login-form')[0].reset();
			return false;
		}
	});



	$('.newRequestFormBtn').click(function(){
		showForm();
	});

	$('.form1Button').click(function(){
		var projectName = $('#projectName').val();
		var projectManager = $('#projectManager').val();
		var numberOfPositions = $('#numberOfPositions').val();
		var designation = $('#designation').val();
		var statusOfRequest = $('#statusOfRequest').val();
		var minExpYears = $('.minExpYears').val();
		var minExpMonths = $('.minExpMonths').val();
		var maxExpYears = $('.maxExpYears').val();
		var maxExpMonths = $('.maxExpMonths').val();
		var positionType = $('#position').val();
		var skills = $('#skills').val();
		var duration = $('#duration').val();
		var probabilityOfConversion = $('#probabilityOfConversion').val();
		var salary0 = $('#salary0').val();
		var salary1 = $('#salary1').val();
		var salary2 = $('#salary2').val();
		var pointOfContact = $('#pointOfContact').val();
		var hiringStatus = $('#hiringStatus').val();
		var hrComments = $('#hrComments').val();


		let $tableModule = $("table.tableModule");
		$tableModule.append(`
			<tr>
				<td>
					:&nbsp;
				</td>

				<td>
					:&nbsp; ${projectName}
				</td>

				<td>
					:&nbsp; ${projectManager}
				</td>

				<td>
					:&nbsp${numberOfPositions}
				</td>

				<td>
					:&nbsp;${statusOfRequest}
				</td>

				<td>
					:&nbsp;${pointOfContact}
				</td>

					:&nbsp;${hiringStatus}
				</td>

				<td>
					:&nbsp;${hrComments}
				</td>

				<td>
					:&nbsp;
				</td>
			</tr>
		`);
	console.log("Hello");
	});
console.log("Hello1");

});