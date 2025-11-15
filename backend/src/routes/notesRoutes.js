import express from "express";
import {
  createNote,
  deleteNote,
  getAllNotes,
  getNoteByID,
  updateNote,
} from "../controllers/notesController.js";

const router = express.Router();

// GET  - Verileri okumak
router.get("/", getAllNotes);

router.get("/:id", getNoteByID);
// POST - Yeni veri oluşturmak
router.post("/", createNote);

// PUT - Var olan veriyi güncellemek
router.put("/:id", updateNote);

// DELETE - Veriyi silmek
router.delete("/:id", deleteNote);

export default router;
