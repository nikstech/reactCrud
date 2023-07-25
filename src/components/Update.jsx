import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const Update = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    // console.log(JSON.parse(localStorage.getItem("users"))[0].name)
    setId(JSON.parse(localStorage.getItem("users"))[0].id);
    setName(JSON.parse(localStorage.getItem("users"))[0].name);
    setEmail(JSON.parse(localStorage.getItem("users"))[0].email);
    // setName(localStorage.getItem("name"));
    // setEmail(localStorage.getItem("email"));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    // console.log(id, name, email);
    axios
      .put(`https://646f493e09ff19b12086ef41.mockapi.io/crud/${id}`, {
        name: name,
        email: email,
      })
      .then(() => {
        toast.success("User has been updated ", {
          autoClose: 2000,
        });
        navigate("/read");
      });
  };
  return (
    <form>
      <h2>Update</h2>
      <div className="mb-3">
        <label htmlFor="exampleInputName" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputName"
          aria-describedby="emailHelp"
          value={name}
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>
      <button type="submit" className="btn btn-primary" onClick={handleUpdate}>
        Update
      </button>
    </form>
  );
};

export default Update;
