import React from 'react';
import TextInputGroup from '../layout/TextInputGroup';
import { withRouter } from 'react-router-dom';
// import axios from 'axios';
import { useState } from 'react/cjs/react.development';

const AddContact = ({ history }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [username, setUsername] = useState('')
    const [website, setWebsite] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [catchPhrase, setCatchPhrase] = useState('')
    const [errors, setErrors] = useState({ nameErr: '', emailErr: '', phoneErr: '', usernameErr: '', websiteErr: '', companyNameErr: '', catchPhraseErr: '' })

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

        if(username === ''){
            setErrors({...errors, usernameErr: 'Username is required'});
            return;
        }

        if(website === ''){
            setErrors({...errors, websiteErr: 'Website is required'});
            return;
        }

        if(companyName === ''){
            setErrors({...errors, companyNameErr: 'CompanyName is required'});
            return;
        }

        if(catchPhrase === ''){
            setErrors({...errors, catchPhraseErr: 'Company Catch Phrase is required'});
            return;
        }

        // const newContact = {
        //     name,
        //     email,
        //     phone
        // }
        // const res = await axios.post('https://jsonplaceholder.typicode.com/users', newContact)
        // dispatch({ type: 'ADD_CONTACT', payload: res.data })
        //https://jsonplaceholder.typicode.com/users

        //clear State
        
        setName("")
        setEmail("")
        setPhone("")
        setErrors({ nameErr: '', emailErr: '', phoneErr: '' })
        
        history.push('/');
    }

    // onChange = (e) => this.setState({ [e.target.name]: e.target.value })

    return(
        <div className='card mb-3'>
        <div className="card-header">Add Contact</div>
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

                <TextInputGroup
                    label="Username"
                    name="username"
                    placeholder="Enter Username..."
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    error={username === '' && errors.usernameErr}
                />

                <TextInputGroup
                    label="Website"
                    name="website"
                    placeholder="Enter Website..."
                    value={website}
                    onChange={e => setWebsite(e.target.value)}
                    error={website === '' && errors.websiteErr}
                />

                <TextInputGroup
                    label="Company Name"
                    name="companyName"
                    placeholder="Enter Company Name..."
                    value={companyName}
                    onChange={e => setCompanyName(e.target.value)}
                    error={companyName === '' && errors.companyNameErr}
                />

                <TextInputGroup
                    label="Company Catch Phrase"
                    name="catchPhrase"
                    placeholder="Enter Company Catch Phrase..."
                    value={catchPhrase}
                    onChange={e => setCatchPhrase(e.target.value)}
                    error={catchPhrase === '' && errors.catchPhraseErr}
                />

                <input type="submit" value="Add Contact" className='btn btn-block btn-light' />
            </form>
        </div>
        </div>
    )
    
}

export default withRouter(AddContact);
