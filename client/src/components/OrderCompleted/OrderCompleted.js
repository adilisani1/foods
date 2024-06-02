import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './order.css'

const OrderCompleted = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/');
        }, 6000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="order-completed">
            <h1>Thank You!</h1>
            <p>Your order has been placed successfully.</p>
            <div className='redirect'>
                <p style={{ marginBottom: 0 }}>You will be redirected to the home page in 5 seconds.</p>
            </div>
        </div>
    );
};

export default OrderCompleted;
