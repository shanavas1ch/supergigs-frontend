import { Button } from "react-bootstrap";
import React from "react";
import { Carousel } from "react-bootstrap";
import bannerImage1 from "../../assets/bannerImage1.png";

function BannerComponent() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <div className="row pt-2">
            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2"></div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <img
                src={bannerImage1}
                alt="bannerImage1"
                className="bannerImage"
              />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 d-flex justify-content-center align-items-center">
              <div className=" ">
                <h3 className="banner-heading">
                  <strong>
                    The World's Agile Talent Platform that perfectly fits your
                    business needs.
                  </strong>
                </h3>
                <br />
                <span>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </span>
                <br />
                <br />
                <div className="buttons">
                  <div className="row">
                    <div className="col">
                      <Button
                        className="button-basic width-inherit"
                        variant="primary"
                      >
                        Hire Talents
                      </Button>
                    </div>
                    <div className="col">
                      <Button
                        className="button-basic signin width-inherit"
                        variant="primary"
                        href="/signin"
                      >
                        Sign In
                      </Button>
                    </div>
                    <div className="col"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-1 col-lg-1"></div>
          </div>
        </Carousel.Item>
        {/* <Carousel.Item>
          <img src={bannerImage1} alt="bannerImage1" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={bannerImage1} alt="bannerImage1" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
    </div>
  );
}

export default BannerComponent;
