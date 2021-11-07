import React from "react";
// import DeskTopDesign from '../../assets/images/desktop/image-graphic-design.jpg';
// import MobileDesign from '../../assets/images/mobile/image-graphic-design.jpg';
// import DeskTopPhto from '../../assets/images/desktop/image-photography.jpg';
// import MobilePhoto from '../../assets/images/mobile/image-photography.jpg';

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner_block banner_block_design">
        <h2> Graphic design</h2>
        <p>
          Great design makes you memorable. We deliver artwork that underscores
          your brand message and captures potential clients’ attention.
        </p>
      </div>
      <div className="banner_block banner_block_photo">
        <h2>Photography</h2>
        <p>
          Increase your credibility by getting the most stunning, high-quality
          photos that improve your business image.
        </p>
      </div>
    </div>
  );
};

export default Banner;
