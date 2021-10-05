import React from "react";
import styled from "styled-components";
import { Picture } from "./types";

interface Props {
  pictures: Picture[];
  name: boolean;
}

const PictureHistoryComponent = styled.div`
  padding-bottom: 20px;
  p {
    font-size: 24px;
    text-align: center;
    font-weight: bold;
    margin: 30px 0;
  }
  .pictures {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    div {
      width: 30vw;
      img {
        display: block;
        width: 100%;
      }
      p {
        font-size: 14px;
        text-align: center;
        color: #c4c4c4;
        margin: 10px 0;
      }
      .name {
        color: #000;
      }
    }
  }
`;

const PictureHistory: React.FC<Props> = ({ pictures, name }) => {
  return (
    <PictureHistoryComponent>
      <p>今までの絵</p>
      <div className="pictures">
        {pictures.map(picture => (
          <div key={picture.id}>
            <p>{picture.order}枚目</p>
            <img src={picture.image_url} alt=""/>

            { name ? (<p className="name">「{picture.name}」</p>) : null }   
          </div>
        ))}
      </div>
    </PictureHistoryComponent>
  )
};

export default PictureHistory;