
var userList = [
{name: "Tom", surname: "Johnson", isActive: "active", email: "tjohnson@gmail.com", login: "tomtom12", password: "tjohnson12"},
{name: "Alicia", surname: "Stephaniel", isActive: "inactive", email: "astephaniel@gmail.com", login: "astephanie", password: "astephaniel88"},
{name: "Alexandra", surname: "Rise", isActive: "active", email: "arise@gmail.com", login: "alexandra.r@gmail.com", password: "rise98"}
];

var userListTab = document.getElementById("user-list-tab");
var createUserTab = document.getElementById("create-user-tab");
var pageContent = document.getElementById("page-content");


var tabsFunctions = {
	showUserList: function(event) {
		event.preventDefault();
		if (!userListTab.classList.contains("active")) {
			pageContent.innerHTML = "";
			var userListContainer = ['<div class="user-list list-group">'];
			var html;
			for (var i = 0; i < userList.length; i++) {
				html = [
					'<div class="row user-container '+ i + '">',
						'<div class="user-details-fields list-group-item list-group-item-action flex-column align-items-start">',
							'<div class="d-flex w-100 justify-content-between">',
							 '<h5 class="mb-1">' + userList[i].name + ' ' + userList[i].surname + '</h5>',
							 	'<small class="' + userList[i].isActive + '-user">' + userList[i].isActive + '</small>',
							 '</div>',
							 '<p class="mb-1"><strong>E-mail: </strong>' + userList[i].email + '</p>',
							 '<p class="mb-1"><strong>Login: </strong>' + userList[i].login + '</p>',
							 '<p class="mb-1"><strong>Password </strong>' + userList[i].password + '</p>',
							 '<small class="edit-user ' + i + '">edit user</small>',
							 '<small class="delete-user ' + i + '">delete user</small>',
							'</div>',
						'</div>'
				];
				htmlString = html.join("\n");
				userListContainer.push(htmlString);
			}
			userListContainer.push("</div>");
			var userListHTML = userListContainer.join("\n");
			pageContent.insertAdjacentHTML("beforeend", userListHTML);

			createUserTab.classList.remove("active");
			userListTab.classList.add("active");
			var editUserButtons = document.getElementsByClassName("edit-user");
			for (var i = 0; i < editUserButtons.length; i++) {
				editUserButtons[i].addEventListener("click", formFunctions.addEditForm);
			}
			var deleteUserButtons = document.getElementsByClassName("delete-user");
				for (var i = 0; i < deleteUserButtons.length; i++) {
					deleteUserButtons[i].addEventListener("click", formFunctions.deleteUser);			
			}
			formFunctions.editFormVisible = false;
		}
	},
	showNewUserForm: function(event) {
		event.preventDefault();
		var newUserForm;
		if (!createUserTab.classList.contains("active")) {
			pageContent.innerHTML = "";
			newUserForm = [
			'<form id="new-user-form" class="create-user-form mt-3">',
				'<legend class="display-4 my-5 text-muted">Type in new user data:</legend>',
				'<div class="form-group row">',
					'<label for="input-name" class="col-sm-2 col-form-label">Name</label>',
					'<div class="col-sm-6">',
						'<input type="email" class="form-control" id="input-name" placeholder="Name">',
					'</div>',
				'</div>',
				'<div class="form-group row">',
					'<label for="input-surname" class="col-sm-2 col-form-label">Surname</label>',
					'<div class="col-sm-6">',
						'<input type="text" class="form-control" id="input-surname" placeholder="Surname">',
					'</div>',
				'</div>',
				'<div class="form-group row">',
					'<label for="input-email" class="col-sm-2 col-form-label">E-mail</label>',
					'<div class="col-sm-6">',
						'<input type="text" class="form-control" id="input-email" placeholder="E-mail">',
					'</div>',
				'</div>',
				'<div class="form-group row">',
					'<label for="input-login" class="col-sm-2 col-form-label">Login</label>',
					'<div class="col-sm-6">',
						'<input type="text" class="form-control" id="input-login" placeholder="Login">',				
					'</div>',
				'</div>',
				'<div class="form-group row">',
					'<label for="input-password" class="col-sm-2 col-form-label">Password</label>',
					'<div class="col-sm-6">',
						'<input type="text" class="form-control" id="input-password" placeholder="Password">',
					'</div>',
				'</div>',
				'<fieldset class="form-group row">',
					'<legend class="col-form-legend col-sm-2">Is user active?</legend>',
					'<div class="col-sm-6">',
						'<div class="form-check">',
							'<label class="form-check-label">',
								'<input class="form-check-input new-user-radio" type="radio" name="gridRadios" id="gridRadios1" value="active" checked>',
							'Active</label>',
						'</div>',
						'<div class="form-check">',
							'<label class="form-check-label">',
								'<input class="form-check-input new-user-radio" type="radio" name="gridRadios" id="gridRadios2" value="inactive">',
							'Inactive</label>',
						'</div>',
					'</div>',
				'</fieldset>',
				'</div>',
				'<div class="form-group row">',
					'<div class="col-sm-1 mr-md-5 mr-lg-4">',
						'<button id="save-new-user" type="submit" class="btn btn-primary user-save-button">Save</button>',
					'</div>',
					'<div class="col-sm-1 offset-sm-2 offset-md-0">',
						'<button id="reset-new-user" type="reset" class="btn btn-primary user-disgard-button">Reset</button>',
					'</div>',
				'</div>',
			'</form>'
			];
			newUserHTML = newUserForm.join("\n");
			pageContent.insertAdjacentHTML("beforeend", newUserHTML);
			createUserTab.classList.add("active");
			userListTab.classList.remove("active");
			document.getElementById("save-new-user").addEventListener("click", formFunctions.newUserSubmit);
		}
	}
}

