import express from 'express';
import dotenv from 'dotenv';
import {dbConnection} from './config/db.js';
import { router } from "./routes.js";
import path from 'path'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(express.json()); // allows us to accept JSON data in the req.body

app.use("/v1", router);

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/front/dist")));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "front", "dist", "index.html"));
	});
}

app.listen(PORT, () => {
	dbConnection();
	console.log("Server started at http://localhost:" + PORT);
});