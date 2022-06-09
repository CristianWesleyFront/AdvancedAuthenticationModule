import React, { useState } from 'react';
import { Typography, Form, Input, Button, notification, Space } from 'antd';
import { Card } from '../shared/Card';
import { FormContainer } from '../shared/FormContainer';
import { useNavigate, Link } from 'react-router-dom';
import { requestPassword } from '../../core/_requests';
// import { Container } from './styles';

const { Title, Text } = Typography;

const ForgotPassword: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const onFinish = async values => {
    console.log('Success:', values);

    try {
      setLoading(true);

      const response = await requestPassword(values);

      notification.success({
        message: 'E-mail enviado!',
        description:
          'Por favor verificar, enviamos um e-mail para o email informado ',
      });

      if (response.status === 201) navigate('/auth/login');

      setLoading(false);
    } catch (error) {
      console.error(error);
      notification.error({
        message: 'Error ao enviar e-mail',
        description: 'Conta de e-mail não valida!',
      });
      setLoading(false);
    }
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Card>
      <Title level={3}>Forgot Password ?</Title>
      <Title level={5}>
        <Text type="secondary">Enter your email to reset your password.</Text>
      </Title>
      <FormContainer>
        <Form
          name="forgotPassword"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                type: 'email',
                message: 'Not is E-mail!',
              },
              { required: true, message: 'Please insert a email!' },
            ]}
          >
            <Input />
          </Form.Item>
          <Space>
            <Button type="primary" htmlType="submit" loading={loading}>
              Submit
            </Button>
            <Link to="/auth/login">
              <Button>Cancel</Button>
            </Link>
          </Space>
        </Form>
      </FormContainer>
    </Card>
  );
};

export default ForgotPassword;
