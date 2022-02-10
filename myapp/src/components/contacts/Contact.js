import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';

const Contact = ({ contact }) => {
    const [showContactInfo, setShowContactInfo] = useState(false)

    const onDeleteClick = async (id) => {
        // await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        //  dispatch({type: 'DELETE_CONTACT', payload: id})
        console.log(contact._id)
        
    }

    const { _id, name, email, phone } = contact;

    return(
        <div className="card card-body mb-3">
            <h4>{name} <i onClick={() => setShowContactInfo(!showContactInfo)} className='fas fa-sort-down' style={{cursor: 'pointer'}}></i>
            <i className='fas fa-times' style={{cursor: 'pointer', float: 'right', color: 'red'}} onClick={onDeleteClick}></i>

            <Link to={`contact/edit/${_id}`}><i className='fas fa-pencil-alt' style={{cursor: 'pointer', float: 'right', color: 'black', marginRight: '1rem'}}></i></Link>

            <Link to={`contact/${_id}`}><i className='fa fa-info-circle' style={{cursor: 'pointer', float: 'right', color: 'blue', marginRight: '1rem'}}></i></Link>
            </h4>
            {showContactInfo ? (<ul className='list-group'>
                <li className="list-group-item">Email: {email}</li>
                <li className="list-group-item">Phone: {phone}</li>
            </ul>) : (null)}
        </div>
    )
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired
}

export default Contact;
