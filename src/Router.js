import {Route, Routes} from "react-router-dom";
import {RegisterScreen} from "./pages/RegisterScreen";
import {Posts} from "./pages/Posts";
import {Users} from "./pages/Users";
import {LogInScreen} from "./pages/LogInScreen";
import HomePage from "./HomePage";
import {NotFound} from "./pages/NotFound";
import {Profile} from "./pages/Profile";
import {UpdateBio} from "./pages/UpdateBio";
import {UpdatePassword} from "./pages/UpdatePassword";
import {UpdateUsername} from "./pages/UpdateUsername";
import {UploadPost} from "./pages/UploadPost";

export function Router() {
    return(
        <Routes>
            <Route index path="/home" element={<HomePage />} />
            <Route path="/signup" element={<RegisterScreen />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/users" element={<Users />} />
            <Route path="/signin" element={<LogInScreen />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/updateBio" element={<UpdateBio />} />
            <Route path="/updatePassword" element={<UpdatePassword />} />
            <Route path="/updateUsername" element={<UpdateUsername />} />
            <Route path="/uploadPost" element={<UploadPost />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}