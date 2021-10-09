import styled from "styled-components";
import { BsCircle } from "react-icons/bs";
import { ImCross } from "react-icons/im"
import { useLocation } from "react-router-dom";
import { TwitterShareButton, TwitterIcon, LineShareButton, LineIcon } from "react-share";
import MainHeader from "./MainHeader";
import PictureHistory from "./PictureHistory";
import { Picture } from "./types";

const url = process.env.REACT_APP_URL || "";

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
  p {
    font-size: 20px;
    text-align: center;
    font-weight: bold;
    margin: 20px;
  }
`;

const ShareWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Result = () => {
  const location = useLocation();

  if (location.state) {
    const state = location.state as { pictures: Picture[], isChained: boolean };
    const currentOrder = state.pictures.length;
    return (
      <ResultComponent>
        <MainHeader />
        {
          state.isChained ? (  
            <>      
              <h1>正解</h1>
              <BsCircle className="icon" />
              <p>次の絵を描いてもらおう!</p>
              <ShareWrapper>
                <TwitterShareButton url={url} title={`現在${currentOrder}連続成功！`}>
                  <TwitterIcon round={true} />
                </TwitterShareButton>
                <LineShareButton url={url} title={`現在${currentOrder}連続成功！`}>
                  <LineIcon round={true} />
                </LineShareButton>
              </ShareWrapper>
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