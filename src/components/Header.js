import React from 'react'

const Header = (props) => {
    return (
        <div>
            <div>
                <h1>
                    Home Page
                </h1>
            </div>
            <div className='cart-button'>
                <span className='cart-count'>{props.data.length}</span>
                <img src='https://static.vecteezy.com/system/resources/previews/012/414/422/non_2x/add-shopping-cart-icon-free-png.png' alt='add to cart' />
            </div>
        </div>
    )
}

export default Header