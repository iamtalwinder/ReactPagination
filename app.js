import express from "express";
import "./dotenv";

const app = express();

app.use(express.json);

app.listen(process.env.PORT, () =>
	console.log(`Running on PORT: ${process.env.PORT}`)
);
