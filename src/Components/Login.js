import React from 'react'
import '../Styles/Login.css';
import { useEffect } from 'react';



export default function Login() {

    useEffect(() => {
        let windowWidth = window.matchMedia("(min-width: 1077px)");
        if (windowWidth.matches) {
            document.getElementById("Login").className = "w-50 shadow p-3 mb-5 bg-body mx-auto my-5 ";
        }
        else {
            document.getElementById("Login").className = "w-75 shadow p-3 mb-5 bg-body mx-auto my-5 t";
        }
    });

    const loginUser = () => {
        let userObject = {

            "username": document.getElementById("loginUsername").value,
            "password": document.getElementById("loginPassword").value
        }

        fetch('https://developerus.herokuapp.com/loginUser/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userObject),
        }).then(response => response.json()).then(data => console.log(data));
    }
    return (
        <>
            <div id="Login" className="w-50 shadow p-3 mb-5 bg-body mx-auto my-5 " style={{ height: "30rem", display: "flex" }}>
                <img id="loginImage" src="Images/login.jpg" width="50%" alt="" />
                <div className='container mx-3 my-3'>
                    <div className='fs-5 text-center'>Login</div>
                    <hr />
                    <form action="">
                        <div className="mb-2">
                            <label htmlFor="exampleFormControlInput1" className="form-label" id="label">Username<span className="mandatory_sign">*</span></label>
                            <input type="text" id="loginUsername" className="form-control input_tag" />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="exampleFormControlInput1" className="form-label" id="label">Email<span className="mandatory_sign">*</span></label>
                            <input type="email" id="loginEmail" className="form-control input_tag" />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="exampleFormControlInput1" className="form-label " id="label">Password<span className="mandatory_sign">*</span></label>
                            <input type="password" id="loginPassword" className="form-control input_tag" />
                        </div>
                        <div className='text-center'>
                            <button onClick={loginUser} type="button" className=" loginBtn btn btn-info my-2 mx-2 custom_btn" style={{ "alignSelf": "center" }}>Login</button>
                        </div>
                        {/* <div className='text-center'>
                            <button type="button" className=" loginBtn btn btn-info my-2 mx-2 google_btn" style={{ "alignSelf": "center" }}><img className="mx-2" src="Images/icon-google.png" height="35px" alt=""/>Sign with Google</button>
                        </div> */}
                    </form>
                </div>
            </div>
        </>
    )
}
