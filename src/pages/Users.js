import {Navigation} from "../components/Navigation";
import {Footer} from "../components/Footer";
import axios from "axios";
import {useEffect, useState} from "react";

export function Users() {
    const [users, setUsers] = useState([]);

    const showUsers = () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            const getUsers = async() => {
                try {
                    const response = await axios.get('http://localhost:5200/users');
                    console.log(response.data)
                    setUsers(response.data);
                } catch (e) {
                    throw e;
                }
            }

            getUsers();
        }, []);
    }

    showUsers();

    const userCards = users?.map((user, i) => {
        return <li className="list-group-item">{user.username}</li>
    });

    return(
        <div>
            <div>
                <Navigation></Navigation>
                <ul className="list-group list-group-flush">
                    {userCards}
                </ul>
                <Footer></Footer>
            </div>
        </div>
    )
}