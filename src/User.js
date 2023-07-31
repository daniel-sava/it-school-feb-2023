import { useContext, useState } from "react";
import { USER_ACTIONS, UserProfileContext } from "./contexts/UserProfileContextProvider";

import './User.css';
import { ThemeContext } from "./contexts/ThemeContextProvider";

export default function User() {
    const { user, dispatch } = useContext(UserProfileContext);
    const { theme } = useContext(ThemeContext);
    const [userName, setUserName] = useState(user.userName ?? '')

    return (
        <>
            {
                user.userName && 
                <div className={`change-username ${theme}`}>
                    <h2 className="title">Change Username</h2>
                    <input onChange={(event) => { setUserName(event.target.value) }} className="input" type="text" value={userName}/>
                    <button onClick={() => {
                        dispatch({ type: USER_ACTIONS.CHANGE_USERNAME, payload: { userName } })
                    }} className="btn">Save</button>
                </div>
            }
        </>
    )
}