const bodyMass = document.getElementById("body-mass");
const bodyHeight = document.getElementById("body-height");
const bmi_result_wrapper = document.querySelector(
	'[data-name="body_mass_index_result"]'
);
const bmi_result_number = document.querySelector('[data-name="bmi_number"]');
const bmi_calc_button = document.querySelector(
	'[data-name="body_mass_index_button"]'
);

bmi_calc_button.addEventListener("click", () => {
	let BMI_value = bodyMass.value / (bodyHeight.value * bodyHeight.value);

	if (bodyMass == "" && bodyHeight == "") {
		if (bmi_result_wrapper.classList.contains("display-none")) {
			return;
		} else {
			bmi_result_wrapper.classList.add("display-none");
		}
	}

	bmi_result_number.textContent = BMI_value;
	bmi_result_wrapper.classList.remove("display-none");
});
