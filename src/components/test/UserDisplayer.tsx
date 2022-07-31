import React, { useEffect } from "react";
import User from "../../App"

export default function UserDisplayer({users}: User) {

    return (
        <div className="UserDisplayer">
            {users.map((user: User) => {

            })}
        </div>
    )
}
