const express = require("express");
const Task = require("../models/task");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// get tasks
router.get("/", authMiddleware, async (req, res) => {
  const tasks = await Task.find({ user: req.user.id });
  res.json(tasks);
});

// add task
router.post("/", authMiddleware, async (req, res) => {
  const task = await Task.create({
    title: req.body.title,
    user: req.user.id
  });
  res.json(task);
});

module.exports = router;
