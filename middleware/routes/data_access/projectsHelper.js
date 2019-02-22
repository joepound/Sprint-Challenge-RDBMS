const db = require("../../../data/dbConfig");

module.exports = {
  addProject
};

async function addProject(project) {
  const addedProject = await db("Projects").insert(project);
  return addedProject[0];
}
