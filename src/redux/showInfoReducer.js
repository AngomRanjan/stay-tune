import axios from 'axios';

const GET_SHOW_INFO = 'GET_SHOW_INFO';

const initialState = [];

export const fetchShowInfo = (data) => ({
  type: GET_SHOW_INFO, payload: data,
});

export const getShowInfoAction = (BaseUrl) => async (dispatch) => {
  await axios.get(BaseUrl)
    .then((res) => {
      dispatch(fetchShowInfo(res.data));
    });
};

const showInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SHOW_INFO:
      return [action.payload];

    default:
      return state;
  }
};

export default showInfoReducer;
