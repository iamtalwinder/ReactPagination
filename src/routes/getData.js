import express from "express";
import query from "../utils/MYSQLQuery";

const router = express.Router();

router.get("/getData/:startPosition/:count", async (req, res) => {
	try {
		const result = await query(
			`SELECT *FROM data LIMIT ${req.params.startPosition}, ${req.params.count}`
		);
		return res.status(200).send(result);
	} catch (err) {
		console.log(err);
		return res.status(500);
	}
});

export default router;
