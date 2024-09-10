// Nicolaas Johan Jansen van Rensburg - u22590732

import express from "express";	

const app = express();

app.use(express.static("frontend/public"));

app.listen(3000, () => {
    console.log("Listening on port 3000");
});