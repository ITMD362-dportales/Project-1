function init(){
	var na = document.getElementById('name');
	var em = document.getElementById('email');
	var ps = document.getElementById('pass');
	
	var no = document.getElementById('nameout');
	var eo = document.getElementById('emailout');
	var po = document.getElementById('passout');
	
	var button = document.getElementById('entrybutton');
	
	button.addEventListener('click' , function(){
		no.innerHTML = na.value;
		eo.innerHTML = em.value;
		po.innerHTML = ps.value;
	});
}
window.addEventListener('load', init)