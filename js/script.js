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