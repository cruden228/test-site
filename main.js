// on / off switch

document.addEventListener("click", (event) => {
	let ButtonsSwitch = event.target;

	while(ButtonsSwitch.id !== "switch"){
		if(ButtonsSwitch === document) break 
		ButtonsSwitch = ButtonsSwitch.parentNode;
	}
	if( ButtonsSwitch.id !== "switch" || 
		event.target.classList.contains("active") || 
		event.target === ButtonsSwitch ) return

	let divActive = ButtonsSwitch.getElementsByClassName('active')[0];

	if(!divActive){
		event.target.classList.add("active"); 
		return
	}

	divActive.classList.remove("active");
	event.target.classList.add("active");
},false);


//to show cart

const basketId = document.getElementById("basketId");

basketId.addEventListener("mouseover",(event)=>{
	let cart = event.target;

	while(cart !== basketId){
		if(cart === document) break 
		cart = cart.parentNode;
	}

	if(cart !== basketId)return

	let cartItems = basketId.getElementsByClassName('cart_items')[0];
	cartItems.style.display = "block";

	document.addEventListener("mouseout", w ,false);
	function w (e){
		cart = e.relatedTarget;
		while(cart !== basketId){
			if(cart === document) break 
			cart = cart.parentNode;
		}
		if(cart === basketId)return

		cartItems.style.display = "none";
		document.removeEventListener("mouseout", w ,false);
	}

},false);


//to show submenu

const submenu = document.getElementById("submenu");

submenu.addEventListener("mouseover",(event)=>{
	let menuClon = event.target;

	while(menuClon !== submenu){
		if(menuClon === document) break 
		menuClon = menuClon.parentNode;
	}

	if(menuClon !== submenu)return

	let cartItems = submenu.getElementsByClassName('submenu_items')[0];
	cartItems.style.display = "block";

	document.addEventListener("mouseout", w ,false);
	function w (e){
		menuClon = e.relatedTarget;
		while(menuClon !== submenu){
			if(menuClon === document) break 
			menuClon = menuClon.parentNode;
		}
		if(menuClon === submenu)return

		cartItems.style.display = "none";
		document.removeEventListener("mouseout", w ,false);
	}

},false);


//slider switch

const slider = document.getElementById("slider");
const dots = document.getElementById("dots");

slider.addEventListener("click", (event) => {
	const elem = event.target;
	let ButtonSwitch = elem;
	while(  ButtonSwitch !== slider &&
			!ButSwitchContains("left") &&
			!ButSwitchContains("right") &&
			!ButSwitchContains("dot") ) ButtonSwitch = ButtonSwitch.parentNode;
	if( ButtonSwitch === slider &&
		!ButSwitchContains("left") &&
		!ButSwitchContains("right") &&
		!ButSwitchContains("dot") ||
		ButSwitchContains("active")) return

	let divActive = dots.getElementsByClassName('active')[0];
	if(!divActive && ButSwitchContains("dot")){
		ButtonSwitch.classList.add("active"); 
		return
	}

	if(ButSwitchContains("left")){
		if(!divActive.previousSibling.previousSibling)return
		shiftClass(divActive, divActive.previousSibling.previousSibling);
	}else if(ButSwitchContains("right")){
		if(!divActive.nextSibling.nextSibling)return
		shiftClass(divActive, divActive.nextSibling.nextSibling);
	}else if(ButSwitchContains("dot")){
		shiftClass(divActive, ButtonSwitch);
	}

	function shiftClass(oldElem, newElem){
		oldElem.classList.remove("active");
		newElem.classList.add("active");
	}
	function ButSwitchContains(string){
		return ButtonSwitch.classList.contains(string);
	}
},false);

//to show create Account
console.log();
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