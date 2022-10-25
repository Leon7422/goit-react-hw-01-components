import PropTypes from 'prop-types';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableItem,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
  const items = transactions.map(el => (
    <TableRow key={el.id}>
      <TableItem>{el.type}</TableItem>
      <TableItem>{el.amount}</TableItem>
      <TableItem>{el.currency}</TableItem>
    </TableRow>
  ));

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </TableRow>
      </TableHeader>

      <TableBody>{items}</TableBody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};
