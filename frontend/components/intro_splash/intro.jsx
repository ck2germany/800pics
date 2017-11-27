import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div className="home">
    <div className="splash-img-frame">
      <img
        className="splash-img"
        src="http://res.cloudinary.com/studio-27/image/upload/v1511731666/landscapes/JD/jd_photos-idaho_3.jpg"
        alt="splash"></img>
        <div className="splash-img-text">
          <h1>Landscapes, a website devoted to photography</h1>
          <h3>Rediscover your love of nature</h3>
            <div className="">
                <Link className="splash-button" to='/signup'>Join Landscapes</Link>
            </div>

        </div>


    </div>


  </div>
);
