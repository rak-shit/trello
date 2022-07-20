import { render, screen } from '@testing-library/react'
import Board from './Components/Board';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

test('Component renders properly', () => {
  const initialState = {
    listReducer: {
      list: [
        {
          title: 'Default Name',
          taskList: ['Task 1', 'Task 2', 'Task 3']
        }
      ]
    }
  }
  const mockStore = configureStore();
  let store = mockStore(initialState);
  render(
    <Provider store={store}>
      <Board />
    </Provider>
  );
  const linkElement = screen.getByText(/default name/i);
  expect(linkElement).toBeInTheDocument();
});
