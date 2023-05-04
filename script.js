function convert() {
	let temp = parseFloat(document.getElementById("temp").value);
	let unit = document.getElementById("unit").value;
	let convertedTemp = 0;
	let unitText = "";

	if (isNaN(temp)) {
		alert("Please enter a valid number!");
		return;
	}

	if (unit === "C") {
		convertedTemp = temp * 9/5 + 32;
		unitText = "°F";
	} else if (unit === "F") {
		convertedTemp = (temp - 32) * 5/9;
		unitText = "°C";
	} else if (unit === "K") {
		convertedTemp = temp - 273.15;
		unitText = "°C";
	}

	document.getElementById("converted").innerHTML = convertedTemp.toFixed(2) + unitText;
}
