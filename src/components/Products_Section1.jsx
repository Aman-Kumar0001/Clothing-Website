import React from 'react'
import Section2 from './Section2'
import Footer from './Footer'

const Products_Section1 = () => {
    return (
        <>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://templatemo.com/templates/templatemo_546_sixteen_clothing/assets/images/products-heading.jpg" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5 className='text-danger'>NEW ARRIVALS</h5>
                            <h1 style={{ fontSize: "60px" }}>SALE PRODUCTS</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-5 py-5">
                <Section2 />
            </div>
            <div className="container">
                <hr />
                <Footer />
            </div>
        </>
    )
}

export default Products_Section1