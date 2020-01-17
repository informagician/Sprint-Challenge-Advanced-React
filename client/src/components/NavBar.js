import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode'

const NavBar = () => {
    const [value,setValue] = useDarkMode('darkmode');

    const darkMode = () => {
        setValue(!value);
    }

    return(
        <div className="nav-bar">
            <nav>
                <div className="left">
                    <h1>Women's World Cup</h1>
                </div>
                <div className="right">
                    <button onClick={() => darkMode()}>Change Mode</button>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;