import { useContext } from 'react';
import './Navbar.css';
import { ThemeContext } from './contexts/ThemeContextProvider';
import { USER_ACTIONS, UserProfileContext } from './contexts/UserProfileContextProvider';

export default function Navbar() {
    const { user, dispatch } = useContext(UserProfileContext);
    const { theme, setTheme } = useContext(ThemeContext);

    return <div className={`navbar ${theme}`}>
        <p className="logo">LOGO</p>
        <div className="current-user">
            <p className="user-name">{ user.userName }</p>
            <button onClick={() => { setTheme(theme === 'light' ? 'dark' : 'light')}} className='toggle-theme'>Toggle Theme</button>
            <button className="auth-button" onClick={() => {
                dispatch({ 
                    type: user.userName ?
                            USER_ACTIONS.LOG_OUT :
                            USER_ACTIONS.LOG_IN 
                })
            }}>
                { user.userName ? 'Logout' : 'Login' }
            </button>
        </div>
    </div>
}