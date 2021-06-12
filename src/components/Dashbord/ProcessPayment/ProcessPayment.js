import React from 'react';
import SplitCardForm from './SplitCardForm/SplitCardForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';



const stripePromise = loadStripe('pk_test_51IsmhXJoZUCv3AVnl8Pm2repmwqdbxpNpB24pSkjeC9hY5U39r7JeispJoDJCuZqGZjTlGgObwXnG6PQUOPympSk008pqJIX3U');

const ProcessPayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
            <SplitCardForm handlePayment={handlePayment}></SplitCardForm>
        </Elements>
    );
};

export default ProcessPayment;