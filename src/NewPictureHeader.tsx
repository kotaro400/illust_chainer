import React from "react";
import { Button } from "antd";
import { AiOutlineCheck, AiOutlineRollback } from "react-icons/ai"
import { useHistory } from "react-router-dom";

const style: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-around",
  margin: "20px 0 10px 0"
};

const iconStyle: React.CSSProperties = {
  fontSize: "18px",
  marginRight: "5px"
};

interface Props {
  onComplete: () => void;
};

const NewPictureHeader: React.FC<Props> = (props) => {
  const history = useHistory();
  return (
    <div style={style}>
      <Button 
        size="large" 
        icon={<AiOutlineRollback style={iconStyle}/>}
        onClick={() => history.push("/")}
      >
        戻る
      </Button>
      <h2>絵しりとり #1</h2>
      <Button 
        type="primary" 
        size="large" 
        icon={<AiOutlineCheck style={iconStyle}/>}
        onClick={props.onComplete}
      >
        完成
      </Button>
    </div>
  );
};

export default NewPictureHeader;