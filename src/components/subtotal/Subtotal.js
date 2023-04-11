import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../StateProvider';
import { getBasketTotal } from '../../reducer';
import { useNavigate } from 'react-router-dom';


const Subtotal = () => {

    const navigate = useNavigate();

    const [{ basket }, dispatch] = useStateValue();

  return (
    <div className='subtotal__title'>
        <h1>BOX OFFICE</h1>
        <div className='subtotal'>
        <CurrencyFormat
            renderText={(value) => (
                <>
                    <p>
                        Subtotal ({ basket?.length } items): <strong>{value}</strong>
                    </p>
                    <small className='subtotal__gift'>
                        <input type="checkbox"/>
                        Add Food and Beverage
                    </small>
                    <p className='subtotal__food'>
                        ▶︎ Order for Food and Beverage will be deliver on same booked theatre.
                    </p>
                    
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹ "}
        />

        
    </div>
    {/* Checkout Button  */}
    <button onClick={e => navigate('/payment')}>
            Book Now
        </button>
    </div>
  )
}

export default Subtotal