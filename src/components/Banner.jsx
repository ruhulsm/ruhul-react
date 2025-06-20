import React from 'react';
import bannerImg from './assets/banner.jpg'; // Make sure the image exists in /src/assets/

const Banner = () => {
  return (
    <div className="container-fluid bg-light p-5 rounded-3 shadow">
      <div className="row align-items-center">
        <div className="col-md-6 text-center text-md-start">
          <h1 className="display-5 fw-bold">Welcome to Our Website</h1>
          <p className="lead">We provide modern web solutions for your business growth.</p>
          <button className="btn btn-primary btn-lg mt-3">Learn More</button>
        </div>
        <div className="col-md-6 text-center">
          <img
            src={bannerImg}
            alt="Banner"
            className="img-fluid rounded"
            style={{ maxHeight: '300px' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
