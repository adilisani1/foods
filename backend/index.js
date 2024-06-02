const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dishRouter = require('./routes/dishes');

const port = process.env.PORT || 5000;
const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use("/api", dishRouter)


mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("DBConnection Successfull"))
    .catch((err) => console.log("DB Connection Failed: ", err.message))

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`)
});