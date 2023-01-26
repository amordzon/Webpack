import React, { useState, useEffect } from "react";
import photo1 from "../images/1.jpeg";
import photo2 from "../images/2.jpeg";

const Example = () => {
  const [photo, setPhoto] = useState(1);
  useEffect(() => {
    if (photo > 2) {
      setPhoto(1);
    }
  }, [photo]);
  return (
    <div>
      <div>This is an example!!!</div>
      {photo == 1 ? <img src={photo1} /> : <img src={photo2} />}
      <button onClick={() => setPhoto(photo + 1)}>Next photo</button>
    </div>
  );
};

export default Example;
