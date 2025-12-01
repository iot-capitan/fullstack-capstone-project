    require('dotenv').config();
    const express = require('express');
    const cors = require('cors');
    const pinoLogger = require('./logger');

    const connectToDatabase = require('./models/db');
    const {loadData} = require("./util/import-mongo/index");


    const app = express();
…        res.send("Inside the server")
    })

    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });