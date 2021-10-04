import React from "react";

const SingIn = () => {
  return (
    <div className="text-center p-5">
      <div>
        <h2 className="fw-bold">Singn Up To Our Newsletter</h2>
        <p className="text">Subscribe to our newsletter and get many</p>
        <p className="text">interesting things every week</p>
      </div>
      <div className="d-flex  justify-content-center">
        <input
          placeholder="Enter Your email"
          className="form-control w-50"
          type="text"
        />
        <button className="btn btn-primary">SUBSCRIBE</button>
      </div>
    </div>
  );
};

export default SingIn;
