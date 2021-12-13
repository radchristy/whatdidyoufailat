import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFailure } from "../actions/actions";

const FailuresDisplay = () => {
  const dispatch = useDispatch();
  const failures = useSelector((state) => state.failures);

  const handleDelete = (failure) => {
    dispatch(removeFailure(failure.id));
  }

  if (failures.length === 0) return <p>You haven't added any failures</p>;

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Category</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {failures.map((failure) => (
            <tr key={failure.id}>
              <td>{failure.description}</td>
              <td>{failure.category}</td>
              <td>
                <button
                  onClick={() => handleDelete(failure)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default FailuresDisplay;
