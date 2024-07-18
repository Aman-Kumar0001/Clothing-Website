import React from 'react'

const Contact_section3 = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <h1 className='mb-3'>Send us a Message</h1>
                    <hr />
                </div>
                <div className="row">
                    <div className="col form">
                        <input type="text" placeholder='Full Name' /><br /><br />
                        <input type="email" placeholder='E-Mail Address' /><br /><br />
                        <input type="text" placeholder='Subject' /><br /><br />
                        <textarea placeholder='Your Message'></textarea><br /><br />
                        <span className="btn btn-danger">Send Message</span>
                    </div>
                    <div className="col">
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Accordion Title One
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing s sequi nam eius quas nesciunt suscipit? Mollitia, reiciendis!</p>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing s sequi nam eius quas nesciunt suscipit? Mollitia, reiciendis!</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Second Title Here
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing s sequi nam eius quas nesciunt suscipit? Mollitia, reiciendis!</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing s sequi nam eius quas nesciunt suscipit? Mollitia, reiciendis!</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Accordion Title Three
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing s sequi nam eius quas nesciunt suscipit? Mollitia, reiciendis!</p>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing s sequi nam eius quas nesciunt suscipit? Mollitia, reiciendis!</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Fourth Accordion Title
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing s sequi nam eius quas nesciunt suscipit? Mollitia, reiciendis!</p>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing s sequi nam eius quas nesciunt suscipit? Mollitia, reiciendis!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact_section3