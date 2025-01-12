import express from "express";
import bodyParser from 'body-parser';
const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
import sequelize from "./src/_database/db";
import guestRoutes from "./src/api/guest/guest.routes";
const PORT = 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
	res.send("Hello 99Tech!");
});
app.use("/api", guestRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

sequelize
	.sync()
	.then(() => {
		console.log("Database connected successfully");
		app.listen(PORT, () =>
			console.log(`Server running on http://localhost:${PORT}`)
		);
	})
	.catch((err) => {
		console.error("Database connection failed:", err);
	});
