//slider

$('.main-slider').slick({
	dots: true,
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1
});

//to show popUpWindow "create Account"

const userMenu = document.getElementById("user-menu");

userMenu.addEventListener("click", (event) => {
	let elemLogin = event.target;

	while(!elemLogin.classList.contains("user-login")) {
		if(elemLogin === document.documentElement) break
		elemLogin = elemLogin.parentNode;
	}
	if(!elemLogin.classList.contains("user-login")) return

	let popUpWindow = document.getElementsByClassName('popUp-window')[0];
	popUpWindow.classList.remove("popUp-window_hidden");

	const delForm = document.getElementById("delForm");
	delForm.addEventListener("click", eventDel ,false);
	function eventDel (e){
		popUpWindow.classList.add("popUp-window_hidden");
		delForm.addEventListener("click", eventDel ,false);
	}
},false);