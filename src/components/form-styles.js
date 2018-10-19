import React from "react";
import styled from "styled-components";

const styledForm = styled(({ ...props }) => {
  return <form {...props} />;
})`
  width: 75%;
  background-color: #cccccc1c;
  margin: 0 auto;
  font-family: cursive;
  font-size: 10pt;
`;

export default styledForm;
