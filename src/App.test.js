import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import App, { InnerComponent, MyContextProvider } from './App';

test('Event fires on mount', () => {
  const mockFn = jest.fn();

  render(
    <MyContextProvider somePassedFunction={mockFn}>
      <InnerComponent />
    </MyContextProvider>
  );

  expect(mockFn).toHaveBeenCalledTimes(1);
});

test('Event fires on render', () => {
  const mockFn = jest.fn();

  render(<App somePassedFunction={mockFn} />);

  const button = screen.getByRole('button');
  userEvent.click(button);

  expect(mockFn).toHaveBeenCalledTimes(2);
});



// Why does this not work? 

test('event fires on render 2', () => {
  const mockFn = jest.fn();

  const Wrapper = (props) => {
    const [value, setValue] = React.useState(1);
  
    return (
      <div>
        <button onClick={() => setValue(value + 1)}>click me</button>
        {props.children}
      </div>
    );
  };

  render(
    <Wrapper>
      <MyContextProvider somePassedFunction={mockFn}>
        <InnerComponent />
      </MyContextProvider>
    </Wrapper>
  );

  const button = screen.getByRole('button');
  userEvent.click(button);

  expect(mockFn).toHaveBeenCalledTimes(2);
});
