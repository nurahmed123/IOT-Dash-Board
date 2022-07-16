import { useHistory } from 'react-router-dom';
import React from 'react'

export default function Home() {
    const history = useHistory();
    if (!localStorage.getItem("authToken")) {
        history.push("/login")
    }
    if (localStorage.getItem("authToken")) {
        history.push("/user/dashboard")
    }
    return (
        <>
            <div className='container my-3'>
                <h1>this is our dash board</h1>
            </div>
        </>
    )
}
