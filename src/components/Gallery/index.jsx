import React from "react";
import DesktopTransform from "../../assets/images/desktop/image-transform.jpg";
import MobileTransform from "../../assets/images/mobile/image-transform.jpg";
import DesktopStandout from "../../assets/images/desktop/image-stand-out.jpg";
import MobileStandout from "../../assets/images/mobile/image-stand-out.jpg";

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="gallery_block first">
        <div className="gallery_block_text block">
          <div className="text-container">
            <h2> Transform your brand</h2>
            <p>
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <button>Learn more</button>
          </div>
        </div>
        <div className="gallery_block_img block">
          <img className="img-desktop" src={DesktopTransform} alt="" />
          <img className="img-mobile" src={MobileTransform} alt="" />
        </div>
      </div>

      <div className="gallery_block">
        <div className="gallery_block_img block">
          <img className="img-desktop" src={DesktopStandout} alt="" />
          <img className="img-mobile" src={MobileStandout} alt="" />
        </div>
        <div className="gallery_block_text block">
          <div className="text-container">
            <h2> Transform your brand</h2>
            <p>
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <button>Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
