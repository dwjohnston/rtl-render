
import React from "react";
import { InnerComponent, MyContextProvider } from "./App";


export const mockFn = () => {console.log("foo")};

export const ForceRenderWrapper2 = (props ) => {
    const [value, setValue] = React.useState(1);
  

console.log("fc  render");

    return (
      <div>
        <button onClick={() => setValue(value + 1)}>force render</button>{value}
        <MyContextProvider somePassedFunction={mockFn}>
      <InnerComponent />
    </MyContextProvider>      </div>
    );
  };