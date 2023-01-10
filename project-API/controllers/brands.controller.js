import query from "../db/index";

export const findAll = async () => {
  return await query(
    "SELECT b.name AS Brand, p.products_id, p.name AS Product, p.price, c.name AS Category  FROM ((products AS p INNER JOIN categories AS c ON p.cat_id = c.cat_id) INNER JOIN brands AS b ON p.brand_id = b.brand_id) ORDER BY b.name"
  );
};

export const findName = async (brandName) => {
  return await query(
    "SELECT b.name AS Brand, p.products_id, p.name AS Product, p.price, c.name AS Category  FROM ((products AS p INNER JOIN categories AS c ON p.cat_id = c.cat_id) INNER JOIN brands AS b ON p.brand_id = b.brand_id) WHERE b.name = ? ORDER BY b.name",
    [brandName]
  );
};
