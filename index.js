const express = require('express');
const app = express();

app.get('/add', (req, res) => {
    const { a, b } = req.query;
    const result = parseInt(a) + parseInt(b);
    res.send(`Result of addition is: ${result}`);
});

app.get('/subtract', (req, res) => {
    const { a, b } = req.query;
    const result = parseInt(a) - parseInt(b);
    res.send(`Result of subtraction is: ${result}`);
});

app.get('/multiply', (req, res) => {
    const { a, b } = req.query;
    const result = parseInt(a) * parseInt(b);
    res.send(`Result of multiplication is: ${result}`);
});

app.get('/divide', (req, res) => {
    const { a, b } = req.query;
    if (b == 0) {
        return res.send('Cannot divide by zero');
    }
    const result = parseInt(a) / parseInt(b);
    res.send(`Result of division is: ${result}`);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
