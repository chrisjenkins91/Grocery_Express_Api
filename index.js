const express = require('express');
const cors = require('cors');



const app = express();
const port = 4001;
// Import router later
const router = require('./app/routes/router');


//? Allow us to take POST request if data is being sent to this API
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors());


app.listen(port, () => {
    console.log(`App is running on ${port}`);
});

app.use('/api', router);

