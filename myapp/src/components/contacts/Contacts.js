import React, { useEffect } from 'react';
import { listContacts } from '../../actions/userActions';
// import contacts from '../../data';
import Contact from './Contact'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../layout/Message';
import Loader from '../layout/Loader';
import { deleteContact } from '../../actions/userActions';

const Contacts = () => {
    const dispatch = useDispatch()

    const listAllContact = useSelector(state => state.listAllContact)
    const { contacts, error, loading } = listAllContact

    const contactDelete = useSelector(state => state.contactDelete)
    const { success: successDelete } = contactDelete

    useEffect(() => {
        dispatch(listContacts())
    }, [dispatch, successDelete])

    const onDeleteClick = (id) => {
        if(window.confirm('Are you sure')){
            dispatch(deleteContact(id))
        }
    }

    return(
        <>
        <h1 className="display-4 mb-2"><span className='text-danger'>Contact</span> List</h1>
            {loading ? <Loader /> : error ? <Message color='red'>{error}</Message> : contacts.map(contact => (
                <Contact key={contact._id} contact={contact} onDeleteClick={onDeleteClick} />
                ))
            }
        </>
    )
}

export default Contacts;
