import { Route, Routes, Navigate } from "react-router-dom";

import Login from "../Login";
import UserInfo from "../UserInfo";
import Users from "../Users";

import "./style.scss";

const Pages = () => {
    return (
        <div className="pages-container">
            <Routes>
                <Route path="*" element={<Navigate to="/login" />} />
                <Route path="/login" element={<Login />} />
                <Route path="/users" element={<Users />} />
                <Route path="/userinfo" element={<UserInfo />} />
            </Routes>
        </div>
    );
};

export default Pages;
