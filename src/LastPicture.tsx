import React from "react";
import styled from "styled-components";
import { Picture } from "./types";

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

const LastPicture: React.FC<Picture> = (props) => {
  return (
    <LastPictureComponenet>
      <p>{props.order}枚目</p>
      <img src={props.image_url} alt=""/>
    </LastPictureComponenet>
  );
};

export default LastPicture;