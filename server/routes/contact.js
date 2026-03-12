import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();


router.post("/", async (req, res) => {

  try {

    const newMessage = new Contact({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message
    });

    await newMessage.save();

    res.status(200).json({ success: true });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }

});

export default router;