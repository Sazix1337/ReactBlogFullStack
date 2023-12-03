import {Navigation} from "../components/Navigation";
import {Footer} from "../components/Footer";
import $ from 'jquery';
import {useRef} from "react";
import axios from 'axios';


export function RegisterScreen() {
    const password = useRef(null);
    const username = useRef(null);

    function signUp() {
        const data = {
            username: $('#username').val(),
            password: $('#password').val()
        }

        console.log(data);

        axios.post('http://localhost:5200/register', data).then(r => console.log(r));
    }

    return(
        <div>
            <Navigation></Navigation>
            <div className="container" style={{
                width: "400px",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)"
            }}>
                <h1 className="title" style={{marginLeft: "120px"}}>Sign Up</h1>
                <div className="form-group mb-2">
                    <input autoComplete="garbage" ref={username} type="text" className="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter username" />
                </div>
                <div className="form-group mb-2">
                    <input autoComplete="garbage" ref={password} type="password" className="form-control" id="password" placeholder="Password" />
                </div>
                <button type="button" onClick={signUp} className="btn btn-primary" style={{marginLeft: "150px"}}>Submit</button>
            </div>
            <Footer></Footer>
        </div>
    )
}