import '../css/Shows.css';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Show from './Show';
import { getShowsAction } from '../redux/showsReducer';
import arrow from '../assets/arrow.jpg';

const Shows = () => {
  const shows = useSelector((state) => state.shows);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(getShowsAction());
  }, []);

  return (
    <div
      className="shows"
    >
      <section
        className="shows_banner banner"
        style={{
          background: `linear-gradient(to top right, #1f1f1fff,
                #b4b4b400) , url(${arrow}) no-repeat center top`,
          backgroundSize: '100% 100%',
        }}
      >
        <div className="banner__intro">
          <article className="banner__intro__content">
            <h1 className="banner__intro__title">
              Hi Welcome to Stay Tune!
            </h1>
            <p>
              Explore and enjoy from a list of collection.
            </p>
            <p>
              Start with this one....
            </p>
            <div className="showInfo__summary">
              After a violent shipwreck, billionaire playboy Oliver
              Queen was missing and presumed dead for five years before
              being discovered alive on a remote island in the Pacific
              . He returned home to Starling City, welcomed by his devoted mother Moira
              , beloved sister Thea and former flame Laurel Lance.
              With the aid of his trusted chauffeur/bodyguard John Diggle
              , the computer-hacking skills of Felicity Smoak and the occasional
              , reluctant assistance of former police detective, now beat cop
              , Quentin Lance, Oliver has been waging a one-man war on crime.
            </div>
            <h4 className="tagline">
              What is next? ...
            </h4>
            <h5 className="appName">
              Stay Tune!
            </h5>
          </article>
        </div>
      </section>
      <section className="shows__search">
        <form className="sheader__center">
          <SearchIcon />
          <input
            value={search}
            placeholder="Find your show"
            type="text"
            id="search1"
            onChange={(event) => setSearch(event.target.value)}
          />
        </form>
      </section>
      <main className="shows__container">
        {shows.filter((show) => {
          if (search === '') {
            return true;
          } if (show.name.toLowerCase().includes(search.toLowerCase())) {
            return true;
          } return false;
        }).map((show) => (
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
