import query from "../db/index";

export const findAll = async () => {
  return await query(
    "SELECT p.products_id, p.name AS Product, p.price, c.name AS Category, b.name AS Brand FROM ((products AS p INNER JOIN categories AS c ON p.cat_id = c.cat_id) INNER JOIN brands AS b ON p.brand_id = b.brand_id) ORDER BY p.products_id"
  );
};

export const findId = async (productId) => {
  return await query(
    "SELECT p.products_id, p.name AS Product, p.price, c.name AS Category, b.name AS Brand FROM ((products AS p INNER JOIN categories AS c ON p.cat_id = c.cat_id) INNER JOIN brands AS b ON p.brand_id = b.brand_id) WHERE p.products_id = ? ORDER BY p.products_id",
    [productId]
  );
};

export const findName = async (brandName) => {
  return await query(
    "SELECT b.name AS Brand, p.products_id, p.name AS Product, p.price, c.name AS Category  FROM ((products AS p INNER JOIN categories AS c ON p.cat_id = c.cat_id) INNER JOIN brands AS b ON p.brand_id = b.brand_id) WHERE b.name = ? ORDER BY b.name",
    [brandName]
  );
};

export const addOne = async (product) => {
  return await query("INSERT INTO products SET ?", [product]);
};

export const updateOne = async (productId, product) => {
  return await query("UPDATE products SET ? WHERE products_id = ?", [
    product,
    productId,
  ]);
};

export const removeOne = async (productId) => {
  return await query("DELETE FROM products WHERE products_id = ?", [productId]);
};
