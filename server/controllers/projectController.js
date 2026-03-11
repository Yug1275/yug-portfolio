import Project from "../models/Project.js";

/* GET ALL PROJECTS */

export const getProjects = async (req, res) => {

  try {

    const projects = await Project.find();

    res.json(projects);

  } catch (error) {

    res.status(500).json({ message: error.message });

  }

};


/* GET FEATURED PROJECTS */

export const getFeaturedProjects = async (req, res) => {

  try {

    const projects = await Project.find({ featured: true });

    res.json(projects);

  } catch (error) {

    res.status(500).json({ message: error.message });

  }

};