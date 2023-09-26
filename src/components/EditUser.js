import React, { useState, useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { userInfo, updateUser } from '../redux/allAction'

const EditUser = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [navigate, setNavigate] = useState(false)

    const dispatch = useDispatch()
    const myUsers = useSelector((state) => state.user)
    const { id } = useParams()

    useEffect(() => {
        dispatch(userInfo(id))
    }, [dispatch, id])

    useEffect(() => {
        if (myUsers.user) {
            const { name, email, phone } = myUsers.user
            setName(name || '');
            setEmail(email || '');
            setPhone(phone || '');
        }
    }, [myUsers.user]);

    const inputHandler = (e) => {
        const { name, value } = e.target
        if (name === 'name') setName(value)
        else if (name === 'email') setEmail(value)
        else if (name === 'phone') setPhone(value)
    }

    const submitButton = async () => {
        const newData = {
            ...myUsers.user,
            name: name,
            email: email,
            phone: phone
        };
        dispatch(updateUser(newData));
        setNavigate(true);
    };

    if (navigate) {
        return <Navigate to='/home' />
    }

    return (
        <div className='container'>
            <div className='row login'>
                <h3 className='heading' style={{ marginTop: '20px' }}>
                    Edit Registration
                </h3>{' '}
                <br />
                <div className='col-md-2'></div>
                <div className='col-md-6'>
                    <form autoComplete='off' action='/login-user' method='post'>
                        <div className='mb-3'>
                            <label className='form-label'>User Name</label>
                            <input
                                type='text'
                                className='form-control'
                                name='name'
                                autoComplete='off'
                                value={name}
                                onChange={inputHandler}
                            />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Email</label>
                            <input
                                type='email'
                                className='form-control'
                                name='email'
                                autoComplete='off'
                                value={email}
                                onChange={inputHandler}
                            />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Phone</label>
                            <input
                                type='text'
                                className='form-control'
                                name='phone'
                                autoComplete='off'
                                value={phone}
                                onChange={inputHandler}
                            />
                        </div>
                        <div>
                            <button
                                type='button'
                                className='btn btn-primary'
                                onClick={submitButton}
                            >
                                Edit User
                            </button>
                            &nbsp;
                            <Link to='/home'>
                                <button
                                    type='button'
                                    id='addUserBtn'
                                    className='btn btn-success'
                                >
                                    Back
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditUser
