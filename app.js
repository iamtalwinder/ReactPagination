import express from "express";
import "./dotenv";
import getData from "./src/routes/getData";
import dataCount from "./src/routes/dataCount";

const app = express();

app.use(express.json());

app.use("/api/user", getData);
app.use("/api/user", dataCount);

app.listen(process.env.PORT, () =>
	console.log(`Running on PORT: ${process.env.PORT}`)
);
