import React from 'react'

const Home = (props) => {
    console.log("Home", props)
    return (
        <div>
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
                    <button onClick={() =>
                        props.addCartHandlar({ price: 10000, name: "Iphone15" })
                    }>
                        Add to card
                    </button>
                </div>
                   <br/>
                <div className='remove-btn-wrapper'>
                    <button onClick={() =>
                        props.removeCartHandlar({ price: 10000, name: "Iphone15" })
                    }>
                        Remove Item
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home