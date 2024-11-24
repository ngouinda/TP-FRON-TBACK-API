import React from 'react';
import LoginSection from '../organisms/LoginSection';
//import LoginForm from '../molecules/LoginForm';

const LoginTemplate:  React.FC = () => {

    return (
        <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100">
            <LoginSection />
        </div>
    );
};

export default LoginTemplate;