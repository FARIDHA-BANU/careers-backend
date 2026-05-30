const express = require("express");
const router = express.Router();

const Career = require("../models/career");

// GET ALL JOBS
router.get("/", async (req, res) => {
  try {
    const jobs = await Career.find();

    res.status(200).json({
      success: true,
      count: jobs.length,
      data: jobs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// GET SINGLE JOB
router.get("/:id", async (req, res) => {
  try {
    const job = await Career.findById(req.params.id);

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    res.status(200).json({
      success: true,
      data: job,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// CREATE JOB
router.post("/", async (req, res) => {
  try {
    const job = await Career.create(req.body);

    res.status(201).json({
      success: true,
      data: job,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// UPDATE JOB
router.put("/:id", async (req, res) => {
  try {
    const updatedJob = await Career.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      success: true,
      data: updatedJob,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// DELETE JOB
router.delete("/:id", async (req, res) => {
  try {
    await Career.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Job deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;