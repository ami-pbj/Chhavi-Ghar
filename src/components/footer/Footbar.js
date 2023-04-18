import React from 'react';
import './Footbar.css';

const Footbar = () => {
  return (
    <div className='footbar'>
        {/* Middle side of Footer  */}
        <span className="footbar__text">
            {new Date().getFullYear()} © Chhavi Ghar Official. All rights reserved.
            <span style={{fontSize: 10}}>Built and Manage by 🅟🅑🅙</span>
        </span>
    </div>
  )
}

export default Footbar