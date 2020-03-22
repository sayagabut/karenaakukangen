var button = document.querySelectorAll('button')[0];
var body   = document.querySelectorAll('body')[0];

button.addEventListener('click', activateLove, false);

body.addEventListener('webkitAnimationEnd', disableLove, false);
body.addEventListener('animationend', disableLove, false);

function activateLove() {
	body.classList.add('love');
}

// This function name makes me sad :(
function disableLove() {
  // This syntax makes me even sadder :'(
  body.classList.remove('love');
}
