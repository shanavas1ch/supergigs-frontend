import axios from "axios";
import { React, useState, useEffect } from "react";
import { Form, ProgressBar } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import { BiArrowBack, BiRightArrowAlt } from "react-icons/bi";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";

function Page2Section2() {
  const [selectedOption, setSelectedOptions] = useState([]);
  const [userDetails, setUserDetails] = useState({
    radiobutton: "",
    title: "",
    primaryskills: "",
    primaryexp: "",
    otherSkills: selectedOption,
  });
  const token = localStorage.getItem("accessToken");
  const navigate = useNavigate();
  const options = [
    { value: "html", label: "HTML" },
    { value: "css", label: "CSS" },
    { value: "javascript", label: "Javascript" },
  ];

  const showDefault = () => {
    axios
      .get("https://flex-api.sharetribe.com/v1/api/current_user/show", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(
          "Success:",
          response.data.data.attributes.profile.publicData
        );
        setUserDetails((prevState) => ({
          ...prevState,
          radiobutton:
            response.data.data.attributes.profile.publicData.radiobutton,
          title: response.data.data.attributes.profile.publicData["title"],
          primaryskills:
            response.data.data.attributes.profile.publicData["primaryskills"],
          primaryexp:
            response.data.data.attributes.profile.publicData["primaryexp"],
          otherSkills:
            response.data.data.attributes.profile.publicData["otherSkills"],
        }));

        let otherskill =
          response.data.data.attributes.profile.publicData["otherSkills"];
        console.log(otherskill);
        otherskill.forEach((item) => {
          console.log(item);
          selectedOption.push(item);
        });
        setUserDetails((prevState) => ({
          ...prevState,
          otherSkills: selectedOption,
        }));
        // selectedOption.push(userDetails.otherSkills.replace('[',''));
        console.log(userDetails.otherSkills);
        console.log(userDetails.radiobutton);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const updateUserCall = (userDetails) => {
    axios
      .post(
        "https://flex-api.sharetribe.com/v1/api/current_user/update_profile",
        {
          publicData: userDetails,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log("Success:", response);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  useEffect(() => {
    showDefault();
  }, []);
  const onSubmit = (e) => {
    console.log(userDetails);
    console.log(token);
    updateUserCall(userDetails);
  };
  const handleChangeData = ({ target: { name, value } }) => {
    // console.log(name, value);
    setUserDetails((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSelectChange = (e) => {
    selectedOption.push(e);
    setUserDetails((prevState) => ({ ...prevState, otherSkills: e }));
  };

  const handleClick = (e) => {
    console.log(e);
    let obj = {};
    obj["label"] = e;
    obj["value"] = e;
    selectedOption.push(obj);

    setUserDetails((prevState) => ({
      ...prevState,
      otherSkills: selectedOption,
    }));
  };

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
          <form onSubmit={onSubmit}>
            <div className="d-flex">
              {" "}
              <Form.Check
                type={"radio"}
                id={`default-1`}
                value="new"
                name="radiobutton"
                label={"New to freelancing (0-1 year)"}
                className="form-control margin-right"
                onChange={handleChangeData}
                checked={userDetails.radiobutton == "new" ? true : false}
              />
              <Form.Check
                type={"radio"}
                id={`default-2`}
                name="radiobutton"
                value="twoyears"
                label={"2-5 years"}
                className="form-control"
                onChange={handleChangeData}
                checked={userDetails.radiobutton == "twoyears" ? true : false}
              />
            </div>
            <div className="d-flex pt-2">
              {" "}
              <Form.Check
                type={"radio"}
                id={`default-3`}
                name="radiobutton"
                value="fiveyears"
                label={"5-10 years"}
                className="form-control margin-right"
                onChange={handleChangeData}
                checked={userDetails.radiobutton == "fiveyears" ? true : false}
              />
              <Form.Check
                type={"radio"}
                id={`default-4`}
                name="radiobutton"
                value="tenyears"
                label={"10+ years"}
                className="form-control"
                onChange={handleChangeData}
                checked={userDetails.radiobutton == "tenyears" ? true : false}
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
                name="title"
                onChange={handleChangeData}
                value={userDetails.title}
              />
            </div>
            <div className="d-flex pt-2 pb-2">
              <div className="w-100 margin-right">
                <label className="pb-1 signIn-font  "> Primary Skills</label>
                <select
                  className="form-control"
                  name="primaryskills"
                  onChange={handleChangeData}
                  value={userDetails.primaryskills}
                >
                  <option value="">choose</option>
                  <option value="java">Java</option>
                  <option value="react">React</option>
                  <option value="angular">Angular</option>
                  <option value="datascience">Data Science</option>
                  <option value="machinelearning">Machine Learning</option>
                  <option value="php">PHP</option>
                  <option value="laravel">Laravel</option>
                </select>
              </div>
              <div className="w-100 margin-right">
                <label className="pb-1 signIn-font  ">
                  {" "}
                  Primary Skills Experience
                </label>
                <select
                  className="form-control"
                  name="primaryexp"
                  onChange={handleChangeData}
                  value={userDetails.primaryexp}
                >
                  <option value="">choose</option>
                  <option value="0">0 years</option>
                  <option value="1">1-2 years</option>
                  <option value="2">3-4 years</option>
                  <option value="3">4-5 years</option>
                  <option value="4">5+ years</option>
                </select>
              </div>
            </div>
            <div className="other-skills">
              <label className="pt-2 pb-1 signIn-font w-100 margin-right">
                {" "}
                Other Skills
              </label>
              <CreatableSelect
                options={options}
                isMulti
                name="otherskills"
                value={userDetails.otherSkills}
                // defaultValue={[{ label: "CSS", value: "css" }]}
                onChange={handleSelectChange}
              />
            </div>
            <div className="popular-skills">
              <label className="pb-1 signIn-font  "> Popular Skills</label>
              <div className="d-flex justify-content-around">
                <div
                  className="btn pop-skills"
                  onClick={(value) => {
                    handleClick("Data");
                  }}
                >
                  Data <AiOutlinePlus />
                </div>
                <div
                  className="btn pop-skills"
                  onClick={(value) => {
                    handleClick("Machine Learning");
                  }}
                >
                  Machine Learning <AiOutlinePlus />
                </div>
                <div
                  className="btn pop-skills"
                  onClick={(value) => {
                    handleClick("BigData");
                  }}
                >
                  BigData <AiOutlinePlus />
                </div>
                <div
                  className="btn pop-skills"
                  onClick={(value) => {
                    handleClick("PHP");
                  }}
                >
                  PHP <AiOutlinePlus />
                </div>
                <div
                  className="btn pop-skills"
                  onClick={(value) => {
                    handleClick("Finance");
                  }}
                >
                  Finance <AiOutlinePlus />
                </div>
                <div
                  className="btn pop-skills"
                  onClick={(value) => {
                    handleClick("HR");
                  }}
                >
                  HR <AiOutlinePlus />
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className="d-flex justify-content-between">
              <div className="back d-flex ">
                <Link to="/freelancer/page1">
                  <p className="smaller-text cursor-pointer font-weight-600 ">
                    <BiArrowBack />
                    &nbsp; BACK
                  </p>
                </Link>
              </div>

              <div className="save-and-continue d-flex flex-row-reverse">
                <p
                  className="smaller-text cursor-pointer font-weight-600 "
                  onClick={onSubmit}
                >
                  SAVE & CONTINUE&nbsp;
                  <BiRightArrowAlt />
                </p>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Page2Section2;
