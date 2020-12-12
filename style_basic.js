var console = {
	log: function(s) {
		document.getElementById('debug').innerText += s+'\n';
	}
};
let styleTypes = {
	noun: {
		mainColor: "#2497E6", //blue
		darkColor: "#016ea6"  //dark blue
	},
	verb: {
		mainColor: "#FA2445",  //red
		darkColor: "#B82E3F"  //dark red
	},
	adjective: {
		mainColor: "#FFF500",  //yellow
		darkColor: "#C8AC73"  //dark yellow
	}
}

console.log(styleTypes.noun.mainColor);
function styleCard(type) {
	console.log(type);
	let style = styleTypes[type];
	let root = document.querySelector(':root');
	root.style.setProperty("--main-color",style.mainColor);
	root.style.setProperty("--dark-color", style.darkColor);
}
function wordType() {
	var typeField = document.querySelector(".wordtype").innerHTML;
	var regex = /\(([^)]+)\)/;
	var type = regex.exec(typeField)[1];
	console.log(type);
	return type;
}

function main() {
	if ( ["noun", "verb", "adjective"].indexOf(wordType()) >= 0 ) {
		styleCard(wordType());
	}
}

window.addEventListener("onload", main());
