const express = require('express');
const app = express();
const PORT = 5000;

// Middleware to parse JSON
app.use(express.json());

// Mock user data
const users = [
    { email: 'test@example.com', password: 'test123' },
    { email: 'admin@westmont.com', password: 'admin123' },
];

// Login endpoint
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    // Check if the user exists
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        res.json({ success: true, message: 'Login successful' });
    } else {
        res.status(401).json({ success: false, message: 'Invalid email or password' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Mock backend running at http://localhost:${PORT}`);
});
