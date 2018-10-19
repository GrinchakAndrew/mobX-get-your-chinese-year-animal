import React from "react";
import styled from "styled-components";

const colorMap = {
  Tree: "RGB(0, 128, 0)",
  Fire: "RGB(255, 87, 51)",
  Earth: "RGB(88, 24, 69)",
  Metal: "RGB(192, 192, 192)",
  Water: "RGB(0, 0, 128)"
};

const styledDiv = styled(({ ...props }) => {
  return <div {...props} />;
})`
  color: ${props => colorMap[props["color"]]};
  font-family: cursive;
  font-size: 10pt;
`;

export default styledDiv;
