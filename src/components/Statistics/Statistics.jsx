import PropTypes from 'prop-types';
import { Card, CardSet, CardItem, Title } from './Statistics.styled';

const listItemMaker = data => {
  return data.map(el => {
    return (
      <CardItem key={el.id}>
        <span className="label">{el.label}</span>
        <span className="quantity"> {el.percentage}%</span>
      </CardItem>
    );
  });
};

export const Statistics = ({ title, stats }) => {
  return (
    <Card className="statistics">
      {title && <Title className="title">{title}</Title>}
      <CardSet className="stat-list">{listItemMaker(stats)}</CardSet>
    </Card>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
