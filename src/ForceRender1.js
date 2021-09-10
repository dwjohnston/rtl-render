
import React from "react";


export const ForceRenderWrapper = (props) => {
  const [value, setValue] = React.useState(1);

  return (
    <div>
      <button onClick={() => setValue(value + 1)}>force render</button>
      {props.children}
    </div>
  );
};