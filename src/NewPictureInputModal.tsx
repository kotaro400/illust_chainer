import React from 'react';
import { Modal, Form, Input } from 'antd';
import styled from "styled-components";

const inputStyle: React.CSSProperties = {
  fontSize: "18px", 
  backgroundColor: "#f6f6f6", 
  borderRadius: "5px"
};

const FormText = styled.p`
  color: #666666;
  font-size: 13px;
  margin: 0;
`;

interface Props {
  visible: boolean;
  onCreate: (title: string) => void;
  onCancel: () => void;
};


const NewPictureInputModal: React.FC<Props> = (props) => {
  const { visible, onCancel, onCreate } = props;
  const [form] = Form.useForm();

  return (
    <Modal
      visible={visible}
      title="絵しりとり 2枚目"
      okText="投稿する"
      cancelText="キャンセル"
      okButtonProps={{shape: "round"}}
      cancelButtonProps={{shape: "round"}}
      onCancel={onCancel}
      onOk={() => {
        form.validateFields()
            .then(values => {
              form.resetFields();
              onCreate(values.title);
            })
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="picture-input" 
      >
        <FormText>何を描きましたか？</FormText>
        <Form.Item 
          name="title" 
          required={false}
          rules={[
            {
              required: true,
              message: "この絵の題名を入力してください"
            },
            {
              pattern: /^[ぁ-んー　]*$/,
              message: "ひらがなで入力してください"
            }
          ]}
        >
          <Input style={inputStyle}/>
        </Form.Item>
        <FormText>＊これを使ってしりとりが成功したか判定します</FormText>
        <FormText>＊ひらがなと「ー」のみで入力してください</FormText>
      </Form>
    </Modal>
  );
};

export default NewPictureInputModal;