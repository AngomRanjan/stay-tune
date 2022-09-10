import axios from 'axios';

const BaseUrl = 'https://api.tvmaze.com/shows';
const GET_SHOWS = 'GET_SHOWS';

const initialState = [];

export const fetchShows = (data) => ({
  type: GET_SHOWS, payload: data,
});

export const getShowsAction = () => async (dispatch) => {
  await axios.get(BaseUrl)
    .then((res) => {
      dispatch(fetchShows(res.data));
    });
};

const showsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SHOWS:
      return [...action.payload];
      // return [action.payload];

    default:
      return state;
  }
};

export default showsReducer;
