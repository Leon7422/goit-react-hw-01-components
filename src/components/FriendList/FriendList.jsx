import PropTypes from 'prop-types';
import { FriendsList, Friend, Status } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(friend => {
        return (
          <Friend key={friend.id} className="item">
            <Status status={friend.isOnline}></Status>
            <img src={friend.avatar} alt="User avatar" width="48" />
            <p>{friend.name}</p>
          </Friend>
        );
      })}
    </FriendsList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ),
};
