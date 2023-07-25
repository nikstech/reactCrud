import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Read = () => {
  const [data, setData] = useState([]);
  let userData;
  const getData = () => {
    axios
      .get("https://646f493e09ff19b12086ef41.mockapi.io/crud")
      .then((req) => {
        setData(req.data);
      });
  };

  const handelDelete = (id) => {
    axios
      .delete(`https://646f493e09ff19b12086ef41.mockapi.io/crud/${id}`)
      .then(() => {
        // alert("User has been deleted");
        toast.success("User has been deleted ", {
          autoClose: 2000,
        });
        getData();
      });
  };

  const setLocalStoarge = (id, name, email) => {
    // console.log(id, name, email);
    // localStorage.setItem("id", id);
    // localStorage.setItem("name", name);
    // localStorage.setItem("email", email);
    let userDataList = JSON.parse(localStorage.getItem("course") || "[]");
    userData = {
      id: id,
      name: name,
      email: email,
    };
    userDataList.push(userData);
    localStorage.setItem("users", JSON.stringify(userDataList));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h2>Read Operation</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((dt, id) => {
            return (
              <tr key={id}>
                <th scope="row">{dt.id}</th>
                <td>{dt.name}</td>
                <td>{dt.email}</td>
                <td>
                  <Link to="/update">
                    <button
                      className="btn btn-success"
                      onClick={() => setLocalStoarge(dt.id, dt.name, dt.email)}
                    >
                      Edit
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handelDelete(dt.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Link to="/">
        <button className="btn btn-secondary">Add User</button>
      </Link>
    </>
  );
};

export default Read;
