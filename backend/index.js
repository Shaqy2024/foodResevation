const express = require('express');
const cors = require('cors');
require('./db/config');
const User = require('./db/User');
const app = express();

app.use(express.json());
app.use(cors(
    {
        origin: "https://food-resevation-8a7n-git-main-sakibs-projects-b9aac051.vercel.app",
        methods: "GET,POST",
        credentials: true

    }
));

app.post("/risebation", async (req, res) => {
    let user = new User(req.body);
    let result = await user.save();
res.send(result);

})

app.listen(5000)
