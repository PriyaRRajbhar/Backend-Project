const express = require("express");
const Task = require("../models/Task");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// GET /api/tasks - Get all tasks for the authenticated user
router.get("/", authMiddleware, async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// POST /api/tasks - Create a new task for the authenticated user
router.post("/", authMiddleware, async (req, res) => {
  try {
    const task = new Task({
      title: req.body.title,
      user: req.user.id
    });

    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;


