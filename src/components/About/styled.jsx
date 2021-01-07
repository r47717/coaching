import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LeftColumn = styled.div`
  flex: 1 1 50%;
  font-size: larger;
  padding-right: 40px;

  ul {
    margin-top: 0;
    list-style-type: square;

    line-height: 1.5em;

    li {
      margin-bottom: 1em;
    }
  }

  @media (max-width: 900px) {
    padding-right: 0;
    flex: 1 1 100%;
  }

  @media (max-width: 400px) {
    font-size: large;
  }
`;

export const RightColumn = styled.div`
  flex: 1 1 50%;

  img {
    display: inline-block;
    margin: 10px;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;
