document.addEventListener('DOMContentLoaded', (event) => {
    
    var currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;

    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('signupform').addEventListener('submit', function(event) {
            event.preventDefault();
    
            // Get form values
            const date = document.getElementById('pickdate').value;
            const name = document.getElementById('username').value;
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value;
    
            // Simple form validation
            if (!date) {
                alert('Please choose a date.');
                return;
            }
            if (!name) {
                alert('Please enter your name.');
                return;
            }
            if (!phone) {
                alert('Please enter your phone number.');
                return;
            }
            if (!email) {
                alert('Please enter your email address.');
                return;
            }
    
            // Create an array to store data
            let formData = JSON.parse(localStorage.getItem('formData')) || [];
    
            // Add new form data to array
            formData.push({ date, name, phone, email });
    
            // Save array to local storage
            localStorage.setItem('formData', JSON.stringify(formData));
    
            alert('Form data saved!');
            document.getElementById('signupform').reset();
        });
    });
})