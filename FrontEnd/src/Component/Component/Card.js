import React from 'react';

const Card = (props) => {
    return (
        <>
             <div className="col-lg-4 mb-3" data-aos="fade-right">
              <div className="card h-100 rounded-3 shadow">
                <div className="card-body d-flex flex-column justify-content-around mx-auto" >
                  <div className="text-center">
                    <img
                      src={props.img}
                      className="img-fluid rounded-3"
                      alt=""
                    />
                    <h1 className="mt-">{props.heading}</h1>
                  </div>
                  <ul className="list-unstyled text-center">
                    <li className="mb-4">
                      Created by: <br />
                      <span className="opacity-75">{props.createdby}</span>
                    </li>
                    <li className="mb-4">
                      First appeared: <br />
                      <span className="opacity-75"> {props.firstapper}</span>
                    </li>
                    <li className="mb-4">
                      Wow effect <br />
                      <span className="opacity-75 text-info">{props.woweffect}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
        </>
    );
}

export default Card;