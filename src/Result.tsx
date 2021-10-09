import styled from "styled-components";
import { BsCircle } from "react-icons/bs";
import { ImCross } from "react-icons/im"
import { useLocation } from "react-router-dom";
import MainHeader from "./MainHeader";
import PictureHistory from "./PictureHistory";
import { Picture } from "./types";

const ResultComponent = styled.div`
  background-color: #f8f8fa;
  min-height: 100vh;
  h1 {
    font-size: 45px;
    text-align: center;
    font-weight: bold;
    margin: 20px;
  }
  .icon {
    display: block;
    width: 100%;
    text-align: center;
    font-size: 150px;
  }
`;

const Result = () => {
  const location = useLocation();

  if (location.state) {
    const state = location.state as { pictures: Picture[], isChained: boolean };
    return (
      <ResultComponent>
        <MainHeader />
        {
          state.isChained ? (  
            <>      
              <h1>正解</h1>
              <BsCircle className="icon" />
            </>
          ) : (
            <>      
              <h1>不正解</h1>
              <ImCross className="icon" />
            </>
          )
        }
        <PictureHistory pictures={state.pictures} name={true}/>
      </ResultComponent>
    )  
  }else{
    return (
      <ResultComponent>
        <MainHeader />
      </ResultComponent>
    )
  }

};

export default Result;