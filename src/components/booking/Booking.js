import React from 'react';
import "./Booking.css";
import BookingProduct from '../bookingproduct/BookingProduct';
import Subtotal from '../subtotal/Subtotal';
import { useStateValue } from '../../StateProvider';
import { offer } from '../../assets';


const Booking = () => {

    const [{ basket, user }, dispatch] = useStateValue();


  return (
    <div className='booking'>
        <div className="booking__left">
            <img
                className="booking__ad"
                src={ offer }
                alt=""
            />

            <div>
                <h4 style={{marginTop: 5}}>
                    {/* {!user ? 'Hello,' : 'Welcome,'}  */}
                    Hello, 
                    
                        {!user ? <span style={{color: 'red', fontSize: 18}}> You've not Signed In yet !</span>  : <span style={{color: 'green', fontSize: 18}}> {user?.email}</span>}
                    
                </h4>
                <h3 className='booking__title'>
                    Your Booking Basket
                </h3>

                {/* To show selected products on Booking page   */}
                {basket.map(item => (
                    <BookingProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        info={item.info}
                        price={item.price}
                        stock={item.stock}
                        nostock={item.nostock}
                        rating={item.rating}
                    />
                ))}
                
            </div>
        </div>

        <div className="booking__right">
            <Subtotal/>
        </div>
    </div>
  )
}

export default Booking