import React from 'react'

const Cards = (props) => {
    return (
        <>
            <div class="card1">
                <div className="img">
                    <img src={props.img} alt="" />
                </div>

                <div class="infos">
                    <p class="date-time">
                    Tittle goes here
                    <span className='ms-auto'>{props.price}</span>
                    </p>
                    <p class="description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur.
                    </p>
                </div>
                <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <span className='ms-auto'>Reviews({props.review})</span>
                </div>
            </div>
        </>
    )
}

export default Cards