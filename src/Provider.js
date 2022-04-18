import React, { useState } from "react";
import { MyContext } from "./context";

function Provider(props) {
  console.log("Provider", MyContext);
  const [mission, setMission] = useState({
    mname: "",
    agent: 7,
    accept: "not accepted",
  });

  return (
    <MyContext.Provider
      value={{
        value: mission,
        isMissionAccepted: () => {
          setMission({
            ...mission,
            accept: "accepted",
          });
        },
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
}

export default Provider;
