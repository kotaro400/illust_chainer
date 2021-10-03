import { Link } from "react-router-dom";
import { Button } from "antd";
import styled from "styled-components";
import MainHeader from "./MainHeader";
import LastPicture from "./LastPicture";

const PicturesComponent = styled.div`
  background-color: #f8f8fa;
  min-height: 100vh;
  text-align: center;
`;

const Pictures = () => {
  return (
    <PicturesComponent>
      <MainHeader />
      <LastPicture />
      <Button type="primary" shape="round" size="large">
        <Link to="/new">絵を追加する</Link>
      </Button>
    </PicturesComponent>
  );
};

export default Pictures;