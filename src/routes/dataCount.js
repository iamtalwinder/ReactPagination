import express from "express";
import query from "../utils/MYSQLQuery";

const router = express.Router();

router.get("/dataCount", async (req, res) => {
	try {
		const result = await query(`SELECT COUNT(number) AS count FROM data`);
		return res.status(200).send(result);
	} catch (err) {
		console.log(err);
		return res.status(500).send("Internal server error");
	}
});

export default router;
