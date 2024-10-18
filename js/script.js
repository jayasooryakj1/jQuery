$(document).ready(function(){
$('button').click( function() {
	let uname=$("#uname").val();
	let email=$("#email").val();
	let pass1=$("#pass1").val();
	let pass2=$("#pass2").val();
	let mob_num=$("#mob_num").val();
	let dob=$("#dob").val();

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	var phoneno = /^\d{10}$/;
	var name_pattern=/[^\w\s-]/;


	if(uname==""){
		$("#uname_error").text("Enter the user name");
	}
	else if(name_pattern.test(uname)==true){
		$("#uname_error").text("User name shouldn't contain special characters");
	}
	else{
		$("#uname_error").text(" ");
	}



	if(email==""){
		$("#email_error").text("Enter the email");
	}
	else if(emailRegex.test(email)!=true){
		$("#email_error").text("Not  valid gmail");
	}
	else{
		$("#email_error").text(" ");
	}


	var psw_lower=/[a-z]/;
	var psw_upper=/[A-Z]/;
	var psw_digit=/[0-9]/;
	var psw_special=/[^a-zA-Z0-9]/;
	var psw_space=/\s/;


	if(pass1.length==0){
		$("#pass1_error").text("Enter the password");
	}

	else if(psw_space.test(pass1)==true){
		$("#pass1_error").text( "Should not contain whitespace");
	}
	else if(psw_lower.test(pass1)!=true){
		$("#pass1_error").text( "Must contain atleast a lower case letter");
	}
	else if(psw_upper.test(pass1)!=true){
		$("#pass1_error").text( "Must contain atleast an upper case letter");
	}
	else if(psw_digit.test(pass1)!=true){
		$("#pass1_error").text( "Must contain atleast a digit");
	}
	else if(psw_special.test(pass1)!=true){
		$("#pass1_error").text( "Must contain atleast a special character");
	}
	else if(pass1.length<8){
		$("#pass1_error").text( "Password must contain 8 chars");
	}

	else{
		$("#pass1_error").text("");
	}




	if(pass1 != pass2){
		$("#pass2_error").text("Password mismatch");
	}
	else{
		$("#pass2_error").text("");
	}



	if(mob_num==""){
		$("#mob_num_error").text("Enter the mobile number");
	}
	else if(phoneno.test(mob_num)!=true){
		$("#mob_num_error").text("Invalid . Must contain 10 digits");
	}
	else{
		$("#mob_num_error").text("");
	}


	if($("#m:checked").length!=0 || $("#f:checked").length!=0){
		$("#gen_error").text("");
	}
	else{

		$("#gen_error").text("Select your gender");
	}

	if($("#fb:checked").length!=0 || $("#ct:checked").length!=0){
		$("#sports_error").text("");

	}
	else{

		$("#sports_error").text("Select your favourite sports ");
	}

	if(dob==""){
		$("#dob_error").text("Select your dob");
	}
	else{
		$("#dob_error").text("");
	}



});
});


function myFunction(event){
 
	var key=event.charCode;

	if(key>=48 && key<=57){
	}
	else{
		event.preventDefault();
	}

}