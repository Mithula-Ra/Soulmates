const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET;
const USER_PASSWORD = process.env.USER_PASSWORD;

// User log in
const logIn = async (req, res) => {
    const { password } = req.body;

    try {
        const isPasswordCorrect = await bcrypt.compare(password, USER_PASSWORD);
        if (isPasswordCorrect) {
           
            const payload = {
                userId: 'soulmates', 
            };

            const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '48h' });

            console.log('Login successful');
            return res.status(200).json({ token });
        } else {
            console.log('Incorrect password');
            return res.status(400).json({ message: 'Incorrect password' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error logging in', error: err });
    }
};

module.exports = {
    logIn
};
