document.getElementById('mode-button').addEventListener('click', ()=>{
	document.body.classList.toggle('dark');
	localStorage.setItem('mode' , document.body.classList);
});

if(localStorage.setItem('mode') !=''){
	document.body.classListi.add(localStorage.getItem('mode'));
	document.getElementById('mode-button').checked=true;

}

 


