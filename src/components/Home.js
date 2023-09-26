import React from 'react'
import List from './List'
import { useSelector } from 'react-redux';

function Home() {
    const usersList = useSelector((state) => {
        return state.user.items;
    })
    return (
        <div className='container'>
            <div className='row login homepage'>
                <div>&nbsp;</div>
                <div className='row'>
                    <div className='col-md-1'></div>
                    <div className='col-md-11'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {usersList.map((userData) => (
                                    <List user={userData} key={userData.id} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;