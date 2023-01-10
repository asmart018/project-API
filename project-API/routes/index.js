import express from "express";
import productRouteRouter from "./products.route";
import brandRouteRouter from "./brands.route";
import categoryRouteRouter from "./category.route";

const router = express.Router();

router.use("/products", productRouteRouter);

router.use("/brands", brandRouteRouter);

router.use("/categories", categoryRouteRouter);

router.use((req, res, next) => {
  next({
    status: 404,
    message: "Not Found",
  });
});

export default router;
