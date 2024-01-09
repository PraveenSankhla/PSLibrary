import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="footer p-2 fixed-bottom">
                <div className="container">
                    <ul className="list-inline mb-0 text-center">
                        <li className="list-inline-item">
                            <a href="">fb</a>
                        </li>

                        <li className="list-inline-item">
                            <a href="">gmail</a>
                        </li>

                        <li className="list-inline-item">
                            <a href="">instagram</a>
                        </li>

                        <li className="list-inline-item">
                            <a href="">message</a>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    );
}

export default Footer;