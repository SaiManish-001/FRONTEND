const db = require('../db');

exports.getAllRoles = (req, res) => {
    db.query('SELECT * FROM roles', (err, results) => {
        if (err) {
            res.status(500).json({ error: err });
        } else {
            res.json(results);
        }
    });
};

exports.addRole = (req, res) => {
    const { name } = req.body;
    db.query('INSERT INTO roles (name) VALUES (?)', [name], (err) => {
        if (err) {
            res.status(500).json({ error: err });
        } else {
            res.status(201).json({ message: 'Role added successfully.' });
        }
    });
};

exports.deleteRole = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM roles WHERE id = ?', [id], (err) => {
        if (err) {
            res.status(500).json({ error: err });
        } else {
            res.status(200).json({ message: 'Role deleted successfully.' });
        }
    });
};
