import React from "react";
import Desktop1 from "../../assets/images/desktop/image-gallery-cone.jpg";
import Desktop2 from "../../assets/images/desktop/image-gallery-milkbottles.jpg";
import Desktop3 from "../../assets/images/desktop/image-gallery-orange.jpg";
import Desktop4 from "../../assets/images/desktop/image-gallery-sugarcubes.jpg";
import Mobile1 from "../../assets/images/mobile/image-gallery-cone.jpg";
import Mobile2 from "../../assets/images/mobile/image-gallery-milkbottles.jpg";
import Mobile3 from "../../assets/images/mobile/image-gallery-orange.jpg";
import Mobile4 from "../../assets/images/mobile/image-gallery-sugar-cubes.jpg";

const Photos = () => {
  return (
    <div className="photos">
      <div className="photos_list">
        <img src={Desktop1} className="desktop" alt="" />
        <img src={Mobile1} className="mobile" alt="" />
      </div>
      <div className="photos_list">
        <img src={Desktop2} className="desktop" alt="" />
        <img src={Mobile2} className="mobile" alt="" />
      </div>
      <div className="photos_list">
        <img src={Desktop3} className="desktop" alt="" />
        <img src={Mobile3} className="mobile" alt="" />
      </div>
      <div className="photos_list">
        <img src={Desktop4} className="desktop" alt="" />
        <img src={Mobile4} className="mobile" alt="" />
      </div>
    </div>
  );
};

export default Photos;
