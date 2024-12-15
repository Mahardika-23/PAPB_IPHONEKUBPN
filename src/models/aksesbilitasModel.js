const getConnection = require('../config/database.js');

// Mengambil semua data dari tabel aksesibilitas
const getAllAksesibilitas = async () => {
  const connection = await getConnection();
  const [rows] = await connection.execute(`
    SELECT * FROM aksesibilitas
  `);
  await connection.end();
  return rows;
};

// Menambahkan aksesibilitas baru
const addAksesibilitas = async (aksesibilitasName) => {
  const connection = await getConnection();
  const [result] = await connection.execute(`
    INSERT INTO aksesibilitas (nama) VALUES (?)
  `, [aksesibilitasName]);
  await connection.end();
  return result.insertId; // Mengembalikan ID aksesibilitas yang baru ditambahkan
};

module.exports = { getAllAksesibilitas, addAksesibilitas };
