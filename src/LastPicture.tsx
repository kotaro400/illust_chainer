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

const LastPicture = () => {
  return (
    <LastPictureComponenet>
      <p>1枚目</p>
      <img src={`${process.env.PUBLIC_URL}/logo192.png`} alt=""/>
    </LastPictureComponenet>
  );
};

export default LastPicture;