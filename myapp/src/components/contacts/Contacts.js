import React, { useEffect } from 'react';
import { listUsers } from '../../actions/userActions';
// import contacts from '../../data';
import Contact from './Contact'
import { useDispatch, useSelector } from 'react-redux'

const Contacts = () => {
    const dispatch = useDispatch()

    const listAllUser = useSelector(state => state.listAllUser)
    const { contacts, error, loading } = listAllUser

    useEffect(() => {
        dispatch(listUsers())
    }, [dispatch])
    console.log(contacts)
    return(
        <>
        <h1 className="display-4 mb-2"><span className='text-danger'>Contact</span> List</h1>
            {loading ? 'loading' : contacts.map(contact => (
                <Contact key={contact.id} contact={contact} />
                ))
            }
        </>
    )
}

export default Contacts;
