import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import './Orders.css'
import { useStateValue } from '../../StateProvider';
import Order from '../orderdata/OrderData'

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if(user) {
        db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .orderBy('created', 'desc')
            .onSnapshot(snapshot => (
                setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            ))
    } else {
        setOrders([])
    }

  }, [user])

    return (
        <div className='orders'>
            <div className="orders__header">
                <h2>Your Bookings</h2>
                <span className="order__count">
                    {orders.length} {orders.length === 1 ? "Booking " : "Bookings "}
                </span>
            </div>

            <div className='orders__auth'>
                {!user ? <span style={{color: 'red', fontSize: 18}}> You've not Signed In yet !</span> 
                
                :
                
                <span>
                    
                    {orders.length > 0 ? (
                        <>
                            Bookings for <span style={{color: 'green', fontSize: 18}}>{user?.email}</span>
                            
                            {orders?.map(order => (
                                <Order order={order} />
                            ))}
                        </>
                    ) : (
                        <h3 className="no__bookings">No bookings in your Chhavi Ghar Box Office !!<br />Book Now !!</h3>
                    )}
                </span>}

            </div>
        </div>
    )
}

export default Orders