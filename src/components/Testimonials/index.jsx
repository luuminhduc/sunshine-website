import React from "react";
import Photo1 from "../../assets/images/image-emily.jpg";
import Photo2 from "../../assets/images/image-jennie.jpg";
import Photo3 from "../../assets/images/image-thomas.jpg";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h1>Client Testimonials</h1>
      <div className="testimonials_list">
        <div className="testimonials_list_item">
          <img src={Photo1} alt="" />
          <p>
            {" "}
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <h5>Emily R.</h5>
          <small>Marketing Director</small>
        </div>
        <div className="testimonials_list_item">
          <img src={Photo2} alt="" />
          <p>
            {" "}
            Sunnyside’s enthusiasm coupled with their keen interest in our
            brand’s success made it a satisfying and enjoyable experience.
          </p>
          <h5>Thomas S.</h5>
          <small> Chief Operating Officer</small>
        </div>
        <div className="testimonials_list_item">
          <img src={Photo3} alt="" />
          <p>
            {" "}
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>
          <h5>Jennie F.</h5>
          <small>Bussiness owner</small>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
