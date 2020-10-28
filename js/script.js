//verify inputs name, email, phone number, and password is filled out
function checkinput(){
  var a = document.forms["test"]["name"].value;
  var b = document.forms["test"]["mail"].value;
  var c = document.forms["test"]["phone"].value;
  var d = document.forms["test"]["passw"].value;
  
  if (a == "", b == "", c == "", d == ""){
    alert("All input boxes not filled out")
  }  
  else{
	ver();
  }
}

//alert user with prompt to check if what was filled out is correct
function ver(){
  var na = document.getElementById('name');
  var em = document.getElementById('mail');
  var pn = document.getElementById('phone');
  var ps = document.getElementById('passw');
	
  confirm("Name: " + na.value  + "\n" +
  "Email: " + em.value  + "\n" +
  "Phone Number: " + pn.value  + "\n" +
  "Password: " + ps.value + "\n" +
  "Are these values correct?"
  );
}

//wait for check info button to be clicked
var button = document.getElementById('entrybutton');
button.addEventListener('click' , checkinput);