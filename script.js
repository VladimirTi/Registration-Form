// here we perfoms validation and displays a massages using JS

let allOk = true // this boolean variable will help us with "alert" in the end of program

function dataField(form) { // we activate this function from HTML button and send custom data to validation
	validateData (form.firstName.value, "firstName"); //validate function. arguments: custom data and type/name of this data
	validateData (form.secondName.value, "secondName");
	validateData (form.birthday.value, "birthday");
	validateData (form.password.value, "password");
	validateData (form.address.value, "address");
	validateMail (form.email.value, "email")
	allOk ? alert("All fields are valid") : alert("One or more field are not valid"); //
    }

function validateData (data, type){ //this function performs validation and displays a message (DOM)
	if(data=="") { //performs validation...
		document.getElementById(type).innerHTML = type + " field is required"; // and displays a message
		allOk = false; //in case of failed validation, we change allOk variable to false. Even if only one variable was failed, allOk will be false
	} else if (data.indexOf('"') != -1 || data.indexOf("'") != -1) { //performs validation...
		document.getElementById(type).innerHTML = type + " field contains \" or ' "; // and displays a message
		allOk = false;
	} else	{
		document.getElementById(type).innerHTML = type + " is valid";
	}
}

function validateMail (data, type) { //validation function for email
	let reg = /^[a-z0-9\._%+-]+@[a-z0-9\.-]+\.[a-z]{2,}$/ //RegExp
	if(data=="") { //performs validation...
		document.getElementById(type).innerHTML = "Email field is required"; // and displays a message
		allOk = false;
	} else if (!reg.test(data)) {
		document.getElementById(type).innerHTML = type + "Email field doesn't looks like Email";
		allOk = false;
	} else	{
		document.getElementById(type).innerHTML = type + "Email is valid";
	}
}


