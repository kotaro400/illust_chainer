import React from "react";
import styled from "styled-components";

const LastPictureComponenet = styled.div`
  text-align: center;
  margin: 10px;
  img {
    width: 80%;
  }
  p {
    font-size: 24px;
    text-align: center;
    font-weight: bold;
  }
`;

interface LastPictureProps {
  order: number;
  image_url: string;
}

const LastPicture: React.FC<LastPictureProps> = (props) => {
  return (
    <LastPictureComponenet>
      <p>現在の絵</p>
      <img src={props.image_url} alt="" />
    </LastPictureComponenet>
  );
};

export default LastPicture;
