const db = require("../db/queries");

async function getRows(req, res) {
  const rows = await db.getRows();
  console.log(rows);
  return;
}

module.exports = {
  getRows,
};
