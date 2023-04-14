import React from "react";
import Loader from "../Loader/Loader";


const Image = ({ img }) => {
  const [isLoading, setLoading] = React.useState(false);

  return (
    <>
      {!isLoading && <Loader />}
      <img
        className={"image"}
        style={{ display: !isLoading ? "none" : "" }}
        src={img}
        onLoad={() => setLoading(true)}
      />
    </>
  );
};

export default Image;
