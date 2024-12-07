const db = require('../db');

exports.getAllPermissions = (req, res) => {
    db.query('SELECT * FROM permissions', (err, results) => {
        if (err) {
            res.status(500).json({ error: err });
        } else {
            res.json(results);
        }
    });
};

exports.addPermission = (req, res) => {
    const { permission, description } = req.body;
    db.query(
        'INSERT INTO permissions (permission, description) VALUES (?, ?)',
        [permission, description],
        (err) => {
            if (err) {
                res.status(500).json({ error: err });
            } else {
                res.status(201).json({ message: 'Permission added successfully.' });
            }
        }
    );
};
