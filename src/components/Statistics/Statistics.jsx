import PropTypes from 'prop-types';
import { Card, CardSet, CardItem, Title } from './Statistics.styled';

const listItemMaker = data => {
  return data.map(el => {
    return (
      <CardItem key={el.id}>
        <span>{el.label}</span>
        <span> {el.percentage}%</span>
      </CardItem>
    );
  });
};

export const Statistics = ({ title, stats }) => {
  return (
    <Card>
      {title && <Title>{title}</Title>}
      <CardSet>{listItemMaker(stats)}</CardSet>
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
