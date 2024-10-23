{var currentYear = new Date().getFullYear();

    document.getElementById('current-year').textContent = currentYear;

};

    
document.getElementById('reviewForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const date = document.getElementById('pickdate').value;
    const name = document.getElementById('username').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    
    // Create an array to store data
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    
    // Add new form data to array
    formData.push({ date, name, phone, email });
    
    // Save array to local storage
    localStorage.setItem('formData', JSON.stringify(formData));
    
    alert('Form data saved!');
    document.getElementById('reviewForm').reset();
});
