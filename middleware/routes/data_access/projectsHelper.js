const db = require("../../../data/dbConfig");
const mappers = require("./mappers");

module.exports = {
  addProject,
  getProject
};

async function addProject(project) {
  const addedProject = await db("Projects").insert(project);
  return addedProject[0];
}

async function getProject(id) {
  if (id) {
    const projectWithActions = await db("Projects")
      .select(
        "Projects.ProjectID",
        "Projects.ProjectName",
        "Projects.ProjectDescription",
        "Projects.ProjectIsCompleted",
        "Actions.ActionID",
        "Actions.ActionDescription",
        "Actions.ActionNotes",
        "Actions.ActionIsCompleted"
      )
      .join("Actions", { "Projects.ProjectID": "Actions.ProjectID" })
      .where({ "Projects.ProjectID": id });
    return mappers.actionsToProjects(projectWithActions);
  }
}
