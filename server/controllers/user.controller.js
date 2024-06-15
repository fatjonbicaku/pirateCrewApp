const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;

module.exports.register = (req, res) => {
  const { firstName, lastName, email, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }

  User.findOne({ email })
    .then(user => {
      if (user) {
        return res.status(400).json({ message: 'User already exists' });
      }

      const newUser = new User({ firstName, lastName, email, password });
      newUser.confirmPassword = confirmPassword;

      newUser.save()
        .then(savedUser => {
          const payload = {
            user: {
              id: savedUser._id,
              firstName: savedUser.firstName,
              lastName: savedUser.lastName
            }
          };

          jwt.sign(payload, jwtSecret, { expiresIn: '1h' }, (err, token) => {
            if (err) {
              return res.status(500).json({ message: 'JWT generation error', error: err });
            }
            res.cookie('token', token, { httpOnly: true, sameSite: 'strict', secure: false });
            return res.status(201).json({
              message: 'User registered successfully',
              user: { firstName: savedUser.firstName, lastName: savedUser.lastName },
              token: token
            });
          });
        })
        .catch(error => res.status(500).json({ message: 'Server error', error }));
    })
    .catch(error => res.status(500).json({ message: 'Server error', error }));
};

module.exports.login = (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email })
    .then(user => {
      if (!user) {
        return res.status(400).json({ msg: 'User not found.' });
      }

      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials.' });
          }

          const payload = {
            user: {
              id: user._id,
              firstName: user.firstName,
              lastName: user.lastName
            }
          };

          jwt.sign(payload, jwtSecret, { expiresIn: '1h' }, (err, token) => {
            if (err) throw err;
            res.cookie('token', token, { httpOnly: true });
            res.json({
              msg: 'Logged in successfully.',
              user: { firstName: user.firstName, lastName: user.lastName },
              token: token
            });
          });
        })
        .catch(err => res.status(500).json({ msg: 'Server error' }));
    })
    .catch(err => res.status(500).json({ msg: 'Server error' }));
};

module.exports.logout = (req, res) => {
  res.clearCookie('token');
  res.status(200).json({ message: 'Logged out successfully' });
};

module.exports.getAllUsers = (req, res) => {
  User.find({})
    .then(users => res.status(200).json(users))
    .catch(error => res.status(500).json({ message: 'Server error', error }));
};
