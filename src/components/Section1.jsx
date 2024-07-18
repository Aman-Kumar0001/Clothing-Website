import React from 'react'

const Section1 = () => {
    return (
        <>
            <div id="carouselExampleCaptions" class="carousel slide sec1" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner fw-bold">
                    <div class="carousel-item active">
                        <img src="https://templatemo.com/templates/templatemo_546_sixteen_clothing/assets/images/slide_01.jpg" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block" style={{marginBottom:"250px"}}>
                            <h5 className='text-danger'>BEST OFFER</h5>
                            <h1>New Arrivals On Sale</h1>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://templatemo.com/templates/templatemo_546_sixteen_clothing/assets/images/slide_02.jpg" class="d-block w-100" alt="..."/>
                            <div class="carousel-caption d-none d-md-block" style={{marginBottom:"250px"}}>
                                <h5 className='text-danger'>Flash Deals</h5>
                                <h1>Get your best products</h1>
                            </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://templatemo.com/templates/templatemo_546_sixteen_clothing/assets/images/slide_03.jpg" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block" style={{marginBottom:"250px"}}>
                            <h5 className='text-danger'>Last Minute</h5>
                            <h1>Grab last minute deals</h1>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Section1