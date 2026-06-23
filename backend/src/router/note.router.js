import express from "express";
import { createNote, searchNote, getAllNotes, getNote, deleteNote } from "../controller/note.controller.js";

const router = express.Router();

router.post("/create", createNote);
router.post("/search", searchNote);
router.get("/notes", getAllNotes);
router.get("/note/:id", getNote);
router.delete("/note/:id", deleteNote);

export default router;