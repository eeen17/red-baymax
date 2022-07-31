import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./pages";
// import FoodTracker from "./pages/food-tracker";
// import HealthTracker from "./pages/health-tracker";
// import SubstanceQuitter from "./pages/substance-quitter";

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
                {/* <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/food-tracker" element={<FoodTracker />} />
                    <Route path="/health-tracker" element={<HealthTracker />} />
                    <Route
                        path="/substance-quitter"
                        element={<SubstanceQuitter />}
                    />
                </Routes> */}
            </Router>
            <CreateUserButton />
            <UserDisplayer users={users} />
        </>
    );
};

export default App;
