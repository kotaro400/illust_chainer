import React from 'react';
import { Modal, Form, Input } from 'antd';

interface Values {
  title: string;
  creater: string;
};

interface Props {
  visible: boolean;
  onCreate: (values: Values) => void;
  onCancel: () => void;
};


const NewPictureInputModal: React.FC<Props> = (props) => {
  const { visible, onCancel, onCreate } = props;
  const [form] = Form.useForm();

  return (
    <Modal
      visible={visible}
      title="絵しりとり #1"
      okText="回答する"
      cancelText="キャンセル"
      onCancel={onCancel}
      onOk={() => {
        form.validateFields()
            .then(values => {
              form.resetFields();
              onCreate(values);
            })
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="picture-input"
        
      >
        <Form.Item 
          name="title" 
          label="題名（ひらがなのみ）"
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
          <Input style={{fontSize: "18px"}}/>
        </Form.Item>
        <Form.Item name="creater" label="作者">
          <Input style={{fontSize: "18px"}}/>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default NewPictureInputModal;