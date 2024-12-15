const getConnection = require('../config/db');

// Mengambil semua kapasitas dari tabel kapasitas
const getAllKapasitas = async () => {
  const connection = await getConnection();
  const [rows] = await connection.execute(`
    SELECT * FROM kapasitas
  `);
  await connection.end();
  return rows;
};

// Menambahkan kapasitas baru
const addKapasitas = async (jumlahMemori) => {
  const connection = await getConnection();
  const [result] = await connection.execute(`
    INSERT INTO kapasitas (jumlah_memori) VALUES (?)
  `, [jumlahMemori]);
  await connection.end();
  return result.insertId; // Mengembalikan ID kapasitas yang baru ditambahkan
};

// Mengambil kapasitas berdasarkan ID
const getKapasitasById = async (kapasitasId) => {
  const connection = await getConnection();
  const [rows] = await connection.execute(`
    SELECT * FROM kapasitas WHERE id = ?
  `, [kapasitasId]);
  await connection.end();
  return rows[0]; // Mengembalikan kapasitas berdasarkan ID
};

// Menghapus kapasitas berdasarkan ID
const deleteKapasitas = async (kapasitasId) => {
  const connection = await getConnection();
  const [result] = await connection.execute(`
    DELETE FROM kapasitas WHERE id = ?
  `, [kapasitasId]);
  await connection.end();
  return result.affectedRows; // Mengembalikan jumlah baris yang dihapus
};

module.exports = { getAllKapasitas, addKapasitas, getKapasitasById, deleteKapasitas };
