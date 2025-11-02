import React, { use } from 'react';
import AuthContext from '../Contexts/AuthContext';

const Profile = () => {

    const {user} = use(AuthContext);

    return (
        <div className='flex h-[70vh] justify-center items-center'>
            <h1 className='font-black text-4xl'>Your Name: {user.displayName}</h1>
        </div>
    );
};

export default Profile;