import React, { useState } from 'react';
import {
  Typography,
  Form,
  Input,
  Checkbox,
  Button,
  notification,
  Space,
} from 'antd';
import { Card } from '../shared/Card';
import { FormContainer } from '../shared/FormContainer';
import { Link, useNavigate } from 'react-router-dom';
import PasswordValid from './PasswordValid';

import { register } from '../../core/_requests';

// import { Container } from './styles';
const { Title, Text } = Typography;

const Registration: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState<boolean>(false);
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const onFinish = async values => {
    console.log('Success:', values);

    try {
      setLoading(true);

      const response = await register(values);

      notification.success({
        message: 'Usuário criado com sucesso',
        description: 'Por favor faça o login!',
      });

      if (response.status === 201) navigate('/auth/login');

      setLoading(false);
    } catch (error) {
      console.error(error);
      notification.error({
        message: 'Error ao criar usuário',
        description: 'Por favor tente novamente',
      });
      setLoading(false);
    }
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Card>
      <Title level={3}>Create an Account</Title>
      <Title level={5}>
        <Text type="secondary">Already have an account?</Text>
        <Link to="/auth/forgot-password">Forgot Password ?</Link>
      </Title>
      <FormContainer>
        <Form
          form={form}
          name="Register"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Space>
            <Form.Item
              label="First name"
              name="fistName"
              rules={[
                { required: true, message: 'Please insert a Fist Name!' },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Last name"
              name="lastName"
              rules={[
                { required: true, message: 'Please insert a Last Name!' },
              ]}
            >
              <Input />
            </Form.Item>
          </Space>

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
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please insert a password!' }]}
          >
            <Input.Password onChange={e => setPassword(e.target.value)} />
          </Form.Item>

          <PasswordValid password={password} />

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={['password']}
            style={{ marginTop: '1.5rem' }}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      'The two passwords that you entered do not match!',
                    ),
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item name="termAndConditions">
            <Checkbox>
              I Agree the{' '}
              <a href="#" target="_blank">
                Terms and Conditions
              </a>
            </Checkbox>
          </Form.Item>

          <Button type="primary" htmlType="submit" loading={loading}>
            Submit
          </Button>
          <Link to="/auth/login">
            <Button>Cancel</Button>
          </Link>
        </Form>
      </FormContainer>
    </Card>
  );
};

export default Registration;
