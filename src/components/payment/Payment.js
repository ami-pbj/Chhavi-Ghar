import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { Link, useNavigate } from 'react-router-dom';
import BookingProduct from '../bookingproduct/BookingProduct';
import './Payment.css';
import { useStateValue } from '../../StateProvider';
import { getBasketTotal } from '../../reducer';
import CurrencyFormat from 'react-currency-format';
import axios from '../../axios';
import { db } from '../../firebase';


const Payment = () => {

    const [{ basket, user }, dispatch] = useStateValue();

    const navigate = useNavigate();

    // const stripe = loadStripe('secret_key');
    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        
        // generate the special stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // Stripe expects the total in a currencies subunits => Rupees to Paisa
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket])

    console.log('THE SECRET IS >>>', clientSecret)
    console.log('👱', user)

    const handleSubmit = async (event) => {
        // Do all stripe stuff...
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // paymentIntent = payment confirmation
            console.log({ user, basket, paymentIntent })

            // adding orders on order page with user details
            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                })
                

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: 'EMPTY_BASKET'
            })

            // redirect the page and never back to payment page again since the payment is done 
            navigate('/orders', { replace: true })
        })
    }

    const handleChange = event => {
        // card element work
        // listen for changes in the CardElement
        // and display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

  return (
    <div className='payment'>
        <div className="payment__container">

            {/* Number of items in cart / basket */}
            <h1>
                Box Office Booking  (
                    <Link to='/booking' style={{fontSize: 25, verticalAlign: 'middle'}}>
                        {basket?.length} tickets
                    </Link>
                )
            </h1>

            <div className="payment__section">
                <div className="payment__title">
                    <h4>User</h4>
                </div>
                <div className="payment__address">
                    <p>{!user ? "Please Sign In before making a booking !" : user?.email}</p>
                    
                    <p></p>
                </div>
            </div>

            {/* Payment Section => Delivery Address */}
            <div className="payment__section">
                <div className="payment__title">
                    <h4>Nearest Theatre</h4>
                </div>
                <div className="payment__address">
                    <p>2023 JavaScript Road</p>
                    <p>Developers Colony, Stack World</p>
                    <p></p>
                </div>
            </div>

            {/* Payment Section => Review Items */}
            <div className="payment__section">
                <div className="payment__title">
                    <h4>Review Tickets</h4>
                </div>
                <div className="payment__items">
                    {/* all the selected products */}
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

            {/* Payment Section => Payment Method */}
            <div className="payment__section">
                <div className="payment__title">
                    <h4>Payment Method</h4>
                </div>
                <div className="payment__details">
                    <p className='payment__card'>Card Details</p>
                    {/* Stripe Work for Payment */}
                    
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange}/>

                        <div className="payment__priceContainer">
                            <CurrencyFormat
                                renderText={(value) => (
                                    <h4>
                                        Booking Total: {value}
                                    </h4>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"₹ "}
                            />

                            <button disabled={processing || disabled || succeeded}>
                                <span>
                                    {processing ? <p>Processing</p> : "Book Now"}
                                </span>
                            </button>
                        </div>

                        {/* Errors */}
                        {error && <div>{error}</div>}
                    </form>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Payment