document.addEventListener('DOMContentLoaded', () => {
  const editBtn = document.getElementById("edit-btn");
  const saveBtn = document.getElementById("save-btn");

  // Select the fields you want to make editable
  const nameField = document.getElementById("nameField");
  const emailField = document.getElementById("emailField");
  const phoneField = document.getElementById("phoneField");
  const streetField = document.getElementById("streetField");
  const cityField = document.getElementById("cityField");
  const stateField = document.getElementById("stateField");
  const zipField = document.getElementById("zipField");

  // Convert static text spans into editable inputs
  function makeEditable(span) {
    const text = span.textContent;
    const input = document.createElement("input");
    input.type = "text";
    input.value = text;
    input.className = "form-control mb-2"; // Bootstrap styling
    span.replaceWith(input);
    return input;
  }

  // Convert editable inputs back to spans
  function makeNonEditable(input) {
    const text = input.value;
    const span = document.createElement("span");
    span.textContent = text;
    input.replaceWith(span);
    return span;
  }

  let isEditing = false;

  // Event listener for the Edit button
  editBtn.addEventListener("click", () => {
    if (!isEditing) {
      // Enable editing
      nameField.inputElement = makeEditable(nameField);
      emailField.inputElement = makeEditable(emailField);
      phoneField.inputElement = makeEditable(phoneField);
      streetField.inputElement = makeEditable(streetField);
      cityField.inputElement = makeEditable(cityField);
      stateField.inputElement = makeEditable(stateField);
      zipField.inputElement = makeEditable(zipField);

      // Show the Save button
      saveBtn.style.display = "inline-block";

      // Change Edit button text
      editBtn.textContent = "Cancel";
      editBtn.classList.replace("btn-primary", "btn-danger");

      isEditing = true;
    } else {
      // Cancel editing
      nameField.inputElement = makeNonEditable(nameField.inputElement);
      emailField.inputElement = makeNonEditable(emailField.inputElement);
      phoneField.inputElement = makeNonEditable(phoneField.inputElement);
      streetField.inputElement = makeNonEditable(streetField.inputElement);
      cityField.inputElement = makeNonEditable(cityField.inputElement);
      stateField.inputElement = makeNonEditable(stateField.inputElement);
      zipField.inputElement = makeNonEditable(zipField.inputElement);

      // Hide the Save button
      saveBtn.style.display = "none";

      // Reset Edit button text
      editBtn.textContent = "Edit Profile";
      editBtn.classList.replace("btn-danger", "btn-primary");

      isEditing = false;
    }
  });

  // Event listener for the Save button
  saveBtn.addEventListener("click", () => {
    // Save the changes (you can integrate with your backend here)
    console.log("Saving changes:");
    console.log("Name:", nameField.inputElement.value);
    console.log("Email:", emailField.inputElement.value);
    console.log("Phone:", phoneField.inputElement.value);
    console.log("Street:", streetField.inputElement.value);
    console.log("City:", cityField.inputElement.value);
    console.log("State:", stateField.inputElement.value);
    console.log("Zip:", zipField.inputElement.value);

    // Convert inputs back to spans
    nameField.inputElement = makeNonEditable(nameField.inputElement);
    emailField.inputElement = makeNonEditable(emailField.inputElement);
    phoneField.inputElement = makeNonEditable(phoneField.inputElement);
    streetField.inputElement = makeNonEditable(streetField.inputElement);
    cityField.inputElement = makeNonEditable(cityField.inputElement);
    stateField.inputElement = makeNonEditable(stateField.inputElement);
    zipField.inputElement = makeNonEditable(zipField.inputElement);

    // Hide the Save button
    saveBtn.style.display = "none";

    // Reset Edit button text
    editBtn.textContent = "Edit Profile";
    editBtn.classList.replace("btn-danger", "btn-primary");

    isEditing = false;

    // Optionally: Send data to the server here
    // e.g., use fetch() to send a POST or PUT request
  });
});
