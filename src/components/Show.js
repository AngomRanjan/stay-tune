import '../css/Show.css';
import PropTypes from 'prop-types';

const Show = ({
  id, name, image, rating, genres,
}) => {
  const temp = 'show';

  return (
    <>
      <div
        className={temp}
        style={{
          background: `linear-gradient(#b4b4b4cc,
          #313131aa) , url(${image}) no-repeat center top`,
          backgroundSize: 'contain',
        }}
        name={name}
        id={id}
      >
        <h4 className="show__title">
          {'  rating:  '}
          {rating}
        </h4>
        <p>
          {genres}
        </p>
      </div>
    </>
  );
};

Show.defaultProps = {
  image: 'none',
  rating: 5,
  genres: 'general',
};

Show.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  rating: PropTypes.number,
  genres: PropTypes.string,
};

export default Show;
