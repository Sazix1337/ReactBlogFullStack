import {Navigation} from "../components/Navigation";
import {Footer} from "../components/Footer";
import 'bootstrap/dist/css/bootstrap.css';

export function NotFound() {
    return(
        <div>
            <Navigation></Navigation>
            <div className="container">
                <h1 className="title text-xl-center" style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    color: "red"
                }}>
                    Error 404! Sorry, please check your route that you was searching for!
                </h1>
            </div>
            <Footer></Footer>
        </div>
    )
}