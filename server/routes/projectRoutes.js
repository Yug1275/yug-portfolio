import express from "express";

import {
  getProjects,
  getFeaturedProjects
} from "../controllers/projectController.js";

const router = express.Router();

router.get("/", getProjects);

router.get("/featured", getFeaturedProjects);

export default router;