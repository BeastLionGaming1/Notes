import mongoose from "mongoose";
import Note from "../models/Note.js";
import { ENV } from "../lib/env.js";

export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    console.log(title, content);
    
    if (
      typeof title !== "string" ||
      typeof content !== "string" ||
      !title.trim() ||
      !content.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "All Fields are required",
        status_code: 400,
      });
    }

    const note = await Note.create({
      title,
      content
    });

    res.status(201).json({
      success: true,
      message: "Note Created Successfully",
      status_code: 201,
      note
    });
  } catch (err) {
    console.log("Error Creating Note:", err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      status_code: 500,
      err: ENV.NODE_ENV === "development"
  ? err.message
  : undefined
    });
  }
}

export const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Note ID",
        status_code: 400,
      });
    }
    
    const note = await Note.findByIdAndDelete(id);

    if (!note) {
      return res.status(404).json({
        success: false,
        message: "Note not Found",
        status_code: 404,
      });
    }
    
    res.status(200).json({
      success: true,
      message: "Note Deleted Successfully",
      status_code: 200,
      note
    });
  } catch (err) {
    console.log("Error Deleting Note:", err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      status_code: 500,
      err: ENV.NODE_ENV === "development"
  ? err.message
  : undefined
    });
  }
}

export const getNote = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Note ID",
        status_code: 400,
      });
    }
    
    const note = await Note.findById(id);
    
    if (!note) {
      return res.status(404).json({
        success: false,
        message: "Note not Found",
        status_code: 404,
      });
    }
    
    res.status(200).json({
      success: true,
      message: "Note Found",
      status_code: 200,
      note
    });
  } catch (err) {
    console.log("Error In Getting Note:", err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      status_code: 500,
      err: ENV.NODE_ENV === "development"
  ? err.message
  : undefined
    });
  }
}

export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      message: "All Notes Fetched",
      status_code: 200,
      notes,
    });
  } catch (err) {
    console.log("Error Getting All Notes:", err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      status_code: 500,
      err: ENV.NODE_ENV === "development"
  ? err.message
  : undefined
    });
  }
}