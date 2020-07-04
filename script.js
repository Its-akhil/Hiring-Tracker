$(document).ready(function(){

	localStorage.setItem("userName", "akhil");
	localStorage.setItem("password", "akhil123");


	var data = [
		{
			"requestID" : "1",
			"projectName" : "Project 1",
			"projectManager" : "Mr.X",
			"numberOfPositions" : "1",
			"statusOfRequest" : "open",
			"pointOfContact" : "Mr.Y",
			"hiringStatus" : "Pending",
			"hrComments" : "Waiting for Reply",
			"actions" : ""
		},
		{
			"requestID" : "2",
			"projectName" : "Project 2",
			"projectManager" : "Professor.X",
			"numberOfPositions" : "2",
			"statusOfRequest" : "open",
			"pointOfContact" : "Major",
			"hiringStatus" : "Pending",
			"hrComments" : "Waiting for Reply",
			"actions" : ""
		},
		{
			"requestID" : "3",
			"projectName" : "Project Wolverine",
			"projectManager" : "Dr.Cornelius",
			"numberOfPositions" : "10",
			"statusOfRequest" : "open",
			"pointOfContact" : "Mr.Y",
			"hiringStatus" : "Pending",
			"hrComments" : "Waiting for Reply",
			"actions" : ""
		},
		{
			"requestID" : "4",
			"projectName" : "Project 4",
			"projectManager" : "Mr.X",
			"numberOfPositions" : "4",
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
		for(let i=0; i < data.length; i++){
			var rowData = data[i];
		    $(".table-container tbody").append(`
		    <tr>
		    <td>${rowData["requestID"]}</td>
		    <td>${rowData["projectName"]}</td>
		    <td>${rowData["projectManager"]}</td>
		    <td>${rowData["numberOfPositions"]}</td>
		    <td>${rowData["statusOfRequest"]}</td>
		    <td>${rowData["pointOfContact"]}</td>
		    <td>${rowData["hiringStatus"]}</td>
		    <td>${rowData["hrComments"]}</td>
		    <td id="${rowData["requestID"]}" class="edit-action"><input type="button" value="Open"></td>
		    </tr>
			`);
		}
		$('.edit-action').click(editDetails);
	}



	function editDetails(event){
		var rowClicked = $(event.target);
		var requestIdOfRowClicked = rowClicked.attr("id");
		var objectOfRowClicked = data.filter(o => o.requestID == requestIdOfRowClicked);
		console.log("These are the Requested obejct detals"+ objectOfRowClicked);
		$(".table-container tbody edit-action").next().append(`
			<tr>
				<td colspan="9">lalallalalallalallalallalallalal</td>
			</tr>
		`);

	}

	function showForm(){
		hideAll();
		$('.table-container').show();
		$('.form-container').show();
	}


	showLogin();
	
	function loginSubmit(event){
		var username = $('.username').val();
		var userpwd = $('.userpwd').val();
		if(username == localStorage.getItem("userName") && userpwd == localStorage.getItem("password")){
			sessionStorage.setItem("loggedIn", "true");
			showTable();
		}

	}

	$('.loginBtn').click(loginSubmit);

	if(sessionStorage.getItem("loggedIn")){
		showTable();
	} else{
		showLogin();
	}


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