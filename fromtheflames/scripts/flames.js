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
    
            alert('Form data is valid!');
            document.getElementById('signupform').submit();
        });
    });
})
    
   

       