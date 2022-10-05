import React from "react";
import { Carousel } from "react-bootstrap";
import siginbanner1 from "../../assets/sigin_banner_1.png";
import siginbanner2 from "../../assets/sigin_banner_2.png";
import siginbanner3 from "../../assets/sigin_banner_3.png";

function SignInBannerComponent() {
  return (
    <div>
      <div>
        <Carousel className="sigin-banner">
          <Carousel.Item>
            <div className="">
              <div className="d-flex justify-content-center">
                <img
                  src={siginbanner1}
                  alt="bannerImage1"
                  className=""
                  height="250px"
                />
              </div>
              <div className="d-flex justify-content-center">
                <div className="text-white p-5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </div>
                <br />
                <br />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="">
              <div className="d-flex justify-content-center">
                <img
                  src={siginbanner2}
                  alt="bannerImage1"
                  className=""
                  height="250px"
                />
              </div>
              <div className="d-flex justify-content-center">
                <div className="text-white p-5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </div>
                <br />
                <br />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="">
              <div className="d-flex justify-content-center">
                <img
                  src={siginbanner3}
                  alt="bannerImage1"
                  className=""
                  height="250px"
                />
              </div>
              <div className="d-flex justify-content-center">
                <div className="text-white p-5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </div>
                <br />
                <br />
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default SignInBannerComponent;
