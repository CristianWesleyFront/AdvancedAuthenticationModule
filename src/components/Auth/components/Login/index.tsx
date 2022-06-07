import React, { useState } from 'react';
import { Typography, Form, Input, Checkbox, Button, notification } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { Container } from './styles';

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

  const texts = {
    title: 'Sign in to System',
    subTitle: 'New Here?',
    createAccount: 'Create an Account',
    email: 'Email',
    password: 'Password',
    forgotPassword: 'Forgot Password ?',
    renember: 'Renember me',
    submit: 'Continue',
  };

  return (
    <Container>
      <Title level={3}>{texts.title}</Title>
      <Title level={5}>
        <Text type="secondary">{texts.subTitle}</Text>
        <Link to="/auth/register">{texts.createAccount}</Link>
      </Title>
      <Form
        name="Login"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label={texts.email}
          name="email"
          rules={[
            {
              type: 'email',
              message: 'Não é um E-mail!',
            },
            { required: true, message: 'Por favor insira o email!' },
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
              <div>{texts.password}</div>
              <Link to="/auth/forgot-password">{texts.forgotPassword}</Link>
            </div>
          }
          name="password"
          rules={[{ required: true, message: 'Por favor insira a senha!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember">
          <Checkbox>{texts.renember}</Checkbox>
        </Form.Item>

        <Form.Item style={{ justifyContent: 'center' }}>
          <Button type="primary" htmlType="submit" loading={loading}>
            {texts.submit}
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
};

export default Login;
