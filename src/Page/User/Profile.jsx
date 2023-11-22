import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <h1>Profile section comming soon</h1>
        </div>
    );
};

export default Profile;