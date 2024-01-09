import React from 'react';

const Contact = () => {
    return (
        <>
            <section id="sec-contact" className="sec-contact pt-5 pb-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-7">
                            <h1 className="h4">Get in touch with us!</h1>

                            <form action="" method="">
                                <fieldset className="form-group m-4">
                                    <label htmlFor="formName">Your Name:</label>
                                    <input id="formName" className="form-control" type="text" placeholder="Your Name" required />
                                </fieldset>

                                <fieldset className="form-group m-4">
                                    <label htmlFor="formEmail1">Email address:</label>
                                    <input id="formEmail1" className="form-control" type="email" placeholder="Enter email" required />
                                </fieldset>

                                <fieldset className="form-group m-4">
                                    <label htmlFor="formMessage">Your Message:</label>
                                    <textarea id="formMessage" className="form-control" rows="3" placeholder="Your message" required></textarea>
                                </fieldset>

                                <fieldset className="form-group text-center m-4a">
                                    <button className="btn btn-primary" type="submit">Send Message</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;