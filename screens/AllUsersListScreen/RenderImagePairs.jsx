import PropTypes from 'prop-types';
import Row from '../../components/Row';
import Col from '../../components/Col';
import UserCard from './UserCard';

const RenderImagePairs = (data, navigation) => {
  const pairs = [];
  for (let i = 0; i < data.length; i += 2) {
    const pair = (
      <Row key={i}>
        <Col numRows={1}>
          <UserCard item={data[i]} navigation={navigation} />
        </Col>
        {data[i + 1] && (
          <Col numRows={1}>
            <UserCard item={data[i + 1]} navigation={navigation} />
          </Col>
        )}
      </Row>
    );
    pairs.push(pair);
  }
  return pairs;
};

RenderImagePairs.propTypes = {
  data: PropTypes.array,
  navigation: PropTypes.object,
};

export default RenderImagePairs;
