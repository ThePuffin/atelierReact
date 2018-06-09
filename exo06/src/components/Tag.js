import React from "react";
import CurrentUser from "./User";

const Title = ({ name, Type, style, onClick }) => (
  <Type onClick={onClick} style={style}>
    {name}
  </Type>
);

export default Title;
