import query from "../db/index";

export const findAll = async () => {
  return await query(
    "SELECT c.name AS Category, p.products_id, p.name AS Product, p.price, b.name AS Brand  FROM ((products AS p INNER JOIN categories AS c ON p.cat_id = c.cat_id) INNER JOIN brands AS b ON p.brand_id = b.brand_id) ORDER BY c.name"
  );
};

export const findName = async (categoryName) => {
  return await query(
    "SELECT c.name AS Category, p.products_id, p.name AS Product, p.price, b.name AS Brand  FROM ((products AS p INNER JOIN categories AS c ON p.cat_id = c.cat_id) INNER JOIN brands AS b ON p.brand_id = b.brand_id) WHERE c.name = ? ORDER BY c.name",
    [categoryName]
  );
};
