//slider

const slider = document.getElementById("slider");
const dots = document.getElementById("dots");

function shiftClass(oldElem, newElem){
	oldElem.classList.remove("active");
	newElem.classList.add("active");
}

slider.addEventListener("click", (event) => {

	function ButSwitchContains(string){
		return elemButtonSwitch.classList.contains(string);
	}

	let elemButtonSwitch = event.target;

	while(  elemButtonSwitch !== slider &&
			!ButSwitchContains("left") &&
			!ButSwitchContains("right") &&
			!ButSwitchContains("dot") ) {

		elemButtonSwitch = elemButtonSwitch.parentNode;
	}
	if( elemButtonSwitch === slider &&
		!ButSwitchContains("left") &&
		!ButSwitchContains("right") &&
		!ButSwitchContains("dot") ||
		ButSwitchContains("active")) return

	let elemActive = dots.getElementsByClassName('active')[0];

	if(!elemActive && ButSwitchContains("dot")){
		elemButtonSwitch.classList.add("active"); 
		return
	}

	if(ButSwitchContains("left")){

		if(!elemActive.previousSibling.previousSibling)return

		shiftClass(elemActive, elemActive.previousSibling.previousSibling);
	}else if(ButSwitchContains("right")){

		if(!elemActive.nextSibling.nextSibling)return
			
		shiftClass(elemActive, elemActive.nextSibling.nextSibling);

	}else if(ButSwitchContains("dot")){
		shiftClass(elemActive, elemButtonSwitch);
	}

},false);

//to show form "create Account"

const createAccount = document.getElementById("createAccount");

createAccount.addEventListener("click", (event) => {
	if(event.target.tagName !== "A") return

	let form = document.getElementsByClassName('popUpForm')[0];
	form.style.display = "block";

	const delForm = document.getElementById("delForm");
	delForm.addEventListener("click", w ,false);
	function w (e){
		form.style.display = "none";
		delForm.addEventListener("click", w ,false);
	}
},false);