import React from "react";
import { Form, ProgressBar } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { FiUser } from "react-icons/fi";

function Page2Section2() {
  return (
    <div>
      <section>
        <div className="progress-bar pt-3 pb-2">
          <ProgressBar now={10} />
        </div>
        <h5 className="freelance-heading">Your Freelancing Journey</h5>
        <p className="smaller-text pt-1 pb-1">
          Tell Us A Little About Freelancing Experience
        </p>
        <p className="smaller-text signIn-font pt-2 pb-2">
          How Long Have You Been Freelancing?
        </p>
        <div className="form-wrapper">
          <form>
            <div className="d-flex">
              {" "}
              <Form.Check
                type={"radio"}
                id={`default-`}
                label={"New to freelancing (0-1 year)"}
                className="form-control margin-right"
              />
              <Form.Check
                type={"radio"}
                id={`default-`}
                label={"2-5 years"}
                className="form-control"
              />
            </div>
            <div className="d-flex pt-2">
              {" "}
              <Form.Check
                type={"radio"}
                id={`default-`}
                label={"5-10 years"}
                className="form-control margin-right"
              />
              <Form.Check
                type={"radio"}
                id={`default-`}
                label={"10+ years"}
                className="form-control"
              />
            </div>
            <div className="">
              <label className="pt-2 pb-1 signIn-font w-100 margin-right">
                {" "}
                Title
              </label>
              <input
                type="text"
                className="form-control "
                placeholder="Title"
              />
            </div>
            <div className="d-flex pt-2 pb-2">
              <div className="w-100 margin-right">
                <label className="pb-1 signIn-font  "> Primary Skills</label>
                <select className="form-control">
                  <option>choose</option>
                  <option>choose</option>
                </select>
              </div>
              <div className="w-100 margin-right">
                <label className="pb-1 signIn-font  ">
                  {" "}
                  Primary Skills Experience
                </label>
                <select className="form-control">
                  <option>choose</option>
                  <option>choose</option>
                </select>
              </div>
            </div>
            <div className="other-skills">
              <label className="pt-2 pb-1 signIn-font w-100 margin-right">
                {" "}
                Other Skills
              </label>
              <input
                type="text"
                className="form-control "
                placeholder="Title"
              />
            </div>
            <div className="popular-skills">
              <label className="pb-1 signIn-font  "> Popular Skills</label>
              <div className="d-flex">
                <div className="form-control w-25 d-flex margin-right justify-content-between">
                  <small>HTML,CSS</small>
                  <div className="">
                    <AiOutlinePlus />
                  </div>
                </div>
                <div className="form-control w-25 d-flex margin-right justify-content-between">
                  <small>Sketch</small>
                  <div className="">
                    <AiOutlinePlus />
                  </div>
                </div>
                <div className="form-control w-25 d-flex margin-right justify-content-between">
                  <small>Sketch</small>
                  <div className="">
                    <AiOutlinePlus />
                  </div>
                </div>
                <div className="form-control w-25 d-flex margin-right justify-content-between">
                  <small>Sketch</small>
                  <div className="">
                    <AiOutlinePlus />
                  </div>
                </div>
                <div className="form-control w-25 d-flex margin-right justify-content-between">
                  <small>Sketch</small>
                  <div className="">
                    <AiOutlinePlus />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Page2Section2;
