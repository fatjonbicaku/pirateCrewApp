const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;
require('dotenv').config();

// App Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());


// Conecting to DB
require('./configs/mongoose.config')


// App routes
const appRoutes = require('./routes/pirate.routes');
appRoutes(app);

const userRoutes = require('./routes/user.routes');
userRoutes(app);


//Run server
app.listen(port , ()=> console.log(`Server is running on port: ${port}`))