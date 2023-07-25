import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const history = useNavigate();

  // const header = { "Access-Control-Allow-Origin": "*" };
  const handleChage = (e) => {
    e.preventDefault();
    axios.post(
      // url, data , headre
      "https://646f493e09ff19b12086ef41.mockapi.io/crud",
      { name: name, email: email }
    );
    toast.success("User added succes ", {
      autoClose: 2000,
    });
    history("/read");
  };

  return (
    <>
      <form>
        <h2>Create</h2>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName"
            aria-describedby="emailHelp"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary" onClick={handleChage}>
          Submit
        </button>
      </form>
    </>
  );
};

export default Create;
