import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
import Reviews from './components/reviews/Reviews';
import NotFound from './components/notFound/NotFound';
import Booking from './components/booking/Booking';
import Login from './components/login/Login';
import Payment from './components/payment/Payment';
import Footer from './components/footer/Footer';

import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './components/orders/Orders';
import Footbar from './components/footer/Footbar';
import BackToTop from './components/footer/BackToTop';
import Watchlist from './components/watchlist/Watchlist';

import "./lib/font-awesome/css/all.min.css";
import { Watched } from './components/watchlist/Watched';

// Payment => Stripe
// INR
const promise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);


function App() {

  const [movies, setMovies] = useState();
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState([]);

  const [{}, dispatch] = useStateValue();


  const getMovies = async () =>{
    
    try
    {

      const response = await api.get("/api/v1/movies");

      setMovies(response.data);

    } 
    catch(err)
    {
      console.log(err);
    }
  }

  const getMovieData = async (movieId) => {
     
    try 
    {
        const response = await api.get(`/api/v1/movies/${movieId}`);

        const singleMovie = response.data;

        setMovie(singleMovie);

        setReviews(singleMovie.reviews);
        

    } 
    catch (error) 
    {
      console.error(error);
    }

  }

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    getMovies();
  },[])



  return (
  
    <div className="App">

      
      <Header/>
      <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home movies={movies} />} ></Route>
            <Route path="/Trailer/:ytTrailerId" element={<Trailer/>}></Route>
            <Route path="/Reviews/:movieId" element ={<Reviews getMovieData = {getMovieData} movie={movie} reviews ={reviews} setReviews = {setReviews} />}></Route>
            <Route path="*" element = {<NotFound/>}></Route>

            {/* Booking Page  */}
            <Route path='/booking' element={<Booking/>}/>

            {/* Login Page  */}
            <Route path='/login' element={<Login/>}/>

            {/* Payment Page => Proceed to Checkout Button */}
            <Route path='/payment' element= {
              // [ <Header/>,
              <>
                <Elements stripe={promise}>
                  <Payment/>
                </Elements>
              </>
              // ]
            }/>

            {/* Orders Page */}
            <Route path='/orders' element={<Orders/>}/>

            {/* Watchlist Page */}
            <Route path='/watchlist' element={<Watchlist/>}/>

            {/* Watched Movie Page */}
            <Route path='/watched' element={<Watched/>}/>


          </Route>
      </Routes>
      <BackToTop/>
      <Footer/>
      <Footbar/>

    </div>
  );
}

export default App;