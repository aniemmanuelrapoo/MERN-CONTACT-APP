import express from "express";
import { getContacts, getContactsById, registerContact } from "../controllers/contactController.js";
const router = express.Router()

router.route('/').get(getContacts).post(registerContact)

router.route('/:id').get(getContactsById)

export default router