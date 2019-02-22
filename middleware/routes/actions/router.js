const express = require("express");
const router = express.Router();

const dbHelper = require("../data_access/actionsHelper");
const sendError = require("../../errors/errorHandler");

router.post("/", async (req, res) => {
  if (req.body.ActionID) {
    return sendError(res, 403, "Editing ID's is not allowed!");
  }

  console.log("\nAttempting to POST new action...");

  const newAction = req.body;

  console.log("Checking if all required fields were supplied...");
  if (!newAction.ProjectID) {
    sendError(res, 400, "Associated project ID not supplied.");
    console.log("Action POST attempt finished.");
  } else if (!newAction.ActionDescription) {
    sendError(res, 400, "Action description not supplied.");
    console.log("Action POST attempt finished.");
  } else if (!newAction.ActionNotes) {
    sendError(res, 400, "Action notes not supplied.");
    console.log("Action POST attempt finished.");
  } else {
    console.log("Proceeding to add the new action...");
    try {
      const action = await dbHelper.addAction(newAction);
      res.status(201).json({ success: true, data: action });
    } catch (err) {
      sendError(res, 500, err.errno || err);
    } finally {
      console.log("Action POST attempt finished.");
    }
  }
});

module.exports = router;
