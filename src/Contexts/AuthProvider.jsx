import React from 'react';
import AuthContext from './AuthContext';

const AuthProvider = ({children}) => {

    const AuthInfo = {
        email: 'aflak@gmail.com'
    }

    return (
        <div>
            <AuthContext.Provider value={AuthInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;