var formFunctions = {
	newUserSubmit: function(event) {
		event.preventDefault();
		var radioButtons = document.getElementsByClassName("new-user-radio");
		var radioValue;
		if (radioButtons[0].checked) {
			radioValue = "active";
		}
		else {
			radioValue = "inactive";
		}
		var userName = document.getElementById("input-name").value;
		var userSurname = document.getElementById("input-surname").value;
		var userEmail = document.getElementById("input-email").value;
		var userLogin = document.getElementById("input-login").value;
		var userPassword = document.getElementById("input-password").value;
		if ( userName == "" || userSurname == "" || userEmail == "" || userLogin == "" || userPassword == "") {
			alert("You have to fill all the fields!");
		}
		else {
			userList.push({
				name: userName,
				surname: userSurname,
				isActive: radioValue,
				email: userEmail,
				login: userLogin,
				password: userPassword,
			});
		alert("User was successfully created");
		}
	},
	addEditForm: function(event) {
		if (formFunctions.editFormVisible) {
			formFunctions.removeEditForm();
		}
		var userDivs = document.getElementsByClassName("user-container");
		var userDivsArray = Array.from(userDivs);
		var clickedDiv = userDivsArray.find(function(element) {
			return element.classList.contains(event.target.classList[1]);
		});
		var editUserForm = [
			'<div id="edit-user-form" class="container">',
				'<form class="create-user-form mt-3 small">',
					'<legend class="display-5 my-5 text-muted">Change user data:</legend>',
					'<div class="form-group row">',
						'<label for="input-name" class="col-sm-1 col-form-label">Name</label>',
						'<div class="col-sm-3">',
							'<input type="email" class="form-control form-control-sm" id="input-name" placeholder="Name">',
						'</div>',
					'</div>',
					'<div class="form-group row">',
						'<label for="input-surname" class="col-sm-1 col-form-label">Surname</label>',
						'<div class="col-sm-3">',
							'<input type="text" class="form-control form-control-sm" id="input-surname" placeholder="Surname">',
						'</div>',
					'</div>',
					'<div class="form-group row">',
						'<label for="input-email" class="col-sm-1 col-form-label">E-mail</label>',
						'<div class="col-sm-3">',
							'<input type="text" class="form-control form-control-sm" id="input-email" placeholder="E-mail">',
						'</div>',
					'</div>',
					'<div class="form-group row">',
						'<label for="input-login" class="col-sm-1 col-form-label">Login</label>',
						'<div class="col-sm-3">',
							'<input type="text" class="form-control form-control-sm" id="input-login" placeholder="Login">',				
						'</div>',
					'</div>',
					'<div class="form-group row">',
						'<label for="input-password" class="col-sm-1 col-form-label">Password</label>',
						'<div class="col-sm-3">',
							'<input type="text" class="form-control form-control-sm" id="input-password" placeholder="Password">',
						'</div>',
					'</div>',
					'<fieldset class="form-group row">',
						'<legend class="col-form-legend col-sm-2">Is user active?</legend>',
						'<div class="col-sm-3">',
							'<div class="form-check">',
								'<label class="form-check-label">',
									'<input class="form-check-input edit-user-radio form-control-sm" type="radio" name="gridRadios" id="active-" value="active" checked>',
								'Active</label>',
							'</div>',
							'<div class="form-check">',
								'<label class="form-check-label">',
									'<input class="form-check-input edit-user-radio form-control-sm" type="radio" name="gridRadios" id="gridRadios2" value="inactive">',
								'Inactive</label>',
							'</div>',
						'</div>',
					'</fieldset>',
					'<div class="form-group row">',
						'<div class="col-xs-1 mr-sm-1">',
							'<button id="save-user-changes" type="submit" class="btn btn-primary user-save-button">Save</button>',
						'</div>',
						'<div class="col-xs-1">',
							'<button id="remove-edit-form" type="reset" class="btn btn-primary user-disgard-button">Disgard</button>',
						'</div>',
					'</div>',
				'</form>',
			'</div>'
			];
			var editUserHTML = editUserForm.join("\n");
			clickedDiv.insertAdjacentHTML("beforeend", editUserHTML);
			clickedDiv.childNodes[1].classList.add("selected-user");
			document.getElementById("remove-edit-form").addEventListener("click", formFunctions.removeEditForm);
			document.getElementById("save-user-changes").addEventListener("click", formFunctions.saveEditForm);
			formFunctions.setFormValues(event.target.classList[1]);
			formFunctions.editFormVisible = true;
	},
	setFormValues: function(index) {
		document.getElementById("input-name").value = userList[index].name;
		document.getElementById("input-surname").value = userList[index].surname;
		document.getElementById("input-email").value = userList[index].email;
		document.getElementById("input-login").value = userList[index].login;
		document.getElementById("input-password").value = userList[index].password;
		var radioButtons = document.getElementsByClassName("edit-user-radio");
		if (userList[index].isActive == "active") {
			radioButtons[0].checked = true;
		}
		else {
			radioButtons[1].checked = true;
		}

	},
	removeEditForm: function() {
		document.getElementById("edit-user-form").remove();
		var userDetailsFields = document.getElementsByClassName("user-details-fields");
		for (var i = 0; i < userDetailsFields.length; i++) {
			if (userDetailsFields[i].classList.contains("selected-user")) {
				userDetailsFields[i].classList.remove("selected-user");
			}
		};
		formFunctions.editFormVisible = false;
	},
	saveEditForm: function(event) {
		event.preventDefault();
		var userDetailsFields = document.getElementsByClassName("user-details-fields");
		var userDetailsArray = Array.from(userDetailsFields);
		var currentUser = userDetailsArray.find(function(element) {
			return element.classList.contains("selected-user");
		});
		var userDetails = currentUser.childNodes;
		console.log(userDetails);
		var radioButtons = document.getElementsByClassName("edit-user-radio");
		var radioValue;
		var userName = document.getElementById("input-name").value;
		var userSurname = document.getElementById("input-surname").value;
		var userEmail = document.getElementById("input-email").value;
		var userLogin = document.getElementById("input-login").value;
		var userPassword = document.getElementById("input-password").value;
		if ( userName == "" || userSurname == "" || userEmail == "" || userLogin == "" || userPassword == "") {
			alert("You have to fill all the fields!");
		}
		else {
			if (radioButtons[0].checked) {
				userDetails[1].innerHTML = "<strong>" + userName + " " + userSurname + "</strong>" + "<small class='active-user'>active</small>";
			}
			else {
				userDetails[1].innerHTML = "<strong>" + userName + " " + userSurname + "</strong>" + "<small class='inactive-user'>inactive</small>";
			}
			userDetails[3].innerHTML = "<strong>E-mail: </strong>" + userEmail;
			userDetails[5].innerHTML = "<strong>Login: </strong>" + userLogin;
			userDetails[7].innerHTML = "<strong>Password: </strong>" + userPassword;
			formFunctions.removeEditForm();
		}
	},
	deleteUser: function(event) {
		var userDivs = document.getElementsByClassName("user-container");
		var userDivsArray = Array.from(userDivs);
		var clickedDiv = userDivsArray.find(function(element) {
			return element.classList.contains(event.target.classList[1]);
		});
		clickedDiv.remove();
		userList.splice(event.target.classList[1], 1);
	},
	editFormVisible: false
}


userListTab.addEventListener("click", tabsFunctions.showUserList);
createUserTab.addEventListener("click", tabsFunctions.showNewUserForm);





//Usuwają userów z interface'u usuwaj też z Array (zadanie na jutro)!