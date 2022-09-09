import '../css/Show.css';
import PropTypes from 'prop-types';

const Show = ({
  id, name, image='', rating='', genres='',
}) => {
  const temp = 'show';

  return (
    <>
      <div
        className={temp}
        style={{
          background: `linear-gradient(rgba(151,3,55,0.5),
          rgba(151,3,55,0.5)) , url(${image}) no-repeat center top`,
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

Show.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  rating: PropTypes.string,
  genres: PropTypes.string,
};

export default Show;
