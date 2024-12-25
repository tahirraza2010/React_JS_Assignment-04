import React from "react";
import "../../App.css";
import background from '../../assets/background.png'
const SingUp = () => {
  return (
    <div className="background-div">
      <div className="work-div">
        <h1>Sign up</h1>
        <p>
          Already have an Acount? <a href="#">Login here</a>
        </p>
        <form className="form-style">
          <div className="input-container">
            <label className="label">Name</label>
            <br />
            <input
              className="input"
              type="text"
              name="name"
              placeholder="Enter your name here"
            />
          </div>
          <div className="input-container">
            <label className="label">Email </label>
            <br />
            <input
              className="input"
              type="text"
              name="name"
              placeholder="Enter your Email here"
            />
          </div>
          <div className="input-container">
            <label className="label">Password </label>
            <br />
            <input
              className="input"
              type="text"
              name="name"
              placeholder="Enter your Email here"
              style={{ marginLeft: "60px" }}
            />
          </div>
          <span style={{fontSize:'15px'}}>
            <input type="checkbox" name="" id="" /> By Signing upyou agree to
            recieve updates and speacial Offers.
          </span>
          <br />
          <div className="parent">
          <input className="btn" type="button" value="Submit" />
          </div>
        </form>
        <div className="img-container">
            <img width={500} src={background} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SingUp;
