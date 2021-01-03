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
		mainColor: "#C9C08F",  //yellow
		darkColor: "#ACA57C"  //dark yellow
	}
}
function styleCard(type) {
	let style = styleTypes[type];
	let root = document.querySelector(':root');
	root.style.setProperty("--main-color",style.mainColor);
	root.style.setProperty("--dark-color", style.darkColor);
}
function wordType() {
	var typeField = document.querySelector(".wordtypeJS").innerHTML;
	var regex = /\(([^)]+)\)/;
	var type = regex.exec(typeField)[1];
	return type;
}
function main() {
	if ( ["noun", "verb", "adjective"].indexOf(wordType()) >= 0 ) {
		styleCard(wordType());
	}
}
window.addEventListener("onchange", main());
window.addEventListener("onclick", main());
