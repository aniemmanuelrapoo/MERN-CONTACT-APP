import express from "express";
import { getContacts, getContactsById } from "../controllers/contactController.js";
const router = express.Router()

router.route('/').get(getContacts)

router.route('/:id').get(getContactsById)

export default router