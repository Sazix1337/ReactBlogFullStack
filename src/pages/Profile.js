import {Navigation} from "../components/Navigation";
import {Footer} from "../components/Footer";
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import axios from "axios";
import {Link} from "react-router-dom";

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

const blobToImage = (blob) => {
    return new Promise(resolve => {
        const url = URL.createObjectURL(blob)
        let img = new Image()
        img.onload = () => {
            URL.revokeObjectURL(url)
            resolve(img)
        }
        img.src = url
    })
}

function changeAvatar(e) {
    if(e.target.files && e.target.files[0]) {
        const avatarBlock = $(".avatar");
        const url = URL.createObjectURL(e.target.files[0]);
        avatarBlock.attr('src', url);
        setCookie('avatarUrl', url, 5000000);

        axios.post('http://localhost:5200/avatar', {
            username: getCookie("username"),
            password: getCookie("password"),
            avatarUrl: url
        }).then(response => {
            console.log(response);
        });
    }
}

export function Profile() {
    return(
        <div>
            <div>
                <Navigation></Navigation>
                <h1 style={{
                    position: "fixed",
                    top: "100px",
                    left: "50%",
                    transform: "translate(-50%, 0)"
                }} className="title">{getCookie("username")}(ID: {getCookie("id")})</h1>
                <img style={{
                    width: "100px",
                    height: "100px",
                    position: "fixed",
                    top: "160px",
                    left: "50%",
                    transform: "translate(-50%, 0)",
                    border: "2px solid rgba(131, 132, 133, .5)",
                    borderRadius: "50%"
                }} src={getCookie("avatarUrl") ? getCookie("avatarUrl") : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1200px-User-avatar.svg.png"} alt="" className="avatar"/>
                <div className="selection">
                    <label style={{
                        position: "fixed",
                        top: "280px",
                        left: "50%",
                        transform: "translate(-50%, 0)"
                    }} htmlFor="avatarSelection" className="btn btn-dark">Browse Files(400x400)</label>
                    <input onChange={changeAvatar} accept="image/*" style={{
                        display: "none"
                    }} id="avatarSelection" type="file" className="btn btn-primary" placeholder="Select avatar" />
                    <div style={{
                        width: "70%",
                        height: "70px",
                        position: "fixed",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center"
                    }} className="bio">
                        {getCookie("bio") ? getCookie("bio") : <p style={{color: "#ccc"}}>No bio provided yet.</p>}
                    </div>
                    <Link style={{
                        position: "fixed",
                        top: "75%",
                        left: "50%",
                        transform: "translate(-50%, -50%)"
                    }} to="/uploadPost" className="btn btn-dark">Upload Post</Link>
                    <Link style={{
                        position: "fixed",
                        top: "85%",
                        left: "50%",
                        transform: "translate(-50%, -50%)"
                    }} to="/updateBio" className="btn btn-secondary">Update Bio</Link>
                    <Link style={{
                        position: "fixed",
                        top: "85%",
                        left: "59%",
                        transform: "translate(-50%, -50%)"
                    }} to="/updatePassword" className="btn btn-secondary">Update Password</Link>
                    <Link style={{
                        position: "fixed",
                        top: "85%",
                        left: "41%",
                        transform: "translate(-50%, -50%)"
                    }} to="/updateUsername" className="btn btn-secondary">Update Username</Link>
                </div>
                <Footer></Footer>
            </div>
        </div>
    )
}