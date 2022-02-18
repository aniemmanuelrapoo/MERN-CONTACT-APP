import express from "express";
import { getContacts, getContactsById, registerContact, deleteContact } from "../controllers/contactController.js";
const router = express.Router()

router.route('/').get(getContacts).post(registerContact)

router.route('/:id').get(getContactsById).delete(deleteContact)

export default router