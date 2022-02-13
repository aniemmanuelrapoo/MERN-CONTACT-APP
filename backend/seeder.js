import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import contacts from './data/contacts.js'
import Contact from './models/contactModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
    try {
        await Contact.deleteMany()

        await Contact.insertMany(contacts)
    } catch (error) {
        
    }
}