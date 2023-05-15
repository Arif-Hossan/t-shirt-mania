import React, { useContext } from "react";
import { RingContext } from "../Grandpa/Grandpa";

const Special2 = () => {
    const ring = useContext(RingContext);
  return (
    <div>
      <h4>Special 2</h4>
      <p>
        <small>{ring}</small>
      </p>
    </div>
  );
};

export default Special2;
