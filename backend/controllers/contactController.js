import asyncHandler from "express-async-handler"
import Contact from "../models/contactModel.js"

// @desc    fetch all contacts
// @routes  GET /api/contacts
// @access  Public

const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find({})
    res.json(contacts)
})

// @desc    fetch single contact
// @routes  GET /api/contacts/:id
// @access  Public
const getContactsById = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    if(contact){
        res.json(contact)
    }else{
        res.status(404)
        throw new Error('Contact Not Found')
    }
})

export {
    getContacts,
    getContactsById
}