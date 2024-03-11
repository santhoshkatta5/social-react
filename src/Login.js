import React, { useContext } from 'react'
import { UserContext } from './App'
import Home from './Home';
import Register from './Register';


export default function Login() {
    const { flag, setFlag } = useContext(UserContext);
    if (flag == 1) {
        <Home />
    } else if (flag == 2) {
        <Register />
    }
    return (
        <>
            <div>Login</div>
            <button onClick={() => setFlag((prev) => 1)}>Login</button>
            <button onClick={() => setFlag((prev) => 2)}>Create Account</button>
            {console.log(flag)}
            {/* {flag && (<Home1/>)} */}
        </>
    )
}