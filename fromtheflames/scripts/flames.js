document.addEventListener('DOMContentLoaded', (event) => {
    // Set the current year
    var currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;

    // Form submission handler
    document.getElementById('reviewForm').addEventListener('submit', function(e) 
    {e.preventDefault();

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

        let formData = JSON.parse(localStorage.getItem('formData')) || [];
        formData.push({ date, name, phone, email });
        localStorage.setItem('formData', JSON.stringify(formData));

        alert('Form data saved!');
        document.getElementById('reviewForm').reset();
    });
});

