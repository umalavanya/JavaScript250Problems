const express = require("express") ;
const mongoose = require("mongoose") ;
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config() ;

mongoose.connect(process.env.MONGODB_LINK)
        .then(() => {
            console.log('MongoDB connected!!!');
        })
        .catch((error) => {
            console.log('MongoDB connection error happened!!', error);
        })



const app = express();
app.use(cors());
app.use(express.json()) ;







const PORT = process.env.PORT || 4320 ;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`) ;
});
