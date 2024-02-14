import React from 'react'

const Home = (props) => {
console.log("Home", props)
    return (
        <div>
            <div>
                <h1>
                    Home Page
                </h1>
            </div>
            <div className='cart-button'>
                <img src='https://static.vecteezy.com/system/resources/previews/012/414/422/non_2x/add-shopping-cart-icon-free-png.png' alt='add to cart' />
            </div>
            <div className='card-wrapper'>
                <div className='img-wrapper item'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwxnBzknPfuD0IyDqO4IuSvxKib8tK-gCbww&usqp=CAU' alt='mobile phone' />
                </div>
                <div className='text-wrapper item'>
                    <h4>
                        Iphone 15 Max Pro
                    </h4>
                    <span>
                        Price: 1500$
                    </span>
                </div>
                <div className='btn-wrapper'>
                    <button onClick={()=>
                    props.addCartHandlar({price: 10000, name: "Iphone15" })
                    }>
                        Add to card
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home