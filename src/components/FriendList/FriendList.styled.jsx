import styled from 'styled-components';

export const FriendsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  padding: 0;
  margin: 0;
  gap: 15px;
`;

export const Friend = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 90px;
  min-width: 300px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding-left: 15px;
  gap: 10px;
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => (props.status ? 'green' : 'red')};
`;
