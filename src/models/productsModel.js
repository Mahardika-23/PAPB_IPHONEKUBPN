import { getConnection } from "../../config/database.js";

export const getAllProducts = async () => {
  const connection = await getConnection();
  const [rows] = await connection.execute(`
    SELECT 
      products.id,
      products.name,
      products.size,
      products.weight,
      products.displayType,
      products.resolution,
      products.brightness,
      products.chip,
      products.price,
      products.createdAt,
      products.updatedAt,
      GROUP_CONCAT(DISTINCT kapasitas.jumlah_memori) AS kapasitas,
      GROUP_CONCAT(DISTINCT warna.nama) AS warna,
      GROUP_CONCAT(DISTINCT aksesibilitas.nama) AS aksesibilitas
    FROM products
    LEFT JOIN product_kapasitas ON products.id = product_kapasitas.product_id
    LEFT JOIN kapasitas ON product_kapasitas.kapasitas_id = kapasitas.id
    LEFT JOIN product_warna ON products.id = product_warna.product_id
    LEFT JOIN warna ON product_warna.warna_id = warna.id
    LEFT JOIN product_aksesibilitas ON products.id = product_aksesibilitas.product_id
    LEFT JOIN aksesibilitas ON product_aksesibilitas.aksesibilitas_id = aksesibilitas.id
    GROUP BY products.id
  `);
  await connection.end();
  return rows;
};
