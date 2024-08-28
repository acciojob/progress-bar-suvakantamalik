//your JS code here. If required.
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const progressBar = document.getElementById("progress-bar");
const circles = document.querySelectorAll(".circle");

let currentActive = 1; 
next.addEventListener("click", () => {
	++currentActive;
	if(currentActive > circles.length){
		currentActive = circles.length;
	}
	updateProgressBar();
}); 

prev.addEventListener("click", () => {
	--currentActive;
	if(currentActive < 1){
		currentActive = 1;
	}
	updateProgressBar();
});

function updateProgressBar() {
	circles.forEach((circle, curIndex) => {
		if(curIndex < currentActive){
			circle.classList.add("active");
		}
		else{
			circle.classList.remove("active");
		}
	});

	const progressFill = ((currentActive - 1)/(circles.length - 1)) * 100;
	progressBar.style.width = progressFill + "%";

	if(currentActive === 1){
		prev.disabled = true;
	}
	else if(currentActive == circles.length){
		next.disabled = true;
	}
	else{
		next.disabled = false;
		prev.disabled = false;
	}
}