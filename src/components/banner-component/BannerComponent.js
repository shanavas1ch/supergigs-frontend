import { Button } from "react-bootstrap";
import React from "react";
import { Carousel } from "react-bootstrap";
import bannerImage1 from "../../assets/bannerImage1.png";
import bannerImage2 from "../../assets/bannerImage2.png";
import bannerImage3 from "../../assets/bannerImage3.png";
import "./bannercomp.css";
import { Link } from "react-router-dom";
import { bannerContent } from "../../contents/landing-page/banner-content";


function BannerComponent() {
  return (
    <div>
      <Carousel className="carousal">
        <Carousel.Item>
          <div className="row pt-2">
            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2"></div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 ">
              <img
                src={bannerImage1}
                alt="bannerImage1"
                className="bannerImage"
              />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 ">
              <h3 className="banner-heading">
                <strong>
                  {/* The World's Agile Talent Platform that perfectly fits your
                  business needs. */}
                  {bannerContent.banner1.mainText}
                </strong>
              </h3>
              <br />
              <span>
                {/* Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s. */}
                {bannerContent.banner1.subText}
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
                    >
                      <Link to="/signin">Sign In</Link>
                    </Button>
                  </div>
                  <div className="col"></div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-1 col-lg-1"></div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row pt-2">
            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2"></div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <img
                src={bannerImage2}
                alt="bannerImage1"
                className="bannerImage"
              />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 ">
              <div className=" ">
                <h3 className="banner-heading">
                  <strong>
                    {/* The World's Agile Talent Platform that perfectly fits your
                    business needs. */}
                    {bannerContent.banner2.mainText}
                  </strong>
                </h3>
                <br />
                <span>
                  {/* Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book */}
                  {bannerContent.banner2.subText}
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
                      >
                        <Link to="/signin">Sign In</Link>
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
        <Carousel.Item>
          <div className="row pt-2">
            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2"></div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <img
                src={bannerImage3}
                alt="bannerImage1"
                className="bannerImage"
              />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 ">
              <div className=" ">
                <h3 className="banner-heading">
                  <strong>
                    {/* The World's Agile Talent Platform that perfectly fits your
                    business needs. */}
                    {bannerContent.banner3.mainText}
                  </strong>
                </h3>
                <br />
                <span>
                  {/* Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book */}
                  {bannerContent.banner3.subText}
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
                      <Link to="/signin">
                        <Button
                          className="button-basic signin width-inherit"
                          variant="primary"
                        >
                          Sign In
                        </Button>
                      </Link>
                    </div>
                    <div className="col"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-1 col-lg-1"></div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default BannerComponent;
