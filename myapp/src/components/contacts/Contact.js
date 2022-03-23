import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Contact = ({ contact, onDeleteClick }) => {
    const [showContactInfo, setShowContactInfo] = useState(false)

    const { _id, name, email, phone } = contact;

    return(
        <div className="card card-body mb-3">
            <h4>{name} <i onClick={() => setShowContactInfo(!showContactInfo)} className='fas fa-sort-down' style={{cursor: 'pointer'}}></i>
            <i className='fas fa-times' style={{cursor: 'pointer', float: 'right', color: 'red'}} onClick={() => onDeleteClick(contact._id)}></i>

            <Link to={`/contact/edit/${_id}`}><i className='fas fa-pencil-alt' style={{cursor: 'pointer', float: 'right', color: 'black', marginRight: '1rem'}}></i></Link>

            <Link to={`/contact/${_id}`}><i className='fa fa-info-circle' style={{cursor: 'pointer', float: 'right', color: 'blue', marginRight: '1rem'}}></i></Link>
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
