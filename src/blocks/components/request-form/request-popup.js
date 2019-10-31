const requestButton = document.querySelector('.advantages__button');
const overlay = document.querySelector('.popup_overlay');
const requestPopup = document.querySelector('.request-form__popup');
if (requestPopup) {
	const close = requestPopup.querySelector('.close-element');
}

if (requestButton && overlay && requestPopup) {
	requestButton.addEventListener('click', function() {
		overlay.style.display = 'block';
		requestPopup.style.display = 'block';
		requestPopup.style.opacity = '1';
	});

	close.addEventListener('click', function() {
		overlay.style.display = 'none';
		requestPopup.style.display = 'none';
		requestPopup.style.opacity = '0';
	});
	overlay.addEventListener('click', function() {
		overlay.style.display = 'none';
		requestPopup.style.display = 'none';
		requestPopup.style.opacity = '0';
	});
}
