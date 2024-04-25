express = require("express");

const {
  createTask,
  getTasks,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks.js");

const router = express.Router();

// CREATE
router.post("/", createTask);

// READ
router.get("/users/:id", getTasks);
router.get("/:id", getTask);

// UPDATE
router.put("/:id", updateTask);

// DELETE
router.delete("/:id", deleteTask);

module.exports = router;
