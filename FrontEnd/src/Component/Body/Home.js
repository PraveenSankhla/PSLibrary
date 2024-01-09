import { useEffect, useState } from 'react';
import Card from '../Component/Card';
// import CardData from '../Component/CardData';

const Home = () => {
  
  const [Carddata, setCarddata] = useState([])
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/library');
        const jsonData = await response.json();
        setCarddata(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();  
  })

  return (
    <>
      <section style={{ marginTop: "20px", marginBottom: "10px" }}>
        <p className="fw-bolder text-center m-1" style={{ fontSize: '70px' }}> PS Library </p>
        <p className="text-center" style={{ fontSize: "30px" }}>Please scroll down</p>
        <p className="text-center text-danger" style={{ fontSize: "70px", transform: "rotate(90deg)", marginTop: "-40px" }}>
          &#10097;
        </p>
      </section>
      <section className="bg-100">
        <div className="container">
          <div className="row h-100 justify-content-center">
            <div className="row mt-5 h-100 justify-content-center">
              {Carddata.map(ele => {
                return (
                  <Card
                    key ={ele.id} 
                    img={ele.img}
                    heading={ele.heading}
                    createdby={ele.createdby}
                    firstapper={ele.firstapper}
                    woweffect={ele.woweffect}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </section>


      <section id="sec-testimonials" className="sec-testimonials">
        <div className="container">
          <h1 className="h4 mb-5 text-center">Words from our members</h1>

          <div id="carouselIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselIndicators" data-slide-to="1"></li>
              <li data-target="#carouselIndicators" data-slide-to="2"></li>
            </ol>

            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                <div className="row justify-content-center">
                  <div className="col-md-6">
                    <blockquote className="blockquote">
                      <small>The vibe here is bright and very optimistic. Clients love to visit us here and every day we make new friends and contacts with other start-ups. Being a a member is our secret super power.</small>

                      <footer className="blockquote-footer mt-2">Timothy Wilson, CTO</footer>
                    </blockquote>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="row justify-content-center">
                  <div className="col-md-6">
                    <blockquote className="blockquote">
                      <small>I've been a memeber for over 3 years. We have always been welcomed by friendly faces and helpful staff. This co-working space has everything we need from Wi-Fi to fresh and delicious coffee.</small>

                      <footer className="blockquote-footer mt-2">Ziva Stark, CEO</footer>
                    </blockquote>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="row justify-content-center">
                  <div className="col-md-6">
                    <blockquote className="blockquote">
                      <small>I joined since its opening and I couldn't have found a better working space. Being a member is so inspiring and I love the work environment: spacious, bright and full of entrepreneurs like me!</small>

                      <footer className="blockquote-footer mt-2">Teresa Swanson, CEO</footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>

            <a className="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
              <span className="fa fa-angle-left fa-2x"></span>
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>

            <a className="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
              <span className="fa fa-angle-right fa-2x"></span>
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;