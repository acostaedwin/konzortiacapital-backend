const mongoose = require('mongoose');


const url = 'mongodb+srv://test_user:Bogota2021*@cluster0.jiue8.mongodb.net/konzortiacapital'; //process.env.MONGO_URI

const connectDB = async () => {
    try {
        // mongodb connection string
        const con = await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })

        console.log(`MongoDB connected : ${con.connection.host}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB