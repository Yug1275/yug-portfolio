import express from "express";
import Project from "../models/Project.js";

const router = express.Router();

router.post("/", async (req, res) => {

  const message = req.body.message.toLowerCase();

  let reply = "Sorry, I didn't understand that.";

  if (message.includes("who")) {

    reply =
      "Yug Patel is a Computer Science student at PDEU and a MERN stack developer.";

  }

  else if (message.includes("skills")) {

    reply =
      "Yug's skills include React, Node.js, MongoDB, JavaScript, HTML, CSS and AI tools.";

  }

  else if (message.includes("project")) {

    try {

      const projects = await Project.find();

      if (projects.length === 0) {

        reply = "Yug has not added projects yet.";

      }

      else {

        reply = "Here are some of Yug's projects:\n\n";

        projects.forEach((project) => {

          reply += `• ${project.title}\n`;

        });

      }

    }

    catch (error) {

      reply = "Error retrieving projects.";

    }

  }

  else if (message.includes("education")) {

    reply =
      "Yug is pursuing BTech in Computer Science Engineering at PDEU.";

  }

  else if (message.includes("contact")) {

    reply =
      "You can contact Yug through the contact page or LinkedIn.";

  }

  else if (message.includes("resume")) {

    reply =
      "You can download Yug's resume from the Resume section.";

  }

  res.json({ reply });

});

export default router;