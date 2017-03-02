console.log("Hello World from main.js!");


var tl = new TimelineMax();

tl.to(".progressbar1", 1, {width: "100%"});
tl.to(".progressbar2", 1, {width: "100%"});
tl.to(".progressbar3", 1, {width: "100%"});
tl.to(".progressbar4", 1, {width: "100%"});
tl.to(".progressbar5", 1, {width: "100%"});
tl.to(".progressbar5", 1, {width: "0%"});
tl.to(".progressbar4", 1, {width: "0%"});
tl.to(".progressbar3", 1, {width: "0%"});
tl.to(".progressbar2", 1, {width: "0%"});
tl.to(".progressbar1", 1, {width: "0%"});

tl.pause();


window.addEventListener("scroll", function() {
	//console.log(window.pageYOffset);

	// console.log(document.body.offsetHeight);

	// console.log(window.innerHeight);

	var distanceScrolledPercent = window.pageYOffset / (document.body.offsetHeight - window.innerHeight);

	tl.seek(distanceScrolledPercent * tl.totalDuration())
})
