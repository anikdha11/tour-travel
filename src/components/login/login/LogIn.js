import React from 'react';
import { Button} from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth'
const LogIn = () => {
    const {signInUsingGoogle} = useAuth()
    return (
        <div className="m-4">
            <h1>Please Login</h1>
             <Button onClick={signInUsingGoogle} variant=""><i class="fab fa-google"></i></Button>
        </div>
    );
};

export default LogIn;