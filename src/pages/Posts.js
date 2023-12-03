import {Navigation} from "../components/Navigation";
import {Footer} from "../components/Footer";
import axios from "axios";
import {useEffect, useState} from "react";

export function Posts() {
    const [posts, setPosts] = useState([]);

    const showPosts = () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            const getPosts = async() => {
                try {
                    const response = await axios.get('http://localhost:5200/posts');
                    console.log(response.data)
                    setPosts(response.data);
                } catch (e) {
                    throw e;
                }
            }

            getPosts();
        }, []);
    }

    showPosts();

    const userCards = posts?.map((post, i) => {
        return <li className="list-group-item">{post.content} | by: @{post.authorName}</li>
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