const bodyMass = document.getElementById("body-mass");
const bodyHeight = document.getElementById("body-height");
const bmi_result_wrapper = document.querySelector(
	'[data-name="body_mass_index_result"]'
);
const bmi_result_number = document.querySelector('[data-name="bmi_number"]');
const bmi_result_category = document.querySelector(
	'[data-name="bmi_category"]'
);
const bmi_calc_button = document.querySelector(
	'[data-name="body_mass_index_button"]'
);

bmi_calc_button.addEventListener("click", () => {
	let bodyHeightM = bodyHeight.value / 100;
	let BMI_value = bodyMass.value / (bodyHeightM * bodyHeightM);
	let BMI_category;

	if (bodyMass == "" && bodyHeight == "") {
		if (bmi_result_wrapper.classList.contains("display-none")) {
			return;
		} else {
			bmi_result_wrapper.classList.add("display-none");
		}
	}

	if (!isNaN(BMI_value)) {
		if (BMI_value < 18.5) {
			BMI_category = "Underweight";
		} else if (BMI_value >= 18.5 && BMI_value <= 24.9) {
			BMI_category = "Normal";
		} else if (BMI_value >= 25 && BMI_value <= 29.9) {
			BMI_category = "Overweight";
		} else if (BMI_value >= 30) {
			BMI_category = "Obesitas";
		} else {
			BMI_category = "ERROR!";
		}

		bmi_result_number.textContent = Number(BMI_value.toFixed(1));
		bmi_result_category.textContent = BMI_category;
		bmi_result_wrapper.classList.remove("display-none");
	}
});
