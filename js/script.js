function checkinput(){
//verify inputs name, email, phone number, and password is filled out
  var na = document.forms["form"]["name"].value;
  var em = document.forms["form"]["mail"].value;
  var pn = document.forms["form"]["phone"].value;
  var ps = document.forms["form"]["passw"].value;
  
  
}

function init(){
  var na = document.getElementById('name');
  var em = document.getElementById('mail');
  var pn = document.getElementById('phone');
  var ps = document.getElementById('passw');
	
  var button = document.getElementById('entrybutton');
  button.addEventListener('click' , function(){
	alert("Name: /n/n/n/n/n");
	
  });
}

window.addEventListener('load', init)