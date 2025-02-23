const express = require('express');
const cors = require('cors');
require('./db/config');
const User = require('./db/User');
const app = express();

app.use(express.json());
app.use(cors(
    {
        origin: "https://food-resevation-wziq.vercel.app",
        methods: "GET,post",
        credentials: true

    }
));

app.post("/risebation", async (req, res) => {
    let user = new User(req.body);
    let result = await user.save();
res.send(result);

})

app.listen(5000)
