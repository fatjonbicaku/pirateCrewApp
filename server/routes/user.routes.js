const userController = require('../controllers/user.controller');
const { authenticate } = require('../configs/jwt.config');

module.exports = app => {
    app.post('/api/register', userController.register);
    app.post('/api/login', userController.login);
    app.post('/api/logout', authenticate, userController.logout);
    app.get('/api/users', authenticate, userController.getAllUsers);
};
