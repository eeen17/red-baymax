import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./pages";
import FoodTracker from "./pages/food-tracker";
import HealthTracker from "./pages/health-tracker";
import SubstanceQuitter from "./pages/substance-quitter";

import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase-config";
import CreateUserButton from "./components/test/CreateUserButton";
import UserDisplayer from "./components/test/UserDisplayer";

const App: React.FC = () => {

    interface User {
        name: string;
        age: number;
        id: string;
    }

    const [users, setUsers] = useState<User[]>([]);
    const usersCollectionRef = collection(db, "users");

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id} as User)));

        };

        getUsers();
    }, []);

    return (
        <>
            <Router>
                <NavigationBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/food-tracker" element={<FoodTracker />} />
                    <Route path="/health-tracker" element={<HealthTracker />} />
                    <Route
                        path="/substance-quitter"
                        element={<SubstanceQuitter />}
                    />
                </Routes>
            </Router>

            <UserDisplayer />
            <CreateUserButton />
        </>
    );
};

export default App;
