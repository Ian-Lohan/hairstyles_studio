import React from 'react';
import '../../styles/Login.css'; // Import the CSS file for styling

import Button from '../../components/commons/Button/Button';
import Input from '../../components/commons/Input/Input';

interface LoginProps {
    
}

const Login : React.FC<LoginProps> = (props) => {
    // Add state of hooks here if needed

    return (
        <div className="login-container">
            {/* Page Title */}
            <h1 className="login-title">Login</h1>

            {/* Main Content Area */}
            <div className="login-content">
                {/* 
                    Add the specific content for this page here.
                    This could include other components, forms, lists, etc.
                */}
                <Input type="text" placeholder="Username" />
                <Input type="password" placeholder="Password" />
                <Button color="--primary-color" textColor="--text-color-light" onClick={() => {}}>Login</Button>
            </div>
        </div>
    );
};

export default Login;