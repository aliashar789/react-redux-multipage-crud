import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import shortid from 'shortid'
import { userRegister } from '../redux/allAction'


function Registration() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [inputField, setInputField] = useState({
        name: '',
        email: '',
        phone: '',
    })

    const inputHandler = (e) => {
        setInputField({ ...inputField, [e.target.name]: e.target.value })
    }
    const submitButton = async () => {
        Object.assign(inputField, { id: shortid.generate() })
        dispatch(userRegister(inputField))
        navigate('/home')
    }

    return (
        <div className='container'>
            <div className='row login'>
                <h3 className='heading' style={{ marginTop: '20px' }}>Add Registration</h3> <br />
                <div className='col-md-2'></div>
                <div className='col-md-6'>
                    <form autoComplete='off' action='/login-user' method='post'>
                        <div className='mb-3'>
                            <label className='form-label'>User Name</label>
                            <input type='text' className='form-control' name='name' autoComplete='off' value={inputField.name} onChange={inputHandler} />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Email</label>
                            <input type='email' className='form-control' name='email' autoComplete='off' value={inputField.email} onChange={inputHandler} />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Phone</label>
                            <input type='text' className='form-control' name='phone' autoComplete='off' value={inputField.phone} onChange={inputHandler} />
                        </div>
                        <div>
                            <button type='button' className='btn btn-primary' onClick={submitButton}>Add User
                            </button>&nbsp;
                            <Link to='/home'><button type='button' id='addUserBtn' className='btn btn-success'>Back
                            </button></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Registration;