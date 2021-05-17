const express = require("express");
const connectDB = require("./db/connection");

console.log("starting...");
//creating the server
const app = express();

const cors = require("cors");

//enable the expess.json
app.use(express.json({ extended: true }));

//enable cors
app.use(cors());

//port the APP
const PORT = process.env.PORT || 4000;


//import routes
app.use('/api/movie', require('./routes/movie'));
app.use('/api/clasification', require('./routes/clasification'));
app.use('/api', require('./routes/public'));

connectDB().then(() => app.listen(PORT, () => {
    console.log("The server is working in " + PORT);
}));




