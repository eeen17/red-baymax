import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";

import UserDisplayer from "./components/test/UserDisplayer";
import CreateUserButton from "./components/test/CreateUserButton";
import { fetchUsers, User } from "./components/test/User";

const App: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const getUsers = async () => {
            setUsers(await fetchUsers());
        };
        getUsers();
    }, []);

    return (
        <>
            <Router>
                <NavigationBar />
            </Router>
            <CreateUserButton />
            <UserDisplayer users={users} />
        </>
    );
};

export default App;
