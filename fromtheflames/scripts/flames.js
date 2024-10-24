document.addEventListener('DOMContentLoaded', (event) => {
    
    var currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;

    
    document.addEventListener('DOMContentLoaded', function() {
        // Form submission handler
        document.getElementById('reviewForm').addEventListener('submit', function(event) {
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
            document.getElementById('reviewForm').reset();
        });
    
        // Display review count
        if (localStorage.getItem('reviewCount')) {
            let reviewCount = parseInt(localStorage.getItem('reviewCount'));
            document.getElementById('review-count').textContent = 'You have submitted ' + reviewCount + ' review(s).';
        } else {
            localStorage.setItem('reviewCount', 0);
            document.getElementById('review-count').textContent = 'You have submitted 0 review(s).';
        }
    
        // Update review count on form submission
        document.getElementById('reviewForm').addEventListener('submit', function(event) {
            event.preventDefault();
            let reviewCount = parseInt(localStorage.getItem('reviewCount')) + 1;
            localStorage.setItem('reviewCount', reviewCount);
            document.getElementById('review-count').textContent = 'You have submitted ' + reviewCount + ' review(s).';
            alert('Form data saved!');
            document.getElementById('reviewForm').reset();
        });
    });
    

