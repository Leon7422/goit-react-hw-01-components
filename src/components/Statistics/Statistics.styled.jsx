import styled from 'styled-components';

export const Card = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  border: solid 1px grey;
  width: 375px;
  margin: 50px auto;
`;

export const CardSet = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
`;

export const CardItem = styled.li`
  width: 75px;
  height: 75px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  justify-content: center;
  :nth-child(2n + 1) {
    background-color: #ff000028;
  }
  :nth-child(2n) {
    background-color: #7700ff36;
  }
`;

export const Title = styled.h2`
  padding: 5px;
`;
