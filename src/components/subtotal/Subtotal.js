import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../StateProvider';
import { getBasketTotal } from '../../reducer';
import { useNavigate } from 'react-router-dom';
import Checkbox from './Checkbox';


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
                    <h5>
                        Subtotal ({ basket?.length } items): <strong>{value}</strong>
                    </h5>

                    {/* Checkbox => Food and Beverage Order */}
                    <small className='subtotal__gift'>
                        <Checkbox />
                        {/* <Checkbox label1="I agree to terms & conditions" checked={true} disabled /> */}

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