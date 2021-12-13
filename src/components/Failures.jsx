import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addFailure, removeFailure } from "../actions/actions";

const Failures = () => {
  const dispatch = useDispatch();
  const failures = useSelector((state) => state.failures);
  const [failure, setFailure] = useState("");
  const [tag, setTag] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();

    dispatch(addFailure(uuidv4(), failure, tag));
    setFailure("");
    setTag("");
  };

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          placeholder="Input Failure Here"
          value={failure}
          onChange={(e) => setFailure(e.target.value)}
        />
        <input
          type="text"
          placeholder="tag"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
        />

        <input type="submit" />
      </form>
      <ul>
        {failures.map((failure) => {
          return (
            <li>
              <a href="#" onClick={() => dispatch(removeFailure(failure.id))}>
                {failure.description} {failure.tag} X
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Failures;
