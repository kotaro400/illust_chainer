import { useState, CSSProperties } from "react";
import { Modal } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

const iconStyle: CSSProperties = {
  fontSize: "30px",
  position: "absolute",
  top: "15px",
  right: "15px",
};

const RuleModal = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  return (
    <>
      <QuestionCircleOutlined
        style={iconStyle}
        onClick={() => setIsModalVisible(true)}
      />
      <Modal
        title="ルール"
        visible={isModalVisible}
        footer={null}
        onCancel={() => setIsModalVisible(false)}
      >
        <p>
          ・絵しりとりです。しりとりのルールにしたがって現在の絵から次の絵を描いてください。
        </p>
        <p>
          ・最後の文字が「ー、ゃ、ゅ、ょ」で終わる場合、一つ前の文字が最後の文字として正誤判定が行われます。
          <br /> （例）
          <br /> たくしー ⇨　「し」
          <br /> しょうぼうしゃ ⇨ 「し」
          <br /> れすきゅー ⇨ 「き」
        </p>
        <p>・しりとりが失敗してしまったら、また初めからスタートです。</p>
        <p>・なるべく長く絵しりとりを続けましょう！</p>
      </Modal>
    </>
  );
};

export default RuleModal;
