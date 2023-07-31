import { useContext } from 'react';
import './Random.css';
import { AdvancedThemeContext, themeBlue, themeRed, themeYellow } from './contexts/AdvancedThemeContextProvider';

export default function Random() {
    const {currentTheme, setCurrentTheme} = useContext(AdvancedThemeContext)
    
    return <div className='random'>
        <h2>I am a random component</h2>
        <button>Random Button</button>
        <div className='themes'>
            <button onClick={() => { setCurrentTheme(themeBlue) }}>Blue Theme</button>
            <button onClick={() => { setCurrentTheme(themeRed) }}>Red Theme</button>
            <button onClick={() => { setCurrentTheme(themeYellow) }}>Yellow Theme</button>
        </div>
    </div>
}