import styled from 'styled-components';

export const Card = styled.div`
  font-family: Poppins, 'sans-serif' !important;
  background-color: #ffffff;
  padding: 3.75rem !important;
  max-width: 500px;
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
`;
