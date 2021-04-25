const express = require("express");
const app = express();
const mongoose = require("mongoose")
require('dotenv/config');
app.use(express.json({ limit: '50mb' }))
const postsRoute = require('./BMI_cal_apis/posts');
app.use('/bmi', postsRoute);

//-------------------------------------DB connection-----------------------------------------//
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,

},
    () => console.log('connected to DB!')

);
//----------------------------Listening on a particular port---------------------------------//
const port = process.env.PORT || 4000;
app.listen(port);
console.log('connected to ' + port);
