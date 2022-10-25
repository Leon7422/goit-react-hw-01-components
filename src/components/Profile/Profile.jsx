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
    <Container className="profile">
      <UserDrscription className="description">
        <UserImg src={avatar} alt="User avatar" className="avatar" />
        <UserInfo className="name">{username}</UserInfo>
        <UserInfo className="tag">@{tag}</UserInfo>
        <UserInfo className="location">{location}</UserInfo>
      </UserDrscription>

      <UserStats className="stats">
        <UserStatsItem>
          <span className="label">Followers: </span>
          <span className="quantity">{stats.followers}</span>
        </UserStatsItem>
        <UserStatsItem>
          <span className="label">Views: </span>
          <span className="quantity">{stats.views}</span>
        </UserStatsItem>
        <UserStatsItem>
          <span className="label">Likes: </span>
          <span className="quantity">{stats.likes}</span>
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
