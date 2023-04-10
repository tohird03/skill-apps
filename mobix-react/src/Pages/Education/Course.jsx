import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { education } from "../../store/Education/educationStore";
import { v4 as uuidv4 } from "uuid";
import { observer } from "mobx-react-lite";

const Course = () => {
  const { id } = useParams();
  const [course, setCourse] = useState([]);
  const [singleBranch, setSingleBranch] = useState({});
  const [courseName, setCourseName] = useState("");

  const handleAddCourse = (evt) => {
    evt.preventDefault();
    let uuid = uuidv4();
    education.addCourse({
      id: uuid,
      name: courseName,
      fillialId: [singleBranch.id]
    });

    setCourse(education.getBranchCourses(id))
    setCourseName("")
  };


  useEffect(() => {
    setCourse(education.getBranchCourses(id));
    setSingleBranch(...education.getBranchSingle(id));
  }, [id]);

  return (
    <div className="container">
      <div className="d-flex align-items-center justify-content-between">
        <h2>{singleBranch?.name} filialining kurslari</h2>

        <div className="d-flex align-items-center">
          <p className="m-0"> {singleBranch?.name} filialiga kurs qo'shish</p>

          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            className="btn btn-success"
          >
            Kurs qo'shish
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
                  <form onSubmit={handleAddCourse}>
                    <input
                      value={courseName}
                      onChange={(e) => setCourseName(e.target.value)}
                      type="text"
                      placeholder="Kurs nomi"
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
      </div>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Kurs nomi</th>
            <th>Guruhlarni ko'rish</th>
          </tr>
        </thead>
        <tbody>
          {course &&
            course?.map((item, index) => {
              return (
                <tr key={item?.id}>
                  <td> {index + 1}</td>
                  <td> {item?.name}</td>
                  <td>
                    <Link to={`/groups/${singleBranch?.id}/${item?.id}`}>Guruhlarni ko'rish</Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default observer(Course);
