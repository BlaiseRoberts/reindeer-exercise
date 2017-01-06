var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", 
"Aquamarine", "Periwinkle", "Azure", "Fuchsia",
"Chocolate", "Amber", "Amaranth"
];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", 
"Comet", "Cupid", "Donner", "Blitzen"];


var hohohoElement = document.getElementById("coloredReindeer");
/*
First attempt.... 

function cLoop (item) {
	hohohoElement.innerHTML = hohohoElement.innerHTML + item + "<br>";
};


colors.forEach(cLoop);

function rLoop (item) {
	hohohoElement.innerHTML = hohohoElement.innerHTML + item + "<br>";
};

reindeer.forEach(rLoop);
*/


for (var i = 0; i < reindeer.length; i++) {
	hohohoElement.innerHTML = hohohoElement.innerHTML + colors[i] + " " + reindeer[i] + "<br>";
}