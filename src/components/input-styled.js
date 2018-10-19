import React from "react";
import styled from "styled-components";

const styledInput = styled(({ ...props }) => {
  return <input {...props} />;
})`
  width: 100%;
  font-family: cursive;
  font-size: 10pt;
`;

export default styledInput;
