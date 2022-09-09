import '../css/Shows.css';
import React, { useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Show from './Show';
import { getShowInfoAction } from '../redux/showInfoReducer';

const ShowInfo = () => {
  const { id } = useParams();
  BaseUrl = `'https://api.tvmaze.com/shows'/${id}`;
  const showInfo = useSelector((state) => state.showInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShowInfoAction(BaseUrl));
  }, [BaseUrl]);

  return (
    <div
      className="showInfo"
    >
      {(showInfo) && (
        <Show
          key={showInfo.id}
          id={showInfo.id}
          name={showInfo.name}
          image={showInfo.image.medium}
          rating={showInfo.rating.average}
        />
      )}
      <h1>{showInfo.name}</h1>
    </div>
  );
};

export default ShowInfo;
