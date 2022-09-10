import '../css/Shows.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import Show from './Show';
import { getShowsAction } from '../redux/showsReducer';

const Shows = () => {
  const shows = useSelector((state) => state.shows);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getShowsAction());
  }, []);

  return (
    <div
      className="shows"
    >
      <section className="shows__topBar">
        Space for top bar
      </section>
      <main className="shows__container">
        {shows.map((show) => (
          <IconButton
            key={show.id}
            onClick={() => navigate(`/showInfos/${show.id}`)}
            className="icon__button--noDeco"
          >
            <Show
              id={show.id}
              name={show.name}
              image={show.image.medium}
              rating={show.rating.average}
              genres={show.genres[0]}
            />
          </IconButton>

        ))}
      </main>
    </div>
  );
};

export default Shows;
