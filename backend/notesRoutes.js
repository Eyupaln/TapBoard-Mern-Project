import express from "express";
import {
  createNote,
  deleteNote,
  getAllNotes,
  updateNote,
} from "./controllers/notesController";

const router = express.Router();

// GET  - Verileri okumak
router.get("/", getAllNotes);

// POST - Yeni veri oluşturmak
router.post("/", createNote);

// PUT - Var olan veriyi güncellemek
router.put("/:id", updateNote);

// DELETE - Veriyi silmek
router.delete("/:id", deleteNote);

export default router;
