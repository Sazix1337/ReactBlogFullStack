import {Navigation} from "../components/Navigation";
import {Footer} from "../components/Footer";
import $ from 'jquery'
import axios from "axios";

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

const setCookie = (cname, cvalue, exdays) => {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
};

function updateBio() {
    setCookie("bio", $(".bioVal").val(), 5000000);
    axios.post('http://localhost:5200/bio', {
        username: getCookie("username"),
        bio: $(".bioVal").val()
    }).then(response => {
        console.log(response);
    });
}

export function UpdateBio() {
    return(
        <div>
            <div>
                <Navigation></Navigation>
                <h1 style={{
                    position: "fixed",
                    top: "100px",
                    left: "50%",
                    transform: "translate(-50%, -50%)"
                }} className="title">
                    Update Bio
                </h1>
                <div className="input-group mb-3">
                    <textarea style={{
                        height: "350px",
                        width: "90%",
                        position: "fixed",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        resize: "none"
                    }} className="bioVal form-control" aria-label="Biography" aria-describedby="basic-addon1" />
                </div>
                <button style={{
                    width: "300px",
                    position: "fixed",
                    top: "550px",
                    left: "50%",
                    transform: "translate(-50%, 0)"
                }} onClick={updateBio} className="btn btn-dark">Update</button>
                <Footer></Footer>
            </div>
        </div>
    )
}