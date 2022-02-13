import mongoose from "mongoose"

const companySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    catchPhrase: {
        type: String,
        required: true
    },
})

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    phone: {
        type: String,
        required: true
    },

    username: {
        type: String,
        required: true
    },

    website: {
        type: String,
        required: true
    },
    company: [companySchema]
}, {
    timestamps: true
})

const Contact = mongoose.model('Contact', contactSchema)
export default Contact