const setErrorMessage = (input, message) => {
  const parentEl = input.closest("Phonenumber");
  parentEl.querySelector(".error").innerText = message;
  parentEl.classList.add("fail");
  parentEl.classList.remove("success");
};
const isPhoneNumberValidFn = () => {
  const phoneNumberValue = phoneNumberInput.value.trim();
  if (phoneNumberValue === "") {
    setErrorMessage(phoneNumberInput, "Phone number is required");
  } else if (!/^\d{9}$/.test(phoneNumberValue)) {
    setErrorMessage(phoneNumberInput, "Invalid phone number");
  } else {
    clearErrorMessage(phoneNumberInput);
    return true;
  }
};
// nameInput.addEventListener("input", isNameValidFn);
// emailInput.addEventListener("input", isEmailValidFn);
// passwordInput.addEventListener("input", isPasswordValidFn);
// confirmPasswordInput.addEventListener("input", isConfirmPasswordValidFn);
// phoneNumberInput.addEventListener("input", isPhoneNumberValidFn);
// personalNumberInput.addEventListener("input", isPersonalNumberValidFn);
// terms.addEventListener("change", isTermsValidFn);
