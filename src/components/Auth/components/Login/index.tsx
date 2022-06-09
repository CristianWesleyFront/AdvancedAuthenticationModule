import React, { useState } from 'react';
import { Typography, Form, Input, Checkbox, Button, notification } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { Card } from '../shared/Card';
import { FormContainer } from '../shared/FormContainer';

import { useAuth } from '../../';
import { login } from '../../core/_requests';

const { Title, Text } = Typography;

const Login: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const { saveAuth } = useAuth();

  const onFinish = async values => {
    console.log('Success:', values);

    try {
      setLoading(true);

      const auth = await login(values.email, values.password);
      saveAuth(auth.data);

      navigate('/dashboard');

      setLoading(false);
    } catch (error) {
      console.error(error);
      saveAuth(undefined);
      notification.error({
        message: 'Error ao Autenticar',
        description: 'Usuário ou senha incorretos',
      });
      setLoading(false);
    }
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Card>
      <Title level={3}>Sign in to System</Title>
      <Title level={5}>
        <Text type="secondary">New Here?</Text>
        <Link to="/auth/registration">Create an Account</Link>
      </Title>
      <FormContainer>
        <Form
          name="Login"
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

          <Form.Item
            label={
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <div>Password</div>
                <Link to="/auth/forgot-password">Forgot Password ?</Link>
              </div>
            }
            name="password"
            rules={[{ required: true, message: 'Please insert a password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item name="remember">
            <Checkbox>Renember me</Checkbox>
          </Form.Item>

          <Form.Item style={{ justifyContent: 'center' }}>
            <Button type="primary" htmlType="submit" loading={loading}>
              Continue
            </Button>
          </Form.Item>
        </Form>
      </FormContainer>
    </Card>
  );
};

export default Login;
