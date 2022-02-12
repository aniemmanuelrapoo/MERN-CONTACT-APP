import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import contacts from './data/contacts.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
    res.send('API is running...')
})

app.get('/api/contacts', (req, res) => {
    res.json(contacts)
})

app.get('/api/contacts/:id', (req, res) => {
    const contact = contacts.find((con) => con._id === req.params.id)

    res.json(contact)
})

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`))