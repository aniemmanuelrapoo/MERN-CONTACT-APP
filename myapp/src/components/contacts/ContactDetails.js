import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { contactDetail } from '../../actions/userActions'
import Loader from '../layout/Loader'
import Message from '../layout/Message'

const ContactDetails = () => {
    const dispatch = useDispatch()
    let { id } = useParams();

    const contactDetails = useSelector(state => state.contactDetails)
    const { contact, error, loading } = contactDetails

    useEffect(() => {
        dispatch(contactDetail(id))
    }, [dispatch, id])

    return (
        <div>
            {loading ? <Loader /> : error ? <Message color='red'>{error}</Message> :(
                <>
                <div>
                    <h1 className='display-4'>Personal Information</h1>
                    <h2 className='display-6'>Name: {contact.name}</h2>
                    <p className='lead'>Email: {contact.email}</p>
                    <p className="text-secoundary">Phone: {contact.phone}</p>
                    <p className="text-secoundary">User Name: {contact.username}</p>
                </div>
                {contact.company.map(cam => 
                <div key={cam._id}>
                    <h1 className='display-4'>Company</h1>
                    <p className="text-secoundary">Company Name: {cam.name}</p>
                    <p className="text-secoundary">Catch Phrase: {cam.catchPhrase}</p>
                    <p className="text-secoundary">Website: {contact.website}</p>
                </div>
                )}
                </>
            )}
        </div>
    )
}

export default ContactDetails