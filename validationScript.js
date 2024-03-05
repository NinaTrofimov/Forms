    // JavaScript code for form validation
	
window.addEventListener("load", e => {
      // Prevent form from submitting
      let form = document.getElementById('myForm');

      form.addEventListener("submit", e =>{
            e.preventDefault();

             // Retrieve the input field value
            let inputField = document.getElementById('inputField');
            let inputValue = inputField.value;

            // Check if the input value matches the pattern
            if (Alphanumeric(inputValue)) {
                  // Valid input: display confirmation and submit the form
                  inputField.value = 'Form Submitted';
                  form.submit();
              } else {
                  // Invalid input: display error message
                  inputField.value = 'Error: does not contain Alphanumeric values';
              }
      })

      })
// Regular expression pattern for alphanumeric input
function Alphanumeric(input){
      return /^[a-zA-Z0-9]+$/.test(input);
}