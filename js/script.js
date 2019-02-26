	var feedbackLink = document.querySelector(".show-feedback-popup");
		var mapLink = document.querySelector(".show-interactive-map");
		var feedbackPopup = document.querySelector(".modal-feedback");
		var mapPopup = document.querySelector(".modal-map");
		var feedbackClose = feedbackPopup.querySelector(".modal-feedback .popup-close");
		var mapClose =  mapPopup.querySelector(".modal-map .popup-close");
		var nameField = feedbackPopup.querySelector("[name=name]"); 
		var form = feedbackPopup.querySelector("form");
		var mailField = form.querySelector("[name=email]");
		var textField = form.querySelector("[name=feedback-text]");
		var isStorageSupport = true;
		var storageName="";
		var storageMail="";

		var controls = document.querySelectorAll(".slider-controls i");
		var productsSlider = document.querySelectorAll(".products-slider-item");

		var servicesButtons = document.querySelectorAll(".slider-button");
		var servicesSliderItems = document.querySelectorAll(".services-slider-item");

		try{
			storageName = localStorage.getItem("name");
			storageMail = localStorage.getItem("mail");
		}catch(err){
			isStorageSupport = false;
		}

		feedbackLink.addEventListener("click", function(evt){
			evt.preventDefault();
			feedbackPopup.classList.add("modal-show");
			

			if(storageName || storageMail){
				nameField.value = storageName;
				mailField.value = storageMail;
				textField.focus();
			}else {
				nameField.focus();
			}
		});

		feedbackClose.addEventListener("click", function(evt){
			evt.preventDefault();
			feedbackPopup.classList.remove("modal-show");
			feedbackPopup.classList.remove("modal-error");
		});
		form.addEventListener("submit", function(evt){
			if (!nameField.value || !mailField.value){
				evt.preventDefault();
				feedbackPopup.classList.remove("modal-error");
				feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
				feedbackPopup.classList.add("modal-error");
			}else{
				if(isStorageSupport){
					localStorage.setItem("name", nameField.value);
					localStorage.setItem("mail", mailField.value);
				}
			}
		});

		window.addEventListener("keydown", function(evt){
			if(evt.keyCode === 27){
				evt.preventDefault();
				if(feedbackPopup.classList.contains("modal-show")){
					feedbackPopup.classList.remove("modal-show");
					feedbackPopup.classList.remove("modal-error");
				}
			}
		});

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

		for (var i=0; i<= controls.length-1; i++){
			var slide = 0;
			controls[i].addEventListener("click", function(evt){
				evt.preventDefault();
				if (!evt.path[0].classList.contains("active")){
					for (var j =0; j<= controls.length-1; j++){
						if (controls[j].classList.contains("active")){
							controls[j].classList.remove("active");
						}
						if (controls[j] === evt.path[0]){
							slide = j;
							}
					}
					evt.path[0].classList.add("active");
					if (!productsSlider[slide].classList.contains("show-slide")){
						for( var j=0; j<=productsSlider.length-1; j++){
							if (productsSlider[j].classList.contains("show-slide")) {
								productsSlider[j].classList.remove("show-slide");
							}
						}
						productsSlider[slide].classList.add("show-slide")
					}
				}
			});
		}

		for (var i=0; i<= servicesButtons.length-1; i++){
			var servicesSlide = 0;
			servicesButtons[i].addEventListener("click", function(evt){
				evt.preventDefault();
				if (!evt.path[0].classList.contains("active-item")){
					for (var j=0; j<=servicesButtons.length-1; j++){
						if (servicesButtons[j].classList.contains("active-item")) {
							servicesButtons[j].classList.remove("active-item");
						}
						if (servicesButtons[j] === evt.path[0]) {
							servicesSlide = j;
						}
					}
					evt.path[0].classList.add("active-item");
					if (!servicesSliderItems[servicesSlide].classList.contains("services-active-item")){
						for (var j=0; j<= servicesSliderItems.length-1; j++){
							if (servicesSliderItems[j].classList.contains("services-active-item")) {
								servicesSliderItems[j].classList.remove("services-active-item");
							}
						}
						servicesSliderItems[servicesSlide].classList.add("services-active-item");
					}
				}
			});
		}
		