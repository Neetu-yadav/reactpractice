import { useEffect, useState } from "react";

export function Login(){
    useEffect(()=>{
        alert(`Login Mounted`);
        return()=>{
            console.log(`Login Unmounted 2`);
        }
    },[]);
    return(
        <div>
            <h3>Login Component</h3>
        </div>
    )
}

export function Register(){
    useEffect(()=>{
        alert(`Register Mounted`);
        return()=>{
            console.log(`Register Unmounted`);
        }
    },[]);
    return(
        <div>
            <h2>Register Component</h2>
        </div>
    )
}

export function HooksDemo(){

    const [component, setComponent] = useState(<Login/>);

    function handleLogin(){
        setComponent(<Login />);
    }

    function handleRegister(){
        setComponent(<Register />);
    }

    return(
        <div className="container-fluid">
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleRegister}>Register</button>
            <hr />
            {component}
        </div>
    )
}




