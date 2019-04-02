import React from "react";
import ContainerStyles from "./single-column.module.css";

const SingleColumnContainer = ({
  children,
  id,
  bgColor = "black",
  fontColor = "white"
}) => (
  <div
    id={id}
    className={ContainerStyles.container}
    style={{ backgroundColor: bgColor, color: fontColor }}
  >
    {children}
  </div>
);

export default SingleColumnContainer;
