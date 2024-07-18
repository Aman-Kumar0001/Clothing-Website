import React from 'react'
import Contact_section1 from './Contact_section1'
import Contact_section2 from './Contact_section2'
import Contact_section3 from './Contact_section3'
import About_Section3 from './About_Section3'

const Contact = () => {
    return (
        <>
            <Contact_section1 />
            <Contact_section2 />
            <Contact_section3 />
            <div className="mt-5 pt-5">
                <About_Section3 name="Our Happy Customers" />
            </div>
        </>
    )
}

export default Contact