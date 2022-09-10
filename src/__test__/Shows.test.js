import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import store from '../redux/configureStore';
import Shows from '../components/Shows';
import { fetchShows } from '../redux/showsReducer';

describe('Shows tests', () => {
  test('should render', () => {
    const detailpage = render(
      <Provider store={store}>
        <HashRouter>
          <Shows />
        </HashRouter>
      </Provider>,
    );
    expect(detailpage).toMatchSnapshot();
  });

  it('should return an action with type GET_SHOWS', () => {
    const data = [{
      id: 1,
      name: 'arfs',
    }];
    const action = fetchShows(data);
    expect(action.type).toBe('GET_SHOWS');
  });
});
