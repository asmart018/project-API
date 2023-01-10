import express from "express";
import * as category from "../controllers/category.controller";

const router = express.Router();

router.get("/:name?", async (req, res, next) => {
  try {
    let { name } = req.params;
    let data;
    if (name) {
      data = await category.findName(name);
    } else {
      data = await category.findAll();
    }

    res.json(data);
  } catch (err) {
    next(err);
  }
});

export default router;
