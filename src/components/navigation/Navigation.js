import React from 'react';
import Logo from '../logo/Logo';
import './Navigation.css';

const Navigation = ({onRouteChange, isSignedIn}) => {
    if(isSignedIn) {
    return (
        <nav>
        <Logo style={{alignSelf: 'flex-start'}} />
        <ul>
            <li className="link pointer" onClick={()=>onRouteChange('signout')}>
            Sign Out
             </li>
            </ul>
        </nav>
        );
        }
      else{
        return(
        <nav >
        <Logo />
            <ul>
        <li className="link pointer" onClick={()=>onRouteChange('signin')}>
            Sign In
        </li>
        <li className="link pointer" onClick={()=>onRouteChange('register')}>
            Register
        </li>
        </ul>
        </nav>

          );
        }

}
export default Navigation;