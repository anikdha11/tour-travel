import React from 'react';
import { Button} from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth'
const LogIn = () => {
    const {signInUsingGoogle} = useAuth();
    const location = useLocation()
    const history = useHistory();

    const redirect_uri = location.state?.from || '/home'
    console.log('came from', location.state?.from)
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }
    return (
        <div className="m-4">
            <h1>Please Login</h1>
             <Button onClick={handleGoogleLogin} variant=""><i className="fab fa-google"></i></Button>
        </div>
    );
};

export default LogIn;