import React from 'react';
import './BackToTop.css';
import {useEffect} from 'react';




const BackToTop = () => {



    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);



  return (

    <>
        <div
            className='backToTop'
            onClick={() => {
                window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
            }}
        >
            Back to Top
        </div>
    </>
    
  )
}

export default BackToTop