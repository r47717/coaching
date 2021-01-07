import styled from "styled-components";

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  background: #eeeeee;
  padding: 20px;

  @media (max-width: 850px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
  }
`;

export const Logo = styled.div`
  align-self: center;
`;

export const RightPart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Menu = styled.ul`
  list-style: none;
  margin-block-start: auto;
  margin-block-end: auto;

  a li {
    display: inline-block;
    padding: 3px;
    margin-left: 15px;
    font-size: x-large;
  }

  li:hover {
    text-decoration: underline;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const Quote = styled.div`
  max-width: 500px;
  font-style: italic;
  font-size: larger;
  margin-top: 60px;
  text-align: justify;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const MobileTitle = styled.div`
  align-self: center;
  font-size: larger;
  padding: 20px;

  @media (min-width: 901px) {
    display: none;
  }
`;
