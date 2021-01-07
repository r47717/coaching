import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const Block = styled.div`
  background: #eeeeee;
  padding: 20px;
  margin-top: 20px;

  h2 {
    text-align: center;
    margin-bottom: 50px;
  }

  @media (max-width: 900px) {
    h2 {
      margin-top: 0;
      margin-bottom: 20px;
    }
  }
`;
