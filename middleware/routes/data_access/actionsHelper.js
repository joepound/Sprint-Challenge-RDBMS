const db = require("../../../data/dbConfig");
const mappers = require("./mappers");

module.exports = {
  addAction,
  getAction
};

async function addAction(action) {
  const addedAction = await db("Actions").insert(action);
  return addedAction[0];
}

async function getAction(id) {
  if (id) {
    const actionWithContexts = await db("Actions")
      .select(
        "Actions.ActionID",
        "Actions.ActionDescription",
        "Projects.ProjectName",
        "Actions.ActionNotes",
        "Actions.ActionIsCompleted",
        "Contexts.ContextID",
        "Contexts.ContextDescription"
      )
      .join("Projects", { "Actions.ProjectID": "Projects.ProjectID" })
      .join("ActionDetails", { "Actions.ActionID": "ActionDetails.ActionID" })
      .join("Contexts", { "ActionDetails.ContextID": "Contexts.ContextID" })
      .where({ "Actions.ActionID": id });
    return mappers.contextsToAction(actionWithContexts);
  }
}
