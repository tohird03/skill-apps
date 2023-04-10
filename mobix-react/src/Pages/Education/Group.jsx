import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { education } from "../../store/Education/educationStore";

const Group = () => {
  const { branchId, id } = useParams();
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    setGroups(education.getGroupsBranch(branchId, id));
  }, [id, branchId]);

  return (
    <div className="container">
      <div>
        <h3>
          {education.getBranchSingle(branchId)[0]?.name} fillialidagi {education.getSingleCourse(id)[0]?.name} kursi guruhlar
        </h3>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Guruh nomi</th>
            <th>O'quvchilarni ko'rish</th>
            <th>Kursi</th>
          </tr>
        </thead>
        <tbody>
          {groups &&
            groups.map((item, index) => {
              return (
                <tr key={index}>
                  <td> {index + 1}</td>
                  <td> {item?.name}</td>
                  <td>
                    <Link to={`/pupil/${item?.id}`}>O'quvchilarni ko'rish</Link>
                  </td>
                  <td>{item?.course[0]?.name}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default observer(Group);
