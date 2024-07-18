import React from 'react'

const Contact_section2 = () => {
    return (
        <>
            <div className='container mt-5 pt-5'>
                <div className="row mt-5">
                    <h1>Our Location on Maps</h1>
                    <hr className='mt-1' />
                </div>
                <div className="row px-3 mb-5 pb-5">
                    <div className="col">
                        <img src="https://templatemo.com/templates/templatemo_546_sixteen_clothing/assets/images/feature-image.jpg" alt="" />
                    </div>
                    <div className="col mt-5">
                        <h5 style={{ color: "#1a6692" }}>About our office</h5>
                        <p className="mt-2" style={{ fontSize: "18px" }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum iste culpa recusandae sit! Sed quibusdam nihil cumque nesciunt <br /><br /> quidem numquam ratione similique, repellendus saepe amet deserunt deleniti, incidunt blanditiis veritatis!
                        </p>
                        <div className="icons">
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-linkedin-in"></i>
                        <i class="fa-brands fa-behance"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact_section2