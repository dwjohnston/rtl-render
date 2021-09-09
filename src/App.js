import logo from './logo.svg';
import './App.css';
import React from 'react';

const MyContext = React.createContext({
  theFunction: () => {},
});

export const MyContextProvider = (props) => {
  // function will be regenerated each render
  const theFunction = () => {
    console.log('the function');

    props.somePassedFunction();
  };

  return (
    <MyContext.Provider value={{ theFunction }}>
      {props.children}
    </MyContext.Provider>
  );
};

export const InnerComponent = (props) => {
  const { theFunction } = React.useContext(MyContext);

  React.useEffect(() => {
    console.log('the function changed');
    theFunction();
  }, [theFunction]);

  return <div></div>;
};

function App(props) {
  const [value, setValue] = React.useState(1);

  const somePassedFunction =
    props.somePassedFunction ||
    (() => {
      console.log('some passed function');
    });

  return (
    <div className="App">
      <button onClick={() => setValue(value + 1)}>inc value</button>
      <MyContextProvider somePassedFunction={somePassedFunction}>
        <InnerComponent />
      </MyContextProvider>
    </div>
  );
}

export default App;
