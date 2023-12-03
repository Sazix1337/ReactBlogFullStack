import {Navigation} from "./components/Navigation";
import {Footer} from "./components/Footer";

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

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

const userLogged = getCookie("logged");

if(!userLogged) {
    setCookie("logged", false, 50000);
}

function HomePage() {
    if(getCookie("logged") === "false") {
        return (
            <div className="App">
                <Navigation></Navigation>

                <div className="container text-lg-center" style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)"
                }}>
                    <h1 className="title mb-5">
                        Welcome to the Blog Site!
                    </h1>

                    <div className="description container">
                        <p className="desc">
                            On this website you can upload your own posts, and allow other people to comment them to discuss or debate your own opinion about anything.
                            <br />
                            We're happy you joined us, to share your opinion with us and other people!
                        </p>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default HomePage;
