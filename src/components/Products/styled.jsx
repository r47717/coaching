import styled from "styled-components";

export const ProductsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 770px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const Card = styled.div`
  border: 2px solid #cccccc;
  border-radius: 5px;
  background: #ffffff;
  flex: 0 0 30%;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

export const CardHeader = styled.div`
  padding: 10px 20px;
  text-align: center;
  font-size: larger;
  font-weight: 700;
`;

export const CardBody = styled.div`
  padding: 20px;

  @media (max-width: 770px) {
    img {
      width: 100%;
    }
  }
`;
