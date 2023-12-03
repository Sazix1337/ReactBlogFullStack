import {Navigation} from "../components/Navigation";
import {Footer} from "../components/Footer";
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
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

function uploadPost() {
    axios.post('http://localhost:5200/uploadPost', {
        content: $(".postContent").val(),
        username: getCookie("username")
    }).then(response => {
        console.log(response.data);
    });
}

export function UploadPost() {
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
                    Upload Post
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
                    }} placeholder="New Post" className="postContent form-control" aria-label="Biography" aria-describedby="basic-addon1" />
                </div>
                <button style={{
                    width: "300px",
                    position: "fixed",
                    top: "550px",
                    left: "50%",
                    transform: "translate(-50%, 0)"
                }} onClick={uploadPost} className="btn btn-dark">Upload</button>
                <Footer></Footer>
            </div>
        </div>
    )
}