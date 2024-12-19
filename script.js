// Select the login form
const loginForm = document.getElementById('login-form');

// Handle the form submission
loginForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Get the email and password values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Send the login data to the backend
    try {
        const response = await fetch('https://your-backend-url/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        // Handle response
        if (data.success) {
            alert('Login successful!');
            window.location.href = '/dashboard.html'; // Redirect to the dashboard
        } else {
            document.getElementById('error-message').style.display = 'block';
            document.getElementById('error-message').textContent = data.message || 'Invalid login credentials';
        }
    } catch (error) {
        console.error('Error during login:', error);
        document.getElementById('error-message').style.display = 'block';
        document.getElementById('error-message').textContent = 'An error occurred. Please try again.';
    }
});
