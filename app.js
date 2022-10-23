const express = require("express");
const contactsRoutes = require("./main-routes/contacts-routes");

const app = express();

app.use("/contacts", contactsRoutes);

app.listen(5005);