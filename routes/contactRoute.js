import express from "express";
import dotenv from "dotenv";
import {
  getContact,
  createContact,
  updateContact,
  deleteContact,
  getContacts,
} from "../controller/contactController.js";
import validToken from "../middleware/validtokenhandler.js";


dotenv.config();
const router = express.Router();
router.use(validToken)
router.get("/", getContacts).post("/", createContact);
router
  .put("/:id", updateContact)
  .get("/:id", getContact)
  .delete("/:id", deleteContact)

export default router;
