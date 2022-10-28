const express = require("express");
const contactsRoutes = require("./main-routes/contacts-routes");

const app = express();

app.use("/contacts", contactsRoutes);

app.use((error, req, res, next) => {
    res.status(error.code || 500);
    res.json({message: error.message || "An unknown error has occured"});
})

app.listen(5005);