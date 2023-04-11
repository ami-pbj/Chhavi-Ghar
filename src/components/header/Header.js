import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShopTwoIcon from '@mui/icons-material/ShopTwo';
import { NavLink, Link } from 'react-router-dom';
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { logo, logo2 } from '../../assets';
import { useStateValue } from '../../StateProvider';
import { auth } from '../../firebase';


const Header = () => {

    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }
    
 
return (
    <div className='header'>

        {/* Link Clonazon Logo with Homepage path => "/" */}
        <Link to = "/">

            {/* Logo  */}
            <img 
                className='header__logo'
                src={ logo2 }
                alt=""
            />
        </Link>


        {/* Searchbar */}
        <div className='header__search' style={{ fontSize: 12 }}>
            <input
                className='header__searchInput'
                type="text"
                placeholder='Search Chhavighar.com'
            />

            {/* Search Icon */}
            <SearchIcon
                className='header__searchIcon'
                style={{ fontSize: 35 }}
            />
        </div>

        {/* Right Side Header Components  */}
        <div className='header__nav'>

            {/* SignIn  */}
            <Link to={!user && '/login'} style={{ textDecoration: 'none' }}>
                <div onClick={handleAuthentication} className='header__option'>

                    {/* user?.email || "Guest" */}

                    <span className='header__optionLineTwo'>
                    {!user ? 'Hi,' : 'Welcome,'} {!user ? 'Guest' : user?.email}
                    </span>
                    <span className='header__optionLineOne'>
                        {user ? 'Sign Out' : 'Sign In'}
                    </span>
                </div>
            </Link>

            {/* Your Watchlist */}
            <Link to='./watchlist' style={{ textDecoration: 'none' }}>
                <div className='header__option'>
                    <span className='header__optionLineTwo'>
                        Watchlist
                    </span>
                    <span className='header__optionLineOne'>
                        Your
                    </span>
                </div>
            </Link>

            {/* Booked Tickets => Orders */}
            <Link to='./order' style={{ textDecoration: 'none' }}>
                <div className='header__option'>
                    <span className='header__optionLineTwo'>
                        Tickets
                    </span>
                    <span className='header__optionLineOne'>
                        Booked
                    </span>
                </div>
            </Link>

            

            {/* Sopping Basket Link to Booking page => "/bookings" */}
            <Link to="/booking" style={{ textDecoration: 'none' }}>
                {/* Sopping Basket */}
                <div className="header__optionBasket">
                    <ShopTwoIcon/>
                    <span className="header__optionLineTwo header__basketCount">
                        {basket?.length}
                    </span>
                </div>
            </Link>

        </div>

    </div>
  )
}

export default Header;