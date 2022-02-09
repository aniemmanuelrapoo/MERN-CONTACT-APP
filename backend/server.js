const express = require('express')
const contacts = require('./data/contacts')

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

app.listen(5000, console.log('Server running on port 5000'))