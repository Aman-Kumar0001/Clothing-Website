import React from 'react'
import Footer from './Footer'

const About_Section3 = (props) => {
  return (
    <>
        <div className="container">
            <div className="row">
                <h3 className='mb-3'>{props.name}</h3>
                <hr />
            </div>
            <div className="row my-5 py-5">
                <div className="col">
                    <img src="https://templatemo.com/templates/templatemo_546_sixteen_clothing/assets/images/client-01.png" alt="" />
                </div>
                <div className="col">
                    <img src="https://templatemo.com/templates/templatemo_546_sixteen_clothing/assets/images/client-01.png" alt="" />
                </div>
                <div className="col">
                    <img src="https://templatemo.com/templates/templatemo_546_sixteen_clothing/assets/images/client-01.png" alt="" />
                </div>
                <div className="col">
                    <img src="https://templatemo.com/templates/templatemo_546_sixteen_clothing/assets/images/client-01.png" alt="" />
                </div>
                <div className="col">
                    <img src="https://templatemo.com/templates/templatemo_546_sixteen_clothing/assets/images/client-01.png" alt="" />
                </div>
            </div>
            <div className="row">
                <hr />
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default About_Section3