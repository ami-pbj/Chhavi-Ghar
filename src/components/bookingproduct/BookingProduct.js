import React from 'react';
import './BookingProduct.css';
import { useStateValue } from '../../StateProvider';

const BookingProduct = ({ id, image, title, price, rating, hideButton, info, stock, nostock }) => {

    const [{ basket }, dispatch] = useStateValue();


    const removeFromBasket = () => {
        // Remove the item from basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }


  return (
    <div className='bookingProduct'>
        <img
            className='bookingProduct__image'
            src={image}
            alt=""
        />

        <div className="bookingProduct__info">
            <p className="bookingProduct__title">
                {title}
            </p>

            <p style={{fontSize: 10}}>
                {info}
            </p>

            <p className="bookingProduct__price">
                <small style={{fontWeight: 'bold', fontSize: '15px'}}>₹&nbsp;</small>
                <strong style={{fontSize: 14 ,fontWeight: 100}}>{price}</strong>
                <p className="bookingProduct__stock">
                    {/* &nbsp;{stock}&nbsp; */}
                    <small style={{color: "green"}}>&nbsp;{stock}</small>
                    <small style={{color: "darkred"}}>{nostock}&nbsp;</small>
                </p>
            </p>

            <div className="bookingProduct__rating">
                {Array(rating).fill().map((_, i) => (
                    <p>🌟</p>
                ))}
            </div>


            {!hideButton && (
                <button onClick={removeFromBasket}>
                    Remove
                </button>
            )}
            
        </div>
    </div>
  )
}

export default BookingProduct