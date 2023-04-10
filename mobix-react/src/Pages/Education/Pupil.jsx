import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { education } from "../../store/Education/educationStore";

const Pupil = () => {
  const { pupilId } = useParams();
  const [pupils, setPupils] = useState([]);

  useEffect(() => {
    setPupils(education.getPupil(pupilId));
  }, [pupilId]);

  console.log(pupils);
  return (
    <div className="container">
      <div className="row"></div>
      <div className="row">
        {pupils.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Kurs nomi</th>
                <th>Guruh</th>
              </tr>
            </thead>
            <tbody>
              {pupils &&
                pupils?.map((item, index) => {
                  return (
                    <tr key={item?.id}>
                      <td> {index + 1}</td>
                      <td> {item?.name}</td>
                      <td>
                        {item?.group[0]?.name}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        ) : (
          <h1>Bu guruhning o'quvchilari mavjud emas</h1>
        )}
      </div>
    </div>
  );
};

export default Pupil;
