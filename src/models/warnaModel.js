const getConnection = require('../config/db');

// Mengambil semua data dari tabel warna
const getAllColors = async () => {
  const connection = await getConnection();
  const [rows] = await connection.execute(`
    SELECT * FROM warna
  `);
  await connection.end();
  return rows;
};

// Menambahkan warna baru
const addColor = async (colorName) => {
  const connection = await getConnection();
  const [result] = await connection.execute(`
    INSERT INTO warna (nama) VALUES (?)
  `, [colorName]);
  await connection.end();
  return result.insertId; // Mengembalikan ID warna yang baru ditambahkan
};

module.exports = { getAllColors, addColor };
