import React from "react";
import { deleteUser, updateUserAge, User } from "./User";

interface Props {
    users: User[];
}

const UserDisplayer: React.FC<Props> = ({ users }) => {
    return (
        <div className="UserDisplayer">
            {users.map((user: User) => {
                return (
                    <div>
                        <h1>Name: {user.name}</h1>
                        <h1>Age: {user.age}</h1>
                        <button onClick={() => {
                            updateUserAge(user.id, user.age);
                        }}>Increase Age</button>
                        <button onClick={() => {
                            deleteUser(user.id);
                        }}>Delete User</button>
                    </div>
                );
            })}
        </div>
    );
};

export default UserDisplayer;
