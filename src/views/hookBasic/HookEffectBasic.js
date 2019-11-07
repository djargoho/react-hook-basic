import React, { useState, useEffect, useCallback } from "react";

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
    // setcount(getCount + 1);
  }, [getCount]);

  return (
    <div style={style.boardStyle}>
      {console.log("Effect Basic Render", ++renderCount)}
      <div>Use Effect</div>
      <div>
        Render count when using two useState in useEffect : {renderCount}
      </div>
      <br />
      <span>normal Count : {getCount}</span>
      <br />
      <span>other Count: {getOtherCount}</span>
      <br />
    </div>
  );
};

export default HookEffectBasic;
