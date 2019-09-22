import React from 'react';
import Logo from '../logo/Logo';
import './Navigation.css';

const Navigation = () => {
    return (
        <nav>
        <Logo style={{alignSelf: 'flex-start'}} />
        <ul>
        <li className="link signout" style={{alignSelf: 'flex-end'}}>
            Sign Out
        </li>
        </ul>
    
    </nav>
    )
}
export default Navigation;