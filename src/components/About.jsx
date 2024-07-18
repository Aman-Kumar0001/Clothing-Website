import React from 'react'
import About_Section1 from './About_Section1'
import About_Section2 from './About_Section2'
import About_Section3 from './About_Section3'

const About = () => {
  return (
    <>
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://templatemo.com/templates/templatemo_546_sixteen_clothing/assets/images/about-heading.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5 className='text-danger fw-bold'>ABOUT US</h5>
              <h1 style={{ fontSize: "60px" }}>OUR COMPANY</h1>
            </div>
          </div>
        </div>
      </div>
      <About_Section1/>
      <About_Section2/>
      <About_Section3 name="Happy Partners"/>
    </>
  )
}

export default About