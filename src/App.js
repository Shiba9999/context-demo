import React, { Fragment } from "react";
import "./App.css";
import { MyContext } from "./context";
import Provider from "./Provider";

const Agent = () => {
  return <AgentTwo />;
};
const AgentTwo = () => {
  return <AgentThree />;
};

const AgentThree = () => {
  return <AgentFour />;
};
const AgentFour = () => {
  return (
 <MyContext.Consumer  >
      {(context) => (
        <Fragment>
          <h1>{context.value.mname}</h1>
          <h2>{context.value.agent}</h2>
          <h3>{context.value.accept}</h3>
          <button onClick={context.isMissionAccepted}>Click Me</button>
        </Fragment>
      )}
    </MyContext.Consumer>
  );
}


function App() {
  return (
    <div className="App">
      <Provider>
        <Agent />
      </Provider>
    </div>
  );
}

export default App;
