import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserDrscription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserInfo = styled.p`
  margin: 5px;
`;

export const UserStats = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 20px;
  padding: 0;
`;

export const UserStatsItem = styled.li`
  display: flex;
  flex-direction: column;
`;

export const UserImg = styled.img`
  width: 300px;
  height: 300px;
  border: 1px solid grey;
  border-radius: 50%;
`;
