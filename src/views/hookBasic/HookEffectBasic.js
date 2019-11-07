import React, { useState, useEffect } from "react";

let renderCount = 0;

const style = {
  boardStyle: {
    border: "1px black solid",
    width: "500px"
  }
};

const HookEffectBasic = props => {
  console.log("HOOK EFFECT INNER");
  const [getCount, setcount] = useState(0);
  const [getOtherCount, setOtherCount] = useState(0);

  useEffect(() => {
    setcount(getCount + 1);
    setOtherCount(getOtherCount + 1);
  }, []);

  const addCount = () => {
    setcount(getCount + 1);
  };

  return (
    <div style={style.boardStyle}>
      {console.log("Effect Basic Render")}
      <div>Use Effect</div>
      <div>
        Render count when using two useState in useEffect : {renderCount}
      </div>
      <br />
      <button onClick={addCount}> count add one </button>
      <br />
      <span>normal Count : {getCount}</span>
      <br />
      <span>other Count: {getOtherCount}</span>
      <br />
    </div>
  );
};

export default HookEffectBasic;
