import React from 'react';
import './Logo.css';
import Tilt from 'react-tilt';
import search from './search.png';

const Logo = () => {
return(
    <div className="ma4 mt2 logo">
    <Tilt className="Tilt br2 shadow-2" options={{ max : 50 }} style={{ height: 75, width: 75 }} >
 <div className="Tilt-inner"> 
<img alt="logo" src={search} />
  </div>
</Tilt>
    </div>
)
}

export default Logo;