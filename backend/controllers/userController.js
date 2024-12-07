const db = require('../db');

exports.getAllUsers = (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) {
            res.status(500).json({ error: err });
        } else {
            res.json(results);
        }
    });
};

exports.addUser = (req, res) => {
    const { name, email, role, status } = req.body;
    db.query(
        'INSERT INTO users (name, email, role, status) VALUES (?, ?, ?, ?)',
        [name, email, role, status],
        (err) => {
            if (err) {
                res.status(500).json({ error: err });
            } else {
                res.status(201).json({ message: 'User added successfully.' });
            }
        }
    );
};

exports.deleteUser = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM users WHERE id = ?', [id], (err) => {
        if (err) {
            res.status(500).json({ error: err });
        } else {
            res.status(200).json({ message: 'User deleted successfully.' });
        }
    });
};
