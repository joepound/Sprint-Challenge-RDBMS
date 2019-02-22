module.exports = {
  actionsToProjects
};

function intToBoolean(val) {
  return Boolean(val);
}

function actionsToProjects(projectWithActions) {
  if (projectWithActions.length) {
    // initialProject is used to cache field values for Project table from projectWithActions[0]
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
