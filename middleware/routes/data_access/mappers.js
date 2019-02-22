module.exports = {
  actionsToProject,
  contextsToAction
};

function intToBoolean(val) {
  return Boolean(val);
}

function actionsToProject(projectWithActions) {
  if (projectWithActions.length) {
    // initialProject is used to cache field values for Projects table from projectWithActions[0]
    const initialProject = projectWithActions[0],
      project = {
        id: initialProject.ProjectID,
        name: initialProject.ProjectName,
        description: initialProject.ProjectDescription,
        completed: intToBoolean(initialProject.ProjectIsCompleted),
        actions: projectWithActions.map(row => ({
          id: row.ActionID,
          description: row.ActionDescription,
          notes: row.ActionNotes,
          completed: intToBoolean(row.ActionIsCompleted)
        }))
      };
    return project;
  }
  return null;
}

function contextsToAction(actionWithContexts) {
  if (actionWithContexts.length) {
    // initialAction is used to cache field values for Actions table from actionWithContexts[0]
    const initialAction = actionWithContexts[0],
      action = {
        id: initialAction.ActionID,
        description: initialAction.ActionDescription,
        project: initialAction.ProjectName,
        notes: initialAction.ActionNotes,
        completed: intToBoolean(initialAction.ActionIsCompleted),
        contexts: actionWithContexts.map(row => ({
          id: row.ContextID,
          description: row.ContextDescription
        }))
      };
    return action;
  }
  return null;
}
