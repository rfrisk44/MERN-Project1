const express = require("express");
const bodyParser= require("body-parser")
const cors = require('cors')
const app = express();
require('dotenv').config();
const port = process.env.PORT;
const crypto = require("crypto")
const GridFsStorage = require("multer-gridfs-storage")
const Grid = require("gridfs-stream")
const methodOverride = require("method-override")
    
require("./config/config");
    
app.use(express.json(), express.urlencoded({ extended: true }), cors());
    
require("./routes/routes")(app);
    
app.listen(port, () => console.log(`Listening on port: ${port}`) );
