import express from "express";
import * as brands from "../controllers/brands.controller";

const router = express.Router();

router.get("/:name?", async (req, res, next) => {
  try {
    let { name } = req.params;
    let data;
    if (name) {
      data = await brands.findName(name);
    } else {
      data = await brands.findAll();
    }

    res.json(data);
  } catch (err) {
    next(err);
  }
});

export default router;
