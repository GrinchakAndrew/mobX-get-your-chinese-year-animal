import React from "react";
import styled from "styled-components";

const imgMap = {
  Rat: 1,
  Cow: 2,
  Tiger: 3,
  Hare: 4,
  Dragon: 5,
  Snake: 6,
  Horse: 7,
  Sheep: 8,
  Monkey: 9,
  Rooster: 10,
  Dog: 11,
  Bore: 12
};

const styledImg = styled(({ ...props }) => {
  let { animal } = props;
  let animalIndex = imgMap[animal];
  let regExp = new RegExp(animalIndex, "g");
  let imgPath = props.imgcol.filter((i, j) => {
    return i.match(regExp);
  });
  return <img {...props} src={imgPath[0]} />;
})`
  width: 20%;
`;

export default styledImg;
