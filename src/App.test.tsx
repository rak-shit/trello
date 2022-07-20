import { render, screen } from '@testing-library/react'
import Board from './Components/Board';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import userEvent from '@testing-library/user-event';
import * as actions from './actions/actions'

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
  const title = screen.getByText(/default name/i);
  expect(title).toBeInTheDocument();
  const task_one = screen.getByText(/task 1/i);
  expect(task_one).toBeInTheDocument();
  const task_two = screen.getByText(/task 2/i);
  expect(task_two).toBeInTheDocument();
  const task_three = screen.getByText(/task 3/i);
  expect(task_three).toBeInTheDocument();
});

test('Expect the add list div to be opened', () => {
  const initialState = {
    listReducer: {
      list: [
        {
          title: 'Name',
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
  const addList = screen.getByTestId('add-list')
  userEvent.click(addList)
  const save_task = screen.getByText(/save task/i);
  expect(save_task).toBeInTheDocument();
});

test('Delete the board', () => {
  const initialState = {
    listReducer: {
      list: [
        {
          title: 'Name',
          taskList: ['Task 1', 'Task 2', 'Task 3']
        }
      ]
    }
  }
  const mockStore = configureStore();
  let store = mockStore(initialState);
  let mockDeleteList: jest.SpyInstance
  mockDeleteList = jest.spyOn(actions, 'deleteList')
  render(
    <Provider store={store}>
      <Board />
    </Provider>
  );
  const deleteList = screen.getByTestId('delete-list-Name')
  userEvent.click(deleteList)
  expect(mockDeleteList).toHaveBeenCalledTimes(1)
});

test('Expect new board to be added', () => {
  const initialState = {
    listReducer: {
      list: [
        {
          title: 'Name',
          taskList: ['Task 1', 'Task 2', 'Task 3']
        }
      ]
    }
  }
  const mockStore = configureStore();
  let store = mockStore(initialState);
  let mockaddNewList: jest.SpyInstance
  mockaddNewList = jest.spyOn(actions, 'addNewList')
  render(
    <Provider store={store}>
      <Board />
    </Provider>
  );
  const addList = screen.getByTestId('add-list')
  userEvent.click(addList)
  const title = screen.getByTestId('new-board-title')
  userEvent.type(title, 'New Title')
  const task = screen.getByTestId('new-task-name')
  userEvent.type(task, 'task')
  const save_task = screen.getByTestId('new-task-add');
  userEvent.click(save_task)
  const save_list = screen.getByTestId('new-board-add');
  userEvent.click(save_list)
  expect(mockaddNewList).toHaveBeenCalledTimes(1)
});

test('Delete a task', () => {
  const initialState = {
    listReducer: {
      list: [
        {
          title: 'Name',
          taskList: ['Task 1', 'Task 2', 'Task 3']
        }
      ]
    }
  }
  const mockStore = configureStore();
  let store = mockStore(initialState);
  let mockDeleteTask: jest.SpyInstance
  mockDeleteTask = jest.spyOn(actions, 'deleteTask')
  render(
    <Provider store={store}>
      <Board />
    </Provider>
  );
  const deleteList = screen.getByTestId('Task 1')
  userEvent.click(deleteList)
  expect(mockDeleteTask).toHaveBeenCalledTimes(1)
});

test('Edit a task', () => {
  const initialState = {
    listReducer: {
      list: [
        {
          title: 'Name',
          taskList: ['Task 1', 'Task 2', 'Task 3']
        }
      ]
    }
  }
  const mockStore = configureStore();
  let store = mockStore(initialState);
  let mockEditTask: jest.SpyInstance
  mockEditTask = jest.spyOn(actions, 'editTask')
  render(
    <Provider store={store}>
      <Board />
    </Provider>
  );
  const editTask = screen.getByTestId('edit-Task 1')
  userEvent.click(editTask)
  const inputTask = screen.getByTestId('input-Task 1')
  userEvent.type(inputTask, 'task')
  const saveTask = screen.getByTestId('save-Task 1')
  userEvent.click(saveTask)
  expect(mockEditTask).toHaveBeenCalledTimes(1)
});

test('Edit title name', () => {
  const initialState = {
    listReducer: {
      list: [
        {
          title: 'Name',
          taskList: ['Task 1', 'Task 2', 'Task 3']
        }
      ]
    }
  }
  const mockStore = configureStore();
  let store = mockStore(initialState);
  let mockChangeTitle: jest.SpyInstance
  mockChangeTitle = jest.spyOn(actions, 'changeTitle')
  render(
    <Provider store={store}>
      <Board />
    </Provider>
  );
  const titleName = screen.getByTestId('board-title-Name')
  userEvent.click(titleName)
  const inputTitle = screen.getByTestId('edit-title-Name')
  userEvent.type(inputTitle, 'New Name')
  const saveTitle = screen.getByTestId('save-title-Name')
  userEvent.click(saveTitle)
  expect(mockChangeTitle).toHaveBeenCalledTimes(1)
});

test('Add new task', () => {
  const initialState = {
    listReducer: {
      list: [
        {
          title: 'Name',
          taskList: ['Task 1', 'Task 2', 'Task 3']
        }
      ]
    }
  }
  const mockStore = configureStore();
  let store = mockStore(initialState);
  let mockAddNewTask: jest.SpyInstance
  mockAddNewTask = jest.spyOn(actions, 'addNewTask')
  render(
    <Provider store={store}>
      <Board />
    </Provider>
  );
  const newTaskName = screen.getByTestId('new-task-Name')
  userEvent.type(newTaskName, 'New Name')
  const saveNewTask = screen.getByTestId('save-new-task-Name')
  userEvent.click(saveNewTask)
  expect(mockAddNewTask).toHaveBeenCalledTimes(1)
});
