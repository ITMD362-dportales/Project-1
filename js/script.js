function checkinput(){
//verify inputs name, email, phone number, and password is filled out
  var na = document.forms["form"]["name"].value;
  var em = document.forms["form"]["mail"].value;
  var pn = document.forms["form"]["phone"].value;
  var ps = document.forms["form"]["passw"].value;
  
  
}

function ver(){
  var na = document.getElementById('name');
  var em = document.getElementById('mail');
  var pn = document.getElementById('phone');
  var ps = document.getElementById('passw');
	
  var button = document.getElementById('entrybutton');
  button.addEventListener('click' , function(){
	alert("Name: " + na.value  + "\n" +
	"Email: " + em.value  + "\n" +
	"Phone Number: " + pn.value  + "\n" +
	"Password: " + ps.value  + "\n" +
	);
	
  });
}

window.addEventListener('load', ver)