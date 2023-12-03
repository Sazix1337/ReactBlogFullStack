import 'bootstrap/dist/css/bootstrap.css'
import {Link} from 'react-router-dom';
import {LogOut} from "../lib/LogOut";

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

export function Navigation() {
    if(getCookie("logged") === "false") {
        return(
            <div className="authorization-block navigation btn-group m-lg-2 d-flex align-items-center justify-content-center">
                <Link to="/signup" className="btn btn-primary">Sign Up</Link>
                <Link to="/posts" className="btn btn-outline-primary">View Posts</Link>
                <Link to="/home" className="btn btn-primary">Home</Link>
                <Link to="/users" className="btn btn-outline-primary">Users</Link>
                <Link to="/signin" className="btn btn-primary">Sign In</Link>
            </div>
        )
    } else if(getCookie("logged") === "true") {
        return(
            <div className="authorization-block navigation btn-group m-lg-2 d-flex align-items-center justify-content-center">
                <Link to="/posts" className="btn btn-outline-primary">View Posts</Link>
                <Link to="/profile" className="btn btn-outline-primary">Profile({getCookie("username")})</Link>
                <Link to="/users" className="btn btn-outline-primary">Users</Link>
                <button onClick={LogOut} className="btn btn-primary">Log Out</button>
            </div>
        )
    }
}