import React from 'react';
import "./Booking.css";
import BookingProduct from '../bookingproduct/BookingProduct';
import Subtotal from '../subtotal/Subtotal';
import { useStateValue } from '../../StateProvider';

const Booking = () => {

    const [{ basket, user }, dispatch] = useStateValue();


  return (
    <div className='booking'>
        <div className="booking__left">
            <img
                className="booking__ad"
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                alt=""
            />

            <div>
                <h3>Hello, {user?.email}</h3>
                <h2 className='booking__title'>
                    Your Shopping Basket
                </h2>

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
                {/* Booking Product  */}
                {/* Booking Product  */}
                {/* Booking Product  */}
                {/* Booking Product  */}
                {/* Booking Product  */}
                
            </div>
        </div>

        <div className="booking__right">
            <Subtotal/>
        </div>
    </div>
  )
}

export default Booking