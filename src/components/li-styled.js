import React from "react";
import styled from "styled-components";

const styledLi = styled(({ ...props }) => {
  return <li {...props} />;
})`
  width: 100%;
  font-family: cursive;
  font-size: 10pt;
  list-style-type: square;
`;

export default styledLi;
