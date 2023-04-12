import React from 'react';
import './OrderData.css';
import moment from 'moment';
import BookingProduct from '../bookingproduct/BookingProduct';
import CurrencyFormat from 'react-currency-format';
import { Link } from 'react-router-dom';


const Order = ({ order }) => {
  return (
    <div className='order'>
        <h4>Bookings</h4>
        
        <div className="booking__address">
            <small style={{fontWeight: 'bold', fontSize: 20, paddingRight: 20}}>@</small>
            <small style={{padding: 3}}>2023 JavaScript Road,<br/>Developers Colony, Stack World</small>
            {/* <p>Developers Colony, Stack World</p> */}
        </div>

        <div className="booking__address">
            <small style={{fontWeight: 'bold', fontSize: 20, paddingRight: 15}}>🍿</small>
            <p style={{padding: 4}}>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
        </div>
        
        <p className="order__id">
            <p style={{fontWeight: 'bold'}}>Payment ID</p>
            
            <Link to ='https://dashboard.stripe.com/test/payments/{order.id}' style={{ textDecoration: 'none' }}>
            <small style={{color: 'green', padding: 1}}>{order.id}</small>
            </Link>
        </p>

        {order.data.basket?.map(item => (
            <BookingProduct
                id={item.id}
                title={item.title}
                image={item.image}
                info={item.info}
                price={item.price}
                stock={item.stock}
                nostock={item.nostock}
                rating={item.rating}
                hideButton
            />
        ))}

        <CurrencyFormat
            renderText={(value) => (
                <h5 className="order__total" style={{fontWeight: 'bold'}}>Booking Total: {value}</h5>
            )}
            decimalScale={2}
            value={order.data.amount / 100}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
        />

    </div>
  )
}

export default Order