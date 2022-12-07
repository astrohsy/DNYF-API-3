const YAML = require('yamljs');
const swaggerUi = require('swagger-ui-express');

const express = require("express");
const contactsRoutes = require("./main-routes/contacts-routes");
const swaggerDoc = YAML.load('./swagger.yaml');

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use("/contacts", contactsRoutes);

app.use((error, req, res, next) => {
    res.status(error.statusCode || 500).json({message: error.message || "An unknown error has occured"});
})

app.listen(5005);