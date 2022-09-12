import '../css/ShowInfo.css';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getShowInfoAction } from '../redux/showInfoReducer';

const ShowInfo = () => {
  const { id } = useParams();
  const showInfo = useSelector((state) => state.showInfos);
  const dispatch = useDispatch();
  const BaseUrl = `https://api.tvmaze.com/shows/${id}`;
  /* eslint-disable */
  useEffect(() => {
    dispatch(getShowInfoAction(BaseUrl));
  }, [BaseUrl]);
  return (
    <div
      className="showInfo"
    >
      {showInfo.map((show) => (
        <div className="showInfo" key={show.id}>
          <section
            className="banner"
            style={{
              background: `linear-gradient(to top right, #1f1f1fff,
                #b4b4b400) , url(${show.image.original}) no-repeat center top`,
              backgroundSize: '100% 100%',
            }}
          >
            <div className="banner__intro">
              <article className="banner__intro__content">
                <h1 className="banner__intro__title">
                  {show.name}
                </h1>
                <p>
                  {show.genres.join(', ')}
                </p>
                <p>
                  {`${show.language} Rating: ${show.rating.average}`}
                </p>
                <div className="showInfo__summary" id={show.id}>
                  {show.summary.replace(/(<([^>]+)>)/ig, '')}
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
          <section className="showInfo__details">
            <div className="showInfo__details_header">
              <h2>Detail Information</h2>
            </div>
            <div className="rows">
              <p>
                {`ID : ${show.id}`}
              </p>
              <p>
                {`Name : ${show.name}`}
              </p>
            </div>
            <div className="rows">
              <p>
                {`Type: ${show.type}`}
              </p>
              <p>
                {`Language: ${show.language}`}
              </p>
              <p>
                {`Status: ${show.status}`}
              </p>
            </div>
            <div className="rows">
              <p>
                {`Genres: ${show.genres.join(', ')}`}
              </p>
              <p>
                {`Run Time: ${show.runtime}minutes`}
              </p>
            </div>
            <div className="rows">
              <p>
                {`Premiered: ${show.premiered}`}
              </p>
              <p>
                {(show.ended) ? `Ended: ${show.ended}` : ''}
              </p>
            </div>
            <div className="rows">
              <p>
                {`Official website: ${show.officialSite}`}
              </p>
            </div>
            <div className="rows">
              <p>
                {`TV Maze Link: ${show.url}`}
              </p>
            </div>
            <div className="rows">
              <p>
                {`Updated: ${1631565378}`}
              </p>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
};

export default ShowInfo;
