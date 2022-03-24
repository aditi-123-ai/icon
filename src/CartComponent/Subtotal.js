import React from 'react';
import "../CartCSS/Subtotal.css";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import CheckIcon from '@material-ui/icons/Check';
import { Link } from 'react-router-dom';
// 
function Subtotal({checkout}) {
    return (
        <div className="subtotal__detail">
            <div className="subtotal__details--header">
                <h4>Cart Totals</h4>
            </div>
            <div className="subtotal__details--box">
                <div className="subtotal__subtotal subtotal__flex">
                    <div className="subtotal__subtotal--left">
                        <h5>Subtotal</h5>
                    </div>
                    <div className="subtotal__subtotal--right">
                        <p>+ $17.55</p>
                    </div>
                </div>
                <div className="subtotal__shipping subtotal__flex">
                    <div className="subtotal__shipping--left">
                        <h5>Shipping</h5>
                    </div>
                    <div className="subtotal__shipping--right">
                        <p>+ $2.45</p>
                    </div>
                </div>
                <div className="subtotal__discount subtotal__flex">
                    <div className="subtotal__discount--left">
                        <h5>Discount</h5>
                    </div>
                    <div className="subtotal__discount--right">
                        <p>- $0.00</p>
                    </div>
                </div>
                <div className="subtotal__total subtotal__flex">
                    <div className="subtotal__total--left">
                        <h5>Total</h5>
                    </div>
                    <div className="subtotal__total--right">
                        <p>$20.55</p>
                    </div>
                </div>
            </div>
            <div className="subtotal__button">
                {checkout ? <Link to="/orders">Place Order <CheckIcon /></Link> : <Link to="/checkout">Proceed to Checkout <ArrowRightAltIcon /></Link>}
            </div>
        </div>
    )
}

export default Subtotal;
