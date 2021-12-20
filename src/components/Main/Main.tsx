import { Route, Routes, Navigate } from 'react-router-dom';

import Login from "../Login";
import Users from '../Users';

import "./style.scss"

const Main = () => {
    return (
        <main className="main">
            <Routes>
                <Route path="*" element={<Navigate to="/login" />} />
                <Route path="/login" element={<Login />} />
                <Route path="/users" element={<Users />} />
            </Routes>
        </main>
    )
}

export default Main;