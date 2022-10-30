const express = require("express");
const contactsRoutes = require("./main-routes/contacts-routes");

const app = express();

app.use(express.json());

app.use("/contacts", contactsRoutes);

app.use((error, req, res, next) => {
    res.status(error.code || 400);
    res.json({error: error.message || "An unknown error has occured"});
})

app.listen(80);