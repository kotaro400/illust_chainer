import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import axios from "axios";
import styled from "styled-components";
import MainHeader from "./MainHeader";
import LastPicture from "./LastPicture";
import PictureHistory from "./PictureHistory";
import { Picture } from "./types";

const PicturesComponent = styled.div`
  background-color: #f8f8fa;
  min-height: 100vh;
  text-align: center;
`;


const Pictures = () => {
  const [pictures, setPictures] = useState<Picture[]>([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/pictures`)
      .then((res) => {
        const resData: { pictures: Picture[] } = res.data;
        setPictures(resData.pictures);
      })
  }, []);

  if (pictures.length === 0) {
    return (
      <PicturesComponent>
        <MainHeader />
      </PicturesComponent>
    )
  }else{
    return (
      <PicturesComponent>
        <MainHeader />
        <LastPicture order={pictures[0].order} image_url={pictures[0].image_url}/>
        <Button type="primary" shape="round" size="large">
          <Link to={`/new/${pictures[0].chain_id}/${pictures[0].order + 1}`}>次の絵を描く</Link>
        </Button>

        {
          pictures.length > 1 ? (<PictureHistory pictures={pictures.slice(1)} name={false}/>) : null
        }
      </PicturesComponent>
    );  
  }

};

export default Pictures;