import React, { useState } from 'react';
import './Checkout.css'
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import { clearCart } from '../../redux/cartSlice';

const Checkout = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const totalPrice = cartItems.reduce((acc, curr) => {
        return acc + curr.price * curr.qty;
    }, 0);

    const [address, setAddress] = useState({
        name: "",
        phone: "",
        email: "",
        address: "",
        instructions: "",

    })
    const handleAdressChange = (e) => {
        const { name, value } = e.target;
        setAddress(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const isBillingDetailsEmpty = () => {
        const empty = !address.name ||
            !address.phone ||
            !address.email ||
            !address.address
        return empty;
    };

    const [paymentMethod, setPaymentMethod] = useState("cash_on_delivery");
    const [formData, setFormData] = useState({
        paymentMethod: "cash_on_delivery",
        cardHolder: "",
        cardNumber: "",
        expDate: "",
        cvv: ""
    });
    const [errors, setErrors] = useState({});

    const handlePaymentChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const validateForm = () => {
        let errs = {};
        if (paymentMethod !== "cash_on_delivery") {
            if (!formData.cardHolder.trim()) errs.cardHolder = "Cardholder name is required";
            if (!formData.cardNumber.trim() || formData.cardNumber.length < 16) errs.cardNumber = "Card number is invalid";
            if (!formData.expDate.trim() || !formData.expDate.match(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/)) errs.expDate = "Expiry date is invalid";
            if (!formData.cvv.trim() || formData.cvv.length !== 3) errs.cvv = "CVV is invalid";
        }

        setErrors(errs);
        return Object.keys(errs).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (paymentMethod === "cash_on_delivery") {
            navigate('/order-completed')
            dispatch(clearCart())
            return;
        }

        if (validateForm()) {
            navigate('/order-completed')
            dispatch(clearCart())
        }

    };

    function renderCreditCardForm() {
        if (paymentMethod === "cash_on_delivery") {
            return null;
        }
        return (
            <div className='credit-card-form'>
                <form >
                    <div className='card-holder-and-number'>
                        <div className="mb-3">
                            <label htmlFor="cardHolder" className="form-label">
                                Cardholder Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="cardHolder"
                                name='cardHolder'
                                placeholder='Your name'
                                value={formData.cardHolder}
                                onChange={handlePaymentChange}
                            />
                            {errors.cardHolder && <div className="error">{errors.cardHolder}</div>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="cardNumber" className="form-label">
                                Card Number
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="cardNumber"
                                name='cardNumber'
                                placeholder='4000 0000 0000 0000'
                                value={formData.cardNumber}
                                onChange={handlePaymentChange}
                            />
                            {errors.cardNumber && <div className="error">{errors.cardNumber}</div>}
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="expDate" className="form-label">
                            Expiry Date
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="expDate"
                            name='expDate'
                            placeholder='02/27'
                            value={formData.expDate}
                            onChange={handlePaymentChange}
                        />
                        {errors.expDate && <div className="error">{errors.expDate}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cvv" className="form-label">
                            CVV
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="cvv"
                            name='cvv'
                            placeholder='Enter CVV'
                            value={formData.cvv}
                            onChange={handlePaymentChange}
                        />
                        {errors.cvv && <div className="error">{errors.cvv}</div>}
                    </div>

                </form>
            </div>
        );
    }
    const handlePaymentMethodChange = (e) => {
        setPaymentMethod(e.target.value);
    };

    return (
        <React.Fragment>
            <div className='checkout-page-bg'>
                <div className='checkout-page-bg-inner'>
                    <div className='back-btn'>
                        <NavLink to="/">
                            <KeyboardBackspaceOutlinedIcon className='back-icon' />
                        </NavLink>
                    </div>
                    <div className='place-order'>
                        <h2 className='place-order-text'>Place your<p>Order</p></h2>
                    </div>
                </div>
            </div>

            <div className='checkout-page-container'>
                <div className='checkout-page-wrapper'>

                    <div className='checkout-page-left'>
                        <div className='payment-details'>
                            <h4 className='details-title'>Billing Details</h4>
                        </div>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="" className="billing-label">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    value={address.name}
                                    placeholder='Type your name'
                                    className="billing-control"
                                    id="name"
                                    name='name'
                                    required
                                    onChange={handleAdressChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="" className="billing-label">
                                    Your Phone
                                </label>
                                <input
                                    value={address.phone}
                                    type="phone"
                                    className="billing-control"
                                    id="phone"
                                    name='phone'
                                    required
                                    onChange={handleAdressChange}
                                    placeholder='Type your Phone no'
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="" className="billing-label">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    className="billing-control"
                                    value={address.email}
                                    id="email"
                                    name='email'
                                    required
                                    placeholder='Type your Email address'
                                    onChange={handleAdressChange}
                                />

                            </div>
                            <div className="mb-4">
                                <label htmlFor="" className="billing-label">
                                    Your Full Address
                                </label>
                                <input
                                    value={address.address}
                                    type="text"
                                    className="billing-control"
                                    id="address"
                                    required
                                    name='address'
                                    placeholder='Type your Full address'
                                    onChange={handleAdressChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="" className="billing-label">
                                    Special Instruction
                                </label>
                                <input
                                    value={address.instructions}
                                    type="text-area"
                                    row="4"
                                    className="billing-control"
                                    id="instruction"
                                    name='instruction'
                                    placeholder='Type your Special Instruction here'
                                    onChange={handleAdressChange}
                                />
                            </div>


                        </form>
                    </div>

                    <div className='checkout-page-right'>

                        <div className='payment-details'>
                            <h4 className='details-title'>Payment</h4>
                        </div>
                        <div className='checkout-payment-bg'>

                            <div className='checkout-payment'>
                                <h3>Your Order</h3>

                                <div className='order-details'>
                                    <div>
                                        <h5>Product</h5>
                                    </div>
                                    <div>
                                        <h5>Subtotal</h5>
                                    </div>
                                </div>


                                {cartItems.map((item) => (
                                    <div className='order-details2' key={item._id}>
                                        <div>
                                            <p>{item.title}</p>
                                        </div>
                                        <div>
                                            <p>${item.price}</p>
                                        </div>
                                    </div>
                                ))}

                                {cartItems && cartItems.length > 0 ? (
                                    <div className='order-details3'>
                                        <div>
                                            <p>Total</p>
                                        </div>
                                        <div>
                                            <span>${totalPrice}</span>
                                        </div>
                                    </div>
                                ) : <div style={{
                                    fontSize: "20px",
                                    marginTop: "30px",
                                    marginBottom: "40px",
                                    fontStyle: 'italic',
                                    fontFamily: 'Poppins',
                                    color: "#d3d3d3",
                                    opacity: ".4"
                                }}>
                                    Please add something in your cart
                                </div>}

                            </div>

                            {cartItems && cartItems.length > 0 && (
                                <div className='checkout-payments'>
                                    <ul className="payment_methods">

                                        <li className="">
                                            <input
                                                onChange={handlePaymentMethodChange}
                                                type="radio"
                                                className="input-radio"
                                                name="paymentMethod"
                                                value="online_payment"
                                                checked={paymentMethod === 'online_payment'}
                                            />
                                            <label >Online Payment </label>
                                            {paymentMethod === 'online_payment' && (
                                                <div>
                                                    <p>
                                                        Pay securely online using your credit card. All transactions are encrypted for your safety.

                                                    </p>
                                                    {renderCreditCardForm()}
                                                </div>
                                            )}
                                        </li>
                                        <li className="">
                                            <input
                                                onChange={handlePaymentMethodChange}
                                                type="radio"
                                                className="input-radio"
                                                name="paymentMethod"
                                                value="cash_on_delivery"
                                                checked={paymentMethod === 'cash_on_delivery'}

                                            />
                                            <label htmlFor="">Cash on delivery</label>
                                            {paymentMethod === 'cash_on_delivery' && (
                                                <div>
                                                    <p>
                                                        Pay with cash when your order arrives. Please have the exact amount ready, as our delivery agents do not carry change.

                                                    </p>
                                                </div>
                                            )}
                                        </li>

                                    </ul>
                                </div>
                            )}


                            <div className='personal-details-text'>
                                <p>
                                    Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
                                </p>
                                <button
                                    type='submit'
                                    className='place-order-btn'
                                    disabled={isBillingDetailsEmpty()}
                                    onClick={handleSubmit}>Place Order</button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            {/* <h3>Checkout Details</h3> */}
        </React.Fragment >
    )
}

export default Checkout