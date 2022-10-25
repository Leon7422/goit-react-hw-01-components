import PropTypes from 'prop-types';
import {
  Container,
  UserDrscription,
  UserInfo,
  UserStats,
  UserStatsItem,
  UserImg,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Container>
      <UserDrscription>
        <UserImg src={avatar} alt="User avatar" className="avatar" />
        <UserInfo>{username}</UserInfo>
        <UserInfo>@{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </UserDrscription>

      <UserStats>
        <UserStatsItem>
          <span>Followers: </span>
          <span>{stats.followers}</span>
        </UserStatsItem>
        <UserStatsItem>
          <span>Views: </span>
          <span>{stats.views}</span>
        </UserStatsItem>
        <UserStatsItem>
          <span>Likes: </span>
          <span>{stats.likes}</span>
        </UserStatsItem>
      </UserStats>
    </Container>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
