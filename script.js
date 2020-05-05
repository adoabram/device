		var writeUs = document.querySelector(".write-us");
		var modalWrite = document.querySelector(".modal-write");
		var modalClose = document.querySelector(".modal-close");
		var form = writeUs.querySelector("form");
		var userName = writeUs.querySelector("[name=user_name]");
		var email = writeUs.querySelector("[name=email]");
		var letter = writeUs.querySelector("[name=letter]");
		
		
		modalWrite.addEventListener("click", function(evt){
			evt.preventDefault();
			writeUs.classList.add("modal-show");
		});
		modalClose.addEventListener("click", function(evt){
			evt.preventDefault();
			writeUs.classList.remove("modal-show");
		});
		window.addEventListener("keydown", function(evt){
			if(evt.keyCode === 27){
				evt.preventDefault();
				if(writeUs.classList.contains("modal-show")){
					writeUs.classList.remove("modal-show");
					writeUs.classList.remove("modal-error");
				}
			}
		});
		form.addEventListener("submit", function(evt){
			if(!userName.value || !email.value || !letter.value){
				evt.preventDefault();
				writeUs.classList.remove("modal-error");	
				writeUs.offsetWidth = writeUs.offsetWidth;
				writeUs.classList.add("modal-error");	
			}
		});
		
		var mapLink = document.querySelector(".contacts-button-map");
		var mapPopup = document.querySelector(".map_popup");
		var mapClose = mapPopup.querySelector(".modal-close");
		
		mapLink.addEventListener("click", function(evt){
			evt.preventDefault();
			mapPopup.classList.add("modal-show");
		});
		mapClose.addEventListener("click", function(evt){
			evt.preventDefault();
			mapPopup.classList.remove("modal-show");
		});
		window.addEventListener("keydown", function(evt){
			if(evt.keyCode === 27){
				evt.preventDefault();
				if(mapPopup.classList.contains("modal-show")){
					mapPopup.classList.remove("modal-show");
				}
			}
		});
		
	var topMenuLink = document.querySelector(".catalog_menu_item h3.item");
	var topMenu = document.querySelector(".modal-menu");
	var mainMenu = document.querySelector(".main-menu-wrapper");
		
	topMenuLink.addEventListener("click", function(evt){
			evt.preventDefault();
			mainMenu.classList.toggle ("deactivated");
		});
	topMenu.addEventListener("click", function(evt){
			evt.preventDefault();
			mainMenu.classList.toggle ("deactivated");
		});


var sliderOne = document.querySelector(".slider_one");
var sliderTwo = document.querySelector(".slider_two");
var sliderThree = document.querySelector(".slider_three");
var oneSlidTwo = document.querySelector(".slider_one ul li:nth-child(2)");
var oneSlidThree = document.querySelector(".slider_one ul li:nth-child(3)");
var twoSlidOne = document.querySelector(".slider_two ul li:nth-child(1)");
var twoSlidThree = document.querySelector(".slider_two ul li:nth-child(3)");
var threeSlidOne = document.querySelector(".slider_three ul li:nth-child(1)");
var threeSlidTwo = document.querySelector(".slider_three ul li:nth-child(2)");


oneSlidTwo.addEventListener("click", function(evt){
	evt.preventDefault();
	sliderTwo.classList.add("slider-active");
	sliderOne.classList.remove("slider-active");
});
oneSlidThree.addEventListener("click", function(evt){
	evt.preventDefault();
	sliderThree.classList.add("slider-active");
	sliderOne.classList.remove("slider-active");
});

twoSlidOne.addEventListener("click", function(evt){
	evt.preventDefault();
	sliderOne.classList.add("slider-active");
	sliderTwo.classList.remove("slider-active");
});
twoSlidThree.addEventListener("click", function(evt){
	evt.preventDefault();
	sliderThree.classList.add("slider-active");
	sliderTwo.classList.remove("slider-active");
});

threeSlidOne.addEventListener("click", function(evt){
	evt.preventDefault();
	sliderOne.classList.add("slider-active");
	sliderThree.classList.remove("slider-active");
});
threeSlidTwo.addEventListener("click", function(evt){
	evt.preventDefault();
	sliderTwo.classList.add("slider-active");
	sliderThree.classList.remove("slider-active");
});

var delSlidOne = document.querySelector(".delslid_one");
var delSlidTwo = document.querySelector(".delslid_two");
var delSlidThree = document.querySelector(".delslid_three");
var delSlidLinkOne = document.querySelector(".del_link_one");
var delSlidLinkTwo = document.querySelector(".del_link_two");
var delSlidLinkThree = document.querySelector(".del_link_three");

delSlidLinkOne.addEventListener("click", function(evt){
	evt.preventDefault();
	delSlidOne.classList.add("delivery-slider-active");
	delSlidTwo.classList.remove("delivery-slider-active");
	delSlidThree.classList.remove("delivery-slider-active");

	delSlidLinkOne.classList.add("delivery_active");
	delSlidLinkTwo.classList.remove("delivery_active");
	delSlidLinkThree.classList.remove("delivery_active");
});

delSlidLinkTwo.addEventListener("click", function(evt){
	evt.preventDefault();
	delSlidTwo.classList.add("delivery-slider-active");
	delSlidOne.classList.remove("delivery-slider-active");
	delSlidThree.classList.remove("delivery-slider-active");

	delSlidLinkTwo.classList.add("delivery_active");
	delSlidLinkOne.classList.remove("delivery_active");
	delSlidLinkThree.classList.remove("delivery_active");
});

delSlidLinkThree.addEventListener("click", function(evt){
	evt.preventDefault();
	delSlidThree.classList.add("delivery-slider-active");
	delSlidTwo.classList.remove("delivery-slider-active");
	delSlidOne.classList.remove("delivery-slider-active");

	delSlidLinkThree.classList.add("delivery_active");
	delSlidLinkOne.classList.remove("delivery_active");
	delSlidLinkTwo.classList.remove("delivery_active");
});
