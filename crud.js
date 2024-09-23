const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;
let data = [];

app.use(express.json());

app.get('/', (req, res) => {
    if (data.length === 0) {
        return res.json('Data is empty!');
    }

    res.json(data);
});

app.post('/', (req, res) => {
    const {name, email, password} = req.body;

    if (!name || !email || !password) {
        return res.json('Please input all fields!');
    }

    const user = {
        'id': data.length + 1,
        'name': name,
        'email': email,
        'password': password,
    }

    data.push(user);
    res.json('User successfully saved.');
});

app.put('/', (req, res) => {
    const { id, name, email, password } = req.body;

    let userFound = false;

    data.forEach(user => {
        if (user.id === id) {
            user.name = name || user.name;
            user.email = email || user.email;
            user.password = password || user.password;
            userFound = true;
        }
    });

    if (!userFound) {
        return res.json('User not found!');
    }

    res.json('User updated successfully.');
});

app.delete('/', (req, res) => {
    const {id} = req.body;

    const index = data.findIndex(user => user.id === id);
    if (index !== -1) {
        data.splice(index, 1);
        return res.json('User deleted successfully.')
    }

    res.json('user not found!');
});

app.listen(PORT, () => {
    console.log(`Server started on Port ${PORT}.`);
});