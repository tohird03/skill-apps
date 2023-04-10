import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { education } from "../../store/Education/educationStore";
import { v4 as uuidv4 } from "uuid";

const Fillial = () => {
  const [branchName, setBranchName] = useState("");

  const handleAddFillal = (evt) => {
    evt.preventDefault();
    let uuid = uuidv4();
    education.addFillial({
      id: uuid,
      name: branchName,
    });
    setBranchName("")
  };

  return (
    <div className="container">
      <div className="d-flex align-items-center justify-content-between">
        <h1>Fillial</h1>

        <button
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          className="btn btn-success"
        >
          Add fillial
        </button>

        {/* Modal Body */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Modal title
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleAddFillal}>
                  <input
                    value={branchName}
                    onChange={(e) => setBranchName(e.target.value)}
                    type="text"
                    placeholder="Fillial nomi"
                    required
                  />
                  <button type="submit">Add</button>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Fillial nomi</th>
            <th>Kursga o'tish</th>
          </tr>
        </thead>
        <tbody>
          {education?.fillial &&
            education?.fillial?.map((item, index) => {
              return (
                <tr key={item?.id}>
                  <td> {index + 1}</td>
                  <td> {item?.name}</td>
                  <td>
                    <Link to={`/course/${item?.id}`}>Kurslarni ko'rish</Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default observer(Fillial);
