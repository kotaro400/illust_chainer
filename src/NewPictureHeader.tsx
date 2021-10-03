import { Button } from "antd";
import { LikeOutlined } from "@ant-design/icons"
import styled from "styled-components";

const NewPictureHeaderComponent = styled.header`
  height: 60px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px;
`;

interface Props {
  onComplete: () => void;
};

const NewPictureHeader: React.FC<Props> = (props) => {
  return (
    <NewPictureHeaderComponent>
      <Button 
        type="primary" 
        size="large"
        shape="round" 
        icon={<LikeOutlined />}
        onClick={props.onComplete}
      >
        描けた
      </Button>
    </NewPictureHeaderComponent>
  );
};

export default NewPictureHeader;