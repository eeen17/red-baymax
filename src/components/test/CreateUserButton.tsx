import React, { useState } from "react";
import { User, createUser } from "./User";

// const createUser = async () => {};

const CreateUserButton = () => {
    const [newName, setNewName] = useState<string>("");
    const [newAge, setNewAge] = useState<number>(0);
    // const [newUser, setNewUser] = useState<User>();

    return (
        <div className="CreateUserButton">
            <input
                placeholder="Name"
                type="text"
                onChange={(e) => {
                    setNewName(e.target.value);
                }}
            />
            <input
                placeholder="Age"
                type="number"
                onChange={(e) => {
                    setNewAge(parseInt(e.target.value));
                }}
            />
            <button onClick={() => {
                try {
                    createUser({age: newAge, name: newName});
                } catch (e) {
                    console.error(e);
                }
            }}>
                Create User
            </button>
        </div>
    );
};

export default CreateUserButton;
