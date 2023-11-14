const sumField = document.querySelector(
	"[data-label='numbers-for-array'][data-operator='sum']"
);
const sumResult = document.querySelector("[data-label='calculation-result']");
const sumResultWrapper = document.querySelector(
	"[data-label='calculation-result-wrapper']"
);
const sumArrayButton = document.querySelector(
	"[data-label='calculation-array-nums']"
);
const sumButton = document.querySelector('[data-label="calculation-button"]');
const sumArrayResult = document.querySelector(
	'[data-label="sum-array-result"]'
);

function pushNums(array, value) {
	const regex = /^(?!0)[0-9]+$/;

	if (value === "" || value === null || value === undefined) {
		return;
	}

	if (value.match(regex)) {
		array.push(value);
	}
}

function displayResult(array, result_elm) {
	if (array.length === 0) {
		result_elm.classList.add("display-none");
	} else {
		result_elm.classList.remove("display-none");
	}
}

function updateDisplay(array, result_elm) {
	let joined_array = array.join(" + ");

	result_elm.innerHTML = joined_array;
}

function resetInputField(value) {
	value.value = "";
}

function calculateArrayOfNums(array, result_elm) {
	let sumArrayResult = 0;

	array.forEach((num) => {
		sumArrayResult += parseInt(num);
	});

	result_elm.innerHTML = "Result : " + sumArrayResult;
}

let sumNumbers = [];

sumButton.addEventListener("click", () => {
	pushNums(sumNumbers, sumField.value);
	displayResult(sumNumbers, sumResultWrapper);
	updateDisplay(sumNumbers, sumResult);
	resetInputField(sumField);
});

sumArrayButton.addEventListener("click", () => {
	calculateArrayOfNums(sumNumbers, sumArrayResult);

	if (sumArrayResult.innerHTML === "") {
		sumArrayResult.classList.add("display-none");
	} else {
		sumArrayResult.classList.remove("display-none");
	}
});

console.log(sumNumbers);
