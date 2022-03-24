import React from 'react';
import "../CategoryCSS/CategoryCart.css";

const CategoryCart = ({icon, title}) => {
    return (
        <div className="categoryCart">
            <i className="categoryCart__icon">
            <img src={icon} alt={title} />
            </i>
            <h6>{title}</h6>
        </div>
    );
}


export default CategoryCart;
