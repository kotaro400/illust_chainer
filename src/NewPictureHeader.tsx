import { Button } from "antd";
import { LikeOutlined } from "@ant-design/icons";
import styled from "styled-components";
import RuleModal from "./RuleModal";

const NewPictureHeaderComponent = styled.header`
  height: 60px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px 60px 10px 10px;
`;

interface Props {
  onComplete: () => void;
}

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
      <RuleModal />
    </NewPictureHeaderComponent>
  );
};

export default NewPictureHeader;
