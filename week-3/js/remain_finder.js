const dividend_number = document.getElementById("dividend");
const divider_number = document.getElementById("divider");
const remainder_result_button = document.querySelector(
	"[data-name='remainder_button']"
);
const remainder_result_place = document.querySelector(
	"[data-name='remainder_result']"
);

function remain_finder() {
	if (dividend_number.value == "" && divider_number.value == "") {
		if (remainder_result_place.classList.contains("display-none")) {
			return;
		} else {
			remainder_result_place.classList.add("display-none");
		}
	}

	if (dividend_number.value > divider_number.value) {
		alert("Divisor number must be greater than Dividend number!");

		remainder_result_place.textContent = "";
		if (remainder_result_place.classList.contains("display-none")) {
			return;
		} else {
			remainder_result_place.classList.add("display-none");
		}
	}

	let dividing_result = dividend_number.value / divider_number.value;
	let before_decimal = Math.floor(dividing_result);
	let nearest_number = before_decimal * divider_number.value;
	let remainder_result = dividend_number.value - nearest_number;

	if (!isNaN(remainder_result)) {
		remainder_result_place.textContent = remainder_result;
		remainder_result_place.classList.remove("display-none");
	}
}

remainder_result_button.addEventListener("click", () => {
	if (dividend_number.value == "" && divider_number.value == "") {
		if (remainder_result_place.classList.contains("display-none")) {
			return;
		} else {
			remainder_result_place.classList.add("display-none");
		}
	}

	let dividing_result = dividend_number.value / divider_number.value;
	let before_decimal = Math.floor(dividing_result);
	let nearest_number = before_decimal * divider_number.value;
	let remainder_result = dividend_number.value - nearest_number;

	if (!isNaN(remainder_result)) {
		remainder_result_place.textContent = remainder_result;
		remainder_result_place.classList.remove("display-none");
	}
});
