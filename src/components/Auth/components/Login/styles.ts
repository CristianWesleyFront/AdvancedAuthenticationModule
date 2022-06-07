import styled from 'styled-components';

export const Container = styled.div`
  font-family: Poppins, 'sans-serif' !important;
  background-color: #ffffff;
  padding: 3.75rem;
  width: 500px;
  border-radius: 0.475rem;
  margin: auto;
  box-shadow: 0 0.1rem 1rem 0.25rem rgb(0 0 0 / 5%) !important;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h3.ant-typography {
    margin: 0px;
  }

  h5.ant-typography {
    margin-top: 0.5rem;

    a {
      margin-left: 5px;
    }
  }

  form {
    margin-top: 1.5rem;

    label {
      width: 100%;
      font-weight: 500;
      font-size: 13px;
      line-height: 20px;
      color: #000000;
      &::before {
        content: '' !important;
      }
    }

    input,
    .ant-input-password {
      background-color: #f5f8fa;
      border-color: #f5f8fa;
      color: #5e6278;
      transition: color 0.2s ease, background-color 0.2s ease;

      min-height: calc(1rem);
      padding: 0.425rem 1.5rem;
      font-size: 1rem;
      border-radius: 0.625rem;
    }

    .ant-checkbox-wrapper {
      .ant-checkbox + span {
        width: 100%;
        font-weight: 500;
        font-size: 11px;
        line-height: 16px;
        color: #5e6278;
      }
    }

    button {
      width: 100%;
      height: 100%;
      min-height: 32px;
      span {
        color: #ffffff;
        font-size: 0.8rem;
        font-weight: 500;
        line-height: 1.5;
        padding: 0.4rem;
      }

      border-color: #009ef7;
      background-color: #009ef7;

      box-shadow: none !important;
      cursor: pointer;
      outline: none !important;
      margin-bottom: 1.25rem !important;

      border-radius: 0.625rem;
    }
  }
`;
