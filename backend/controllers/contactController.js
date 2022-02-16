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

// @desc    Register a new contact
// @routes  POST /api/contacts
// @access  Public
const registerContact = asyncHandler(async (req, res) => {
    const { name, email, phone, username, website, company } = req.body

    const contactExists = await Contact.findOne({ email })

    if(contactExists){
        res.status(400)
        throw new Error('Contact already exists')
    }

    const contact = await Contact.create({
        name : name,
        email,
        phone,
        username,
        website,
        company: { name: company.name, catchPhrase: company.catchPhrase }
    })

    if(contact){
        res.status(201).json({
            _id: contact._id,
            name: contact.name,
            email: contact.email,
            phone: contact.phone,
            website: contact.website,
            username: contact.username,
            company: { name: company.name, catchPhrase: company.catchPhrase }
        })
    }else{
        res.status(400)
        throw new Error('Invalid Contact data')
    }
})

export {
    getContacts,
    getContactsById,
    registerContact
}