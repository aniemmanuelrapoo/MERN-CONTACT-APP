import React from 'react';
import TextInputGroup from '../layout/TextInputGroup';
import { withRouter } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';

const EditContact = ({history}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [errors, setErrors] = useState({ nameErr: '', emailErr: '', phoneErr: '' })

    // async componentDidMount() {
    //     const { id } = this.props.match.params;
    //     const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)

    //     const contact = res.data;

    //     this.setState({
    //         name: contact.name,
    //         email: contact.email,
    //         phone: contact.phone,
    //     })
    // }

    const onSubmit = (e) => {
        e.preventDefault();

        //Check For Errors
        if(name === ''){
            setErrors({...errors, nameErr: 'Name is required'});
            return;
        }

        if(email === ''){
            setErrors({...errors, emailErr: 'Email is required'});
            return;
        }

        if(phone === ''){
            setErrors({...errors, phoneErr: 'Phone is required'});
            return;
        }

        // const newContact = {
        //     name,
        //     email,
        //     phone
        // }
        // const res = await axios.post('https://jsonplaceholder.typicode.com/users', newContact)
        // dispatch({ type: 'ADD_CONTACT', payload: res.data })

        //clear State
        
        setName("")
        setEmail("")
        setPhone("")
        setErrors({ nameErr: '', emailErr: '', phoneErr: '' })
        
        history.push('/');
    }


    return(
        <div className='card mb-3'>
        <div className="card-header">Edit Contact</div>
        <div className="card-body">
            <form onSubmit={onSubmit}>
                <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter Name..."
                    value={name}
                    onChange={e => setName(e.target.value)}
                    error={name === '' && errors.nameErr}
                />

                <TextInputGroup
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="Enter Email..."
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    error={email === '' && errors.emailErr}
                />

                <TextInputGroup
                    label="Phone"
                    name="phone"
                    placeholder="Enter Phone..."
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    error={phone === '' && errors.phoneErr}
                />

                <input type="submit" value="Edit Contact" className='btn btn-block btn-light' />
            </form>
        </div>
        </div>
    )
}

export default withRouter(EditContact);
