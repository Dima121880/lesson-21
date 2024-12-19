const ispersonalValidFn = () => {
  const personalValue = personalnumberInput.value.trim();
  if (personalValue === "") {
    setErrorMessage(personalnumberInput, "Personalnumber required");
    if (personalValue.length < 1)
      //   } else if (personalValue.length < 1) {
      setErrorMessage(
        personalnumberInput,
        "personalnumber must be at least 6 characters"
      );
  }
};
