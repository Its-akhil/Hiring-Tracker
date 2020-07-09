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


	function setDetailsContainerValues(objectOfRowClicked){
		$('td.projectName').text(objectOfRowClicked.projectName);
		$('td.projectManager').text(objectOfRowClicked.projectManager);
		$('td.numberOfPositions').text(objectOfRowClicked.numberOfPositions);
		$('td.statusOfRequest').text(objectOfRowClicked.statusOfRequest);
		$('td.pointOfContact').text(objectOfRowClicked.pointOfContact);
		$('td.hiringStatus').text(objectOfRowClicked.hiringStatus);
		$('td.hrComments').text(objectOfRowClicked.hrComments);
	}

	function handleIcons(tdClicked){
		var $table = tdClicked.closest('table');
		$table.find('i.edit-action').show();
		$table.find('i.close-action').hide();

		tdClicked.find('i.close-action').show();
		tdClicked.find('i.edit-action').hide();
	}

	function setEditFormValues(objectOfRowClicked){
		$('input.projectManager').val(objectOfRowClicked.projectManager);
	}

	function closeDetails(event){
		$('.detailsContainer.detailsCopy').remove();
		$('.form-container.formCopy').remove();
		hideAll();
		showTable();
		if(event){
			$('i.close-action').hide();
			$('i.edit-action').show();
		}
	}

	//editDetails()- To show a pre-filled form with edit option when action button in last column of table is clicked.
	function editDetails(event){
		var tdClicked = $(event.target).closest('td');

		var requestIdOfRowClicked = tdClicked.attr("id");

		console.log("the request Id Of RowClicked"+requestIdOfRowClicked);

		var objectOfRowClicked = data.find(obj => obj.requestID == requestIdOfRowClicked);

		console.log("These are the Requested obejct detals");

		console.log({Details: objectOfRowClicked});

		var trRowClicked = tdClicked.closest('tr');

		handleIcons(tdClicked);

		var newTr = $(`
			<tr>
				<td colspan="9"></td>
			</tr>
		`).insertAfter(trRowClicked);

		var detailsContainer = $('.detailsContainer').clone();
		detailsContainer.addClass('detailsCopy').show();
		newTr.find('td').append(detailsContainer);

		setDetailsContainerValues(objectOfRowClicked);

		detailsContainer.find('.editDetailsContainerBtn').click(function(){
			closeDetails();
			var formContainer = $('.form-container').clone();
			formContainer.addClass('formCopy').show();
			newTr.find('tr').append(formContainer);
			setEditFormValues(objectOfRowClicked);
		})
	}

	//hideAll();
	function hideAll(){
		$(".container").hide();
	}

	//showLogin();
	function showLogin(){
		hideAll();
		$(".login-container").show();
	}
	
	//showDetails()- Function to show a table i.e details-container defined in html because all containers are initially hidden.
	function showDetails(){
		$('.details-container').show();
	}

	//showTable() - Function to show table of hiring requests on homepage as soon as logged in.
	function showTable(){
		hideAll();
		$(".table-container").show();

		var $tbody = $(".table-container tbody");

		$tbody.empty();

		for(let i=0; i < data.length; i++){
			var rowData = data[i];

		    var tableTr = $(`
			    <tr>
				    <td>${rowData["requestID"]}</td>
				    <td>${rowData["projectName"]}</td>
				    <td>${rowData["projectManager"]}</td>
				    <td>${rowData["numberOfPositions"]}</td>
				    <td>${rowData["statusOfRequest"]}</td>
				    <td>${rowData["pointOfContact"]}</td>
				    <td>${rowData["hiringStatus"]}</td>
				    <td>${rowData["hrComments"]}</td>
				    <td id="${rowData["requestID"]}">
				    	<i class="fa fa-bars edit-action" aria-hidden="true"></i>
				    	<i class="fa fa-times close-action" aria-hidden="true"></i>
				    </td>
			    </tr>
			`);
		tableTr.find('i.edit-action').click(editDetails);
		tableTr.find('i.close-action').click(closeDetails);
		tableTr.find('i.close-action').hide();

		$tbody.append(tableTr);
		}

	}
/*	$('i.close-action').click(function(){
		closeDetails();
	});*/


	//showForm()- Function to show a form i.e form-container defined in html because all containers are initially hidden.
	function showForm(){
		hideAll();
		$('.form-container').show();
		$('.closeRequestForm').click(function(){
			hideAll();
			showTable();
		});
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

	$('.requestFormSubmitButton').click(function(){
		//Values captured to show in Table when Add New Request 
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


		let $tableModule = $("table.table-module");
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

				<td>
					:&nbsp;${hiringStatus}
				</td>

				<td>
					:&nbsp;${hrComments}
				</td>

				<td>
					<i class="fa fa-bars edit-action" aria-hidden="true"></i>
					`/*<i class="fa fa-times close-action" aria-hidden="true"></i>*/+`
				</td>
			</tr>
		`);
		hideAll();
		showTable();
	});
	console.log("Hello1");

});