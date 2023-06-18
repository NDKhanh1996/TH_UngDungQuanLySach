import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import bookRoutes from "./src/router/book.router";

const PORT = 8080;
const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/views');

const DB_URL = 'mongodb://codegym:123456@127.0.0.1:27017/TH_Book';

mongoose.connect(DB_URL).then(() => console.log('DB Connected!')).catch(error => console.log('DB connection error:', error.message));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bookRoutes);


app.listen(PORT, () => {
    console.log("App running on port: " + PORT)
})
