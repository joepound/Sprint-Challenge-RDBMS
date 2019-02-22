const db = require("../../../data/dbConfig");

module.exports = {
  addAction
};

async function addAction(action) {
  const addedAction = await db("Actions").insert(action);
  return addedAction[0];
}
