import {Navigation} from "../components/Navigation";
import {Footer} from "../components/Footer";
import axios from 'axios';
import $ from 'jquery';

const setCookie = (cname, cvalue, exdays) => {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
};

function signIn() {
    axios.post('http://localhost:5200/login', {
        username: $('#username').val(),
        password: $('#password').val()
    }).then(response => {
        if(response.data.length) {
            setCookie('logged', true, 5000000);
            setCookie('username', response.data[0].username, 5000000);
            setCookie('password', response.data[0].password, 5000000);
            setCookie('avatarUrl', response.data[0].avatarUrl, 5000000);
            setCookie('bio', response.data[0].bio, 5000000);
            setCookie('id', response.data[0].id, 5000000);
            window.location.reload();
        }
    });
}


export function LogInScreen() {
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
                <h1 className="title" style={{marginLeft: "120px"}}>Sign In</h1>
                <div className="form-group mb-2">
                    <input type="text" className="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter username" />
                </div>
                <div className="form-group mb-2">
                    <input type="password" className="form-control" id="password" placeholder="Password" />
                </div>
                <button onClick={signIn} className="btn btn-primary" style={{marginLeft: "150px"}}>Submit</button>
            </div>
            <Footer></Footer>
        </div>
    )
}