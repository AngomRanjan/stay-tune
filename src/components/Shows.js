import '../css/Shows.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Show from './Show';
import { getShowsAction } from '../redux/shows';

const Shows = () => {
  const dispatch = useDispatch();
  const shows = useSelector((state) => state.shows);

  useEffect(() => {
    if (!shows.length) dispatch(getShowsAction());
  }, []);

  return (
    <div
      className="shows"
    >
    <Show
            id={0}
            name="test"
            image=""
            rating=""
            genres=""
          />
    </div>
  );
};

export default Shows;
