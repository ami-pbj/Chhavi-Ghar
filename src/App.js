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



// Payment => Stripe
// INR
const promise = loadStripe('pk_test_51MgN5uSB09l0DKpi6wP2RnqiCo3429m6zLHYE3doLWS4445FBnEbOYDlf03edJm2u386YDKxe9F4YJ70s1lHsUyQ00p4rPuhTP');

// USD
// const promise = loadStripe('pk_test_51MgZzRLdUHnfIWNZdanCsRHuHUiyQsztSmmr5OpH6FlRdnRucmD97E9yghP2R3ExIgQOAkJp60riU7wT4OxwSZoq00RvXsJqii');



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



          </Route>
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;