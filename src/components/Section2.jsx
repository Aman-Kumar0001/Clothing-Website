import React from 'react'
import Cards from './Cards'

const Section2 = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col">
                    <Cards img='https://templatemo.com/templates/templatemo_546_sixteen_clothing/assets/images/product_01.jpg' price="$25.75" review="23" />
                </div>
                <div className="col">
                    <Cards img='https://templatemo.com/templates/templatemo_546_sixteen_clothing/assets/images/product_02.jpg' price="$30.25" review="21" />
                </div>
                <div className="col">
                    <Cards img='https://templatemo.com/templates/templatemo_546_sixteen_clothing/assets/images/product_03.jpg' price="$20.45" review="36" />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Cards img='https://templatemo.com/templates/templatemo_546_sixteen_clothing/assets/images/product_04.jpg' price="$15.45" review="23" />
                </div>
                <div className="col">
                    <Cards img='https://templatemo.com/templates/templatemo_546_sixteen_clothing/assets/images/product_05.jpg' price="$12.50" review="16" />
                </div>
                <div className="col">
                    <Cards img='https://templatemo.com/templates/templatemo_546_sixteen_clothing/assets/images/product_06.jpg' price="$22.50" review="32" />
                </div>
            </div>
        </div>
    )
}

export default Section2