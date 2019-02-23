const express = require("express");
const router = express.Router();

const dbHelper = require("../data_access/projectsHelper");
const sendError = require("../../errors/errorHandler");

router.post("/", async (req, res) => {
  if (req.body.ProjectID) {
    return sendError(res, 403, "Editing ID's is not allowed!");
  }

  console.log("\nAttempting to POST new project...");

  const newProject = req.body;

  console.log("Checking if all required fields were supplied...");
  if (!newProject.ProjectName) {
    sendError(res, 400, "Project name not supplied.");
    console.log("Project POST attempt finished.");
  } else if (!newProject.ProjectDescription) {
    sendError(res, 400, "Project description not supplied.");
    console.log("Project POST attempt finished.");
  } else {
    console.log("Proceeding to add the new project...");
    try {
      const project = await dbHelper.addProject(newProject);
      res.status(201).json({ success: true, data: project });
    } catch (err) {
      // Code 19 here means that the UNIQUE constraint has been violated (ProjectName)
      if (err.errno === 19) {
        sendError(res, 400, "Project with supplied name already exists.");
      } else {
        sendError(res, 500, err.errno || err);
      }
    } finally {
      console.log("Project POST attempt finished.");
    }
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  console.log(
    `\nAttempting to GET project with ID [${id}] and associated actions...`
  );
  try {
    const project = await dbHelper.getProjects(id);
    if (project) {
      res.status(200).json({ success: true, data: project });
    } else {  
      sendError(res, 404, `Project with ID [${id}] not found.`);
    }
  } catch (err) {
    sendError(res, 500, err.errno || err);
  } finally {
    console.log(
      `GET attempt for project ID [${id}] (and its associated actions) finished.`
    );
  }
});

router.get("/", async (req, res) => {
  console.log("\nAttempting to GET all projects...");
  try {
    const projects = await dbHelper.getProjects();
    res.status(200).json({ success: true, data: projects });
  } catch (err) {
    err => sendError(res, 500, err.errno || err);
  } finally {
    console.log("GET all projects attempt finished.");
  }
});

module.exports = router;
