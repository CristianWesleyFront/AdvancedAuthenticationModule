import styled from 'styled-components';

export const FormContainer = styled.div`
  form {
    margin-top: 1.5rem;

    label {
      width: 100%;
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      color: #000000;
      &::before {
        content: '' !important;
      }
    }

    input,
    .ant-input-password,
    .ant-input-affix-wrapper {
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
        font-size: 12px;
        line-height: 16px;
        color: #5e6278;
      }
    }

    button {
      width: 100%;
      height: 100%;
      min-height: 32px;
      span {
        color: #009ef7;
        font-size: 0.9rem;
        font-weight: 500;
        line-height: 1.5;
        padding: 0.4rem;
      }

      background-color: #f1faff;
      border-color: #f1faff;

      &.ant-btn-primary {
        span {
          color: #ffffff;
        }

        border-color: transparent;
        background-color: #009cf7ae;
      }

      transition: filter 0.2s;

      &:hover {
        border-color: #009cf7ae;
        filter: brightness(1.1);
      }

      box-shadow: none !important;
      cursor: pointer;
      outline: none !important;
      margin-bottom: 1.25rem !important;
      border-radius: 0.625rem;
    }
  }
`;
