import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import App, { InnerComponent, MyContextProvider } from './App';
import { ForceRenderWrapper } from './ForceRender1';
import { ForceRenderWrapper2, mockFn as fcMockfn } from './ForceRender2';

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

  // Fails - only received one call
  expect(mockFn).toHaveBeenCalledTimes(2);
});


test('event fires on render 3', () => {
  const mockFn = jest.fn();

  render(
    <ForceRenderWrapper>
      <MyContextProvider somePassedFunction={mockFn}>
        <InnerComponent />
      </MyContextProvider>
    </ForceRenderWrapper>
  );

  const button = screen.getByRole('button');
  userEvent.click(button);

  // Fails - only received one call
  expect(mockFn).toHaveBeenCalledTimes(2);
});


test('event fires on render 4', () => {




  render(
    <ForceRenderWrapper2/> );

  const button = screen.getByRole('button');
  userEvent.click(button);

  // Fails - only received one call
});
