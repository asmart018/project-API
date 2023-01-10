import express from "express";
import * as products from "../controllers/products.controller";
import { join } from "path";

const router = express.Router();

router.get("/insert", async (req, res, next) => {
  try {
    res.sendFile(join(__dirname, "../public/productInsert.html"));
  } catch (err) {
    next(err);
  }
});

router.post("/insert", async (req, res, next) => {
  try {
    await products.addOne(req.body);
    res.sendFile(join(__dirname, "../public/productInsert.html"));
  } catch (err) {
    next(err);
  }
});

router.get("/:id?", async (req, res, next) => {
  try {
    let { id } = req.params;
    let data;
    if (id) {
      data = await products.findId(id);
    } else {
      data = await products.findAll();
    }

    res.json(data);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    let { id } = req.params;
    let productDTO = req.body;
    let data = await products.updateOne(id, productDTO);
    res.json(data);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    let { id } = req.params;
    let data = await products.removeOne(id);
    res.json(data);
  } catch (err) {
    next(err);
  }
});

export default router;
