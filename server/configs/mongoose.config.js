const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/pirateCrewApp", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
    .then(() => console.log("Connected to the database!"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));