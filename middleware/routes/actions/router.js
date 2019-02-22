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

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  console.log(
    `\nAttempting to GET action with ID [${id}] and associated contexts...`
  );
  try {
    const action = await dbHelper.getAction(id);
    if (action) {
      res.status(200).json({ success: true, data: action });
    } else {
      sendError(res, 404, `Action with ID [${id}] not found.`);
    }
  } catch (err) {
    sendError(res, 500, err.errno || err);
  } finally {
    console.log(
      `GET attempt for action ID [${id}] (and its associated contexts) finished.`
    );
  }
});

module.exports = router;
