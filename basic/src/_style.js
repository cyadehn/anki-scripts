const itemTypes = ["noun", "verb", "adjective", "particle", "counter", "numeric", "expression", "adverb"];
const styleTypes = 
{
	noun: {
		mainColor: "#2497E6", // blue
		darkColor: "#016ea6" // dark blue
	},
	verb: {
		mainColor: "#FA2445", // red
		darkColor: "#B82E3F" // dark red
	},
	adjective: {
		mainColor: "#FEE071", // yellow
		darkColor: "#ACA57C" // dark yellow
	},
	particle: {
		mainColor: "#A700ED",  // purple
		darkColor: "#6E009D"  // dark purple
	},
	counter: {
		mainColor: "#A700ED",  // purple
		darkColor: "#6E009D"  // dark purple
	},
	numeric: {
		mainColor: "#A700ED",  // purple
		darkColor: "#6E009D"  // dark purple
	},
	expression: {
		mainColor: "#444444", // dark grey
		darkColor: "#000000" // black
	},
	adverb: {
		mainColor: "#444444", // dark grey
		darkColor: "#000000" // black
	}
};
const root = document.querySelector(":root");
const typeField = document.querySelector(".wordtypeJS").innerHTML;
function styleCard(type) 
{
	const style = styleTypes[type];
	root.style.setProperty("--main-color", style.mainColor);
	root.style.setProperty("--dark-color", style.darkColor);
}
function getWordType() 
{
	const regex = /\(([^)]+)\)/;
	const type = regex.exec(typeField)[1];
	if (itemTypes.indexOf(type) >= 0) 
	{
		return type;
	} else 
	{
		for (let i = 0; i<itemTypes.length; i++)
		{
			if (type.includes(itemTypes[i]))
			{
				return itemTypes[i];
			}
		}
	}
	return "";
}
const altDiv = document.querySelector(".altDefJS");
const defDiv = document.querySelector(".backDef");
function getAltDef() { return altDiv.innerHTML; }
function appendAltDefs(altDefs) { if (defDiv) defDiv.innerHTML += ("Alt: " + altDefs); }
function main() 
{
	var type = getWordType();
	var altDefinitions = getAltDef();
	if (type) styleCard(type);
	if (altDefinitions) appendAltDefs(altDefinitions);
}
window.addEventListener("onclick", main());
