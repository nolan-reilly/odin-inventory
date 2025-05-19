const pool = require("./pool");

async function getRows() {
  const { rows } = await pool.query("SELECT * FROM test");
  return rows;
}

module.exports = {
  getRows,
};
