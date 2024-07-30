import React from 'react'

const Section3 = () => {
    return (
        <div className='container mt-5 pt-5'>
            <div className="row mt-5">
                <h1>About TrendyThreads</h1>
                <hr className='mt-1' />
            </div>
            <div className="row px-3 mb-5 pb-5">
                <div className="col mt-5">
                    <h5 style={{ color: "#1a6692" }}>Looking for the best products?</h5>
                    <p className="mt-2" style={{ fontSize: "18px" }}>
                        <span style={{ color: "#1a6692" }}>This template </span>is free to use for your business websites. However, you have no permission to redistribute the downloadable ZIP file on any template collection website.<span style={{ color: "#1a6692" }}>Contact </span> us for more info.
                    </p>
                    <ul>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                    </ul>
                    <button type="button" class="btn btn-danger">Read More</button>
                </div>
                <div className="col">
                    <img src="https://templatemo.com/templates/templatemo_546_sixteen_clothing/assets/images/feature-image.jpg" alt="" />
                </div>
            </div>
            <hr />
            <div className="row justify-content-between  row-cols-2 row-cols-lg-5 mt-5 py-5 mb-5 mx-auto" style={{background:"rgb(206 204 204 / 31%)"}}>
                <div className="col col-8">
                    <h5 style={{ color: "#1a6692" }}>Creative & Unique TrendyThreads Products</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque corporis amet elite author nulla.</p>
                </div>
                <div className="col ms-auto">
                    <button type="button" class="btn btn-danger">Purchase Now</button>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Section